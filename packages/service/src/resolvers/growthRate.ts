import {
  Context,
  PokemonGrowthRate,
  PokemonSpecies,
  PokemonSpeciesResolvers,
} from '../types';

type PokemonGrowthRateResolver = PokemonSpeciesResolvers<
  Context,
  PokemonSpecies
>['growthRate'];

export const growthRate: PokemonGrowthRateResolver = async (
  parent,
  _,
  { dataSources }: Context,
): Promise<PokemonGrowthRate | null> => {
  const name = parent?.growthRate?.name;
  if (!name) {
    return null;
  }
  return dataSources.pokeAPI.getGrowthRate(name).then((resource) => ({
    name,
    id: resource.id.toString(),
    formula: resource.formula,
    levels: resource.levels,
  }));
};
