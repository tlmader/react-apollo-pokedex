import {
  Context,
  PokemonConnection,
  PokemonEdge,
  QueryResolvers,
} from '../../types';
import { fromCursor } from '../../utils/cursor';
import { resourceToEdge } from '../../utils/transform';
import {
  createPokemonConnection,
  getFilteredSortedPokemonResources,
  getPokemonResources,
} from './utils';

type ListPokemonResolver = QueryResolvers<Context>['listPokemon'];

export const listPokemon: ListPokemonResolver = async (
  _,
  { after, first, filter, sort },
  { dataSources },
): Promise<PokemonConnection> => {
  if (first && first > 50) {
    throw new Error('Please use a first value that is 50 or lower.');
  }
  // Add 1 to fromCursor result so we get results after the given cursor
  const offset = after ? fromCursor(after) + 1 : 0;
  // Fetch the resources based on the query variables
  const result = await getPokemonResources(
    dataSources,
    offset,
    first,
    filter,
    sort,
  );
  // null if no filtering or sorting is requested
  const filteredSortedResult = getFilteredSortedPokemonResources(
    result.resources,
    offset,
    first,
    filter,
    sort,
  );
  // Use the filtered/sorted result if present
  const { resources, hasPreviousPage, hasNextPage, totalCount } =
    filteredSortedResult || result;

  const edges: PokemonEdge[] = resources.map(resourceToEdge(offset));

  return createPokemonConnection(
    edges,
    hasPreviousPage,
    hasNextPage,
    totalCount,
  );
};
