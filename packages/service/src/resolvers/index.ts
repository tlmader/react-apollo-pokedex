import {
  PokemonConnection,
  PokemonEdge,
  PokemonNode,
  Resolvers,
} from 'generated-types';
import { Context, NamedAPIResource } from '../types';
import { fromCursor } from '../utils/cursor';
import { pokemonToEdge, pokemonToPokemonNode } from '../utils/transform';

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
      { after, first, filter },
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
      if (filter?.type) {
        // The type endpoints
        const { pokemon } = await dataSources.pokeAPI.getType(filter.type);
        // Flatten NamedAPIResources
        resources = pokemon.map((p) => p.pokemon);
      } else if (filter?.name) {
        // Filtering by name requires us to get the entire resource list to filter or sort on
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
      if (filter) {
        let filteredResources = resources;
        // Perform name filter on resources
        if (filter.name?.contains) {
          const { contains } = filter.name;
          filteredResources = filteredResources.filter((resource) =>
            resource.name.includes(contains),
          );
        }
        const pageSize = first || 20;
        // Update results to contain the page of the filtered resources
        resources = filteredResources.slice(offset, offset + pageSize);

        // Update previous and next to reflect filtered list
        hasPreviousPage = offset > 0;
        // Set to true if we have remaining filtered resources
        hasNextPage = offset + pageSize < filteredResources.length;
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
