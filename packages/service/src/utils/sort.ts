import { orderBy } from 'lodash';
import { NamedAPIResource, PokemonSortInput, Sort } from '../types';

export const sortPokemonResources = (
  sort: PokemonSortInput,
  resources: NamedAPIResource[],
): NamedAPIResource[] => {
  if (sort.name) {
    // Third param is 'asc' or 'desc', which orderBy uses for sort order
    return orderBy(resources, ['name'], [sort.name]);
  }
  // Only sort for desc; order asc is the default
  if (sort.order === Sort.Desc) {
    return orderBy(resources, ['order'], [sort.order]);
  }
  // Do nothing
  return resources;
};
