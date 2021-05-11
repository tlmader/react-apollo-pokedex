import {
  Context,
  PokemonNode,
  PokemonNodeResolvers,
  PokemonSpecies,
} from '../types';
import { formatName } from '../utils';

type PokemonSpeciesResolver = PokemonNodeResolvers<
  Context,
  PokemonNode
>['species'];
export const species: PokemonSpeciesResolver = async (
  parent,
  _,
  { dataSources }: Context,
): Promise<PokemonSpecies | null> => {
  const id = parent?.species?.id;
  if (!id) {
    return null;
  }
  return dataSources.pokeAPI.getSpecies(id).then((resource) => ({
    id,
    name: formatName(resource.name),
    growthRate: {
      // Resolved to complete resource by growthRate resolver
      id: resource.growth_rate.name,
    },
  }));
};
