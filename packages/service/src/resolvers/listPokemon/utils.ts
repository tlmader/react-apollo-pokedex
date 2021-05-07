import intersectionBy from 'lodash/intersectionBy';
import { DataSources } from '../../dataSources';
import {
  NamedAPIResource,
  PokemonConnection,
  PokemonEdge,
  PokemonFilterInput,
  PokemonSortInput,
} from '../../types';
import { sortPokemonResources } from '../../utils/sort';
import {
  speciesToPokemonResource,
  typeToPokemonResource,
} from '../../utils/transform';

/**
 * Gets the required resources based on the query variables.
 */
export const getPokemonResources = async (
  dataSources: DataSources,
  offset: number,
  first?: number | null,
  filter?: PokemonFilterInput | null,
  sort?: PokemonSortInput | null,
): Promise<{
  resources: NamedAPIResource[];
  hasPreviousPage: boolean;
  hasNextPage: boolean;
  totalCount: number;
}> => {
  let resources: NamedAPIResource[] = [];
  let totalCount = 0;
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
        dataSources.pokeAPI.getType(filter.type).then(typeToPokemonResource),
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
    const { results } = await dataSources.pokeAPI.getPokemonResourceList(9999);
    resources = results;
  } else {
    const {
      count,
      results,
      previous,
      next,
    } = await dataSources.pokeAPI.getPokemonResourceList(first, offset);

    resources = results;
    // If we are using the paged resource list, set PageInfo flags and totalCount here
    hasPreviousPage = !!previous;
    hasNextPage = !!next;
    totalCount = count;
  }
  return {
    resources,
    hasPreviousPage,
    hasNextPage,
    totalCount,
  };
};

/**
 * Returns the filtered and sorted list of resources,
 * or null if no filtering or sorting is requested.
 */
export const getFilteredSortedPokemonResources = (
  resources: NamedAPIResource[],
  offset: number,
  first?: number | null,
  filter?: PokemonFilterInput | null,
  sort?: PokemonSortInput | null,
): {
  resources: NamedAPIResource[];
  hasPreviousPage: boolean;
  hasNextPage: boolean;
  totalCount: number;
} | null => {
  if (!sort && !filter) {
    return null;
  }
  // Handle all filtering
  // Temporary array where we will perform all sorting/filtering on
  let modifiedResources = resources.slice();
  // Perform name filter on resources
  if (filter?.name?.contains) {
    const { contains } = filter.name;
    modifiedResources = modifiedResources.filter((resource) =>
      resource.name.includes(contains),
    );
  }
  // Set total count to number of resources after filtering
  const totalCount = modifiedResources.length;

  // Apply sort to resources
  if (sort) {
    modifiedResources = sortPokemonResources(sort, modifiedResources);
  }

  const pageSize = first || 20;
  // Update results to contain the page of the filtered resources
  const pagedResources = modifiedResources.slice(offset, offset + pageSize);

  // Update previous and next to reflect filtered list
  const hasPreviousPage = offset > 0;
  // Set to true if we have remaining filtered resources
  const hasNextPage = offset + pageSize < modifiedResources.length;

  return {
    resources: pagedResources,
    totalCount,
    hasPreviousPage,
    hasNextPage,
  };
};

export const createPokemonConnection = (
  edges: PokemonEdge[],
  hasPreviousPage: boolean,
  hasNextPage: boolean,
  totalCount: number,
): PokemonConnection => ({
  edges,
  totalCount,
  pageInfo: {
    startCursor: edges[0]?.cursor,
    endCursor: edges[edges.length - 1]?.cursor,
    hasPreviousPage,
    hasNextPage,
  },
});
