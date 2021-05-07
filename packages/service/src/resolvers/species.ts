import {
  Context,
  PokemonNode,
  PokemonNodeResolvers,
  PokemonSpecies,
} from '../types';

type PokemonSpeciesResolver = PokemonNodeResolvers<
  Context,
  PokemonNode
>['species'];
export const species: PokemonSpeciesResolver = async (
  parent,
  _,
  { dataSources }: Context,
): Promise<PokemonSpecies | null> => {
  const name = parent?.species?.name;
  if (!name) {
    return null;
  }
  return dataSources.pokeAPI.getSpecies(name).then((resource) => ({
    name,
    id: resource.id.toString(),
    growthRate: {
      name: resource.growth_rate.name,
    },
  }));
};
