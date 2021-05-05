import intersectionBy from 'lodash/intersectionBy';
import {
  Context,
  NamedAPIResource,
  PokemonConnection,
  PokemonEdge,
  PokemonNode,
  Resolvers,
} from '../types';
import { fromCursor } from '../utils/cursor';
import { sortPokemonResources } from '../utils/sort';
import {
  pokemonToEdge,
  pokemonToPokemonNode,
  speciesToPokemonResource,
  typeToPokemonResource,
} from '../utils/transform';

// Provide resolver functions for your schema fields
export const resolvers: Resolvers = {
  Query: {
    getPokemon: (
      _,
      { name },
      { dataSources }: Context,
    ): Promise<PokemonNode> => {
      return dataSources.pokeAPI.getPokemon(name).then(pokemonToPokemonNode);
    },
    listPokemon: async (
      _,
      { after, first, filter, sort },
      { dataSources }: Context,
    ): Promise<PokemonConnection> => {
      if (first && first > 50) {
        throw new Error('Please use a first value that is 50 or lower.');
      }
      // Add 1 to fromCursor result so we get results after the given cursor
      const offset = after ? fromCursor(after) + 1 : 0;

      let resources: NamedAPIResource[] = [];
      let hasPreviousPage = false;
      let hasNextPage = false;
      if (filter?.species || filter?.type) {
        // Add the required requests
        const requests = [];
        if (filter?.species) {
          requests.push(
            dataSources.pokeAPI
              .getSpecies(filter.species)
              .then(speciesToPokemonResource),
          );
        }
        if (filter?.type) {
          requests.push(
            dataSources.pokeAPI
              .getType(filter.type)
              .then(typeToPokemonResource),
          );
        }
        // Perform all filter requests concurrently
        const resultResources = await Promise.all(requests);
        if (resultResources.length > 1) {
          // Intersect all Pokemon resources from all filter requests
          resources = intersectionBy(
            resultResources[0],
            resultResources[1],
            (resource) => resource.name,
          );
        } else {
          resources = resultResources[0];
        }
      } else if (sort || filter?.name) {
        // Sorting or filtering by name requires us to get the entire resource list to filter or sort on
        const { results } = await dataSources.pokeAPI.getPokemonResourceList(
          9999,
        );
        resources = results;
      } else {
        const {
          results,
          previous,
          next,
        } = await dataSources.pokeAPI.getPokemonResourceList(first, offset);

        resources = results;
        hasPreviousPage = !!previous;
        hasNextPage = !!next;
      }

      // These values may be adjusted in the filter steps
      // Handle all filtering
      if (sort || filter) {
        // Temporary array where we will perform all sorting/filtering on
        let modifiedResources = resources;
        // Perform name filter on resources
        if (filter?.name?.contains) {
          const { contains } = filter.name;
          modifiedResources = modifiedResources.filter((resource) =>
            resource.name.includes(contains),
          );
        }
        // Apply sort to resources
        if (sort) {
          modifiedResources = sortPokemonResources(sort, resources);
        }

        const pageSize = first || 20;
        // Update results to contain the page of the filtered resources
        resources = modifiedResources.slice(offset, offset + pageSize);

        // Update previous and next to reflect filtered list
        hasPreviousPage = offset > 0;
        // Set to true if we have remaining filtered resources
        hasNextPage = offset + pageSize < modifiedResources.length;
      }
      // Retrieve the complete pokemon data for each resource and convert to edges
      const pokemons = await Promise.all(
        resources.map(async (resource) =>
          dataSources.pokeAPI.getPokemon(resource.name),
        ),
      );
      const edges: PokemonEdge[] = pokemons.map(pokemonToEdge(offset));

      return createPokemonConnection(edges, hasPreviousPage, hasNextPage);
    },
  },
};

const createPokemonConnection = (
  edges: PokemonEdge[],
  hasPreviousPage: boolean,
  hasNextPage: boolean,
): PokemonConnection => ({
  pageInfo: {
    startCursor: edges[0]?.cursor,
    endCursor: edges[edges.length - 1]?.cursor,
    hasPreviousPage,
    hasNextPage,
  },
  edges,
});
