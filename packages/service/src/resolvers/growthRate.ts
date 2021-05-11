import {
  Context,
  PokemonGrowthRate,
  PokemonSpecies,
  PokemonSpeciesResolvers,
} from '../types';
import { formatName } from '../utils/string';

type PokemonGrowthRateResolver = PokemonSpeciesResolvers<
  Context,
  PokemonSpecies
>['growthRate'];

export const growthRate: PokemonGrowthRateResolver = async (
  parent,
  _,
  { dataSources }: Context,
): Promise<PokemonGrowthRate | null> => {
  const id = parent?.growthRate?.id;
  if (!id) {
    return null;
  }
  return dataSources.pokeAPI.getGrowthRate(id).then((resource) => ({
    id,
    name: formatName(resource.name),
    formula: resource.formula,
    levels: resource.levels,
  }));
};
