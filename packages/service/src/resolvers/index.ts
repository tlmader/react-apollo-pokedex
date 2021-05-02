import {
  Context,
  PokemonConnection,
  PokemonEdge,
  PokemonNode,
  Resolvers,
} from '../types';
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
      // Add 1 to fromCursor result so we get results after the given cursor
      const offset = after ? fromCursor(after) + 1 : 0;

      // Filtering or sorting requires us to get the entire resource list to filter or sort on
      const resourceList = await (filter
        ? dataSources.pokeAPI.getPokemonResourceList(9999)
        : dataSources.pokeAPI.getPokemonResourceList(first, offset));

      // These values may be adjusted in the filter steps
      let { results } = resourceList;
      let hasPreviousPage = !!resourceList.previous;
      let hasNextPage = !!resourceList.next;
      // Perform filter on resource list
      if (filter?.name?.contains) {
        const { contains } = filter.name;
        const filteredResults = results.filter((resource) =>
          resource.name.includes(contains),
        );

        const pageSize = first || 20;
        // Update results to contain the page of the filtered list
        results = filteredResults.slice(offset, offset + pageSize);
        console.log({
          offset,
          pageSize,
          filteredResults,
          results,
        });

        // Update previous and next to reflect filtered list
        hasPreviousPage = offset > 0;
        // Set to true if we have remaining filtered results
        hasNextPage = offset + pageSize < filteredResults.length;
      }

      // Retrieve the complete pokemon data for each resource and convert to edges
      const pokemons = await Promise.all(
        results.map(async (resource) =>
          dataSources.pokeAPI.getPokemon(resource.name),
        ),
      );
      const edges: PokemonEdge[] = pokemons.map(pokemonToEdge(offset));

      return createPokemonConnection(edges, hasPreviousPage, hasNextPage);
    },
  },
};

export const createPokemonConnection = (
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
