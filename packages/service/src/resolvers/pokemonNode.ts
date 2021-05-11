import {
  Context,
  PokemonEdge,
  PokemonEdgeResolvers,
  PokemonNode,
} from '../types';
import { pokemonToPokemonNode } from '../utils';

type PokemonGrowthRateResolver = PokemonEdgeResolvers<
  Context,
  PokemonEdge
>['node'];

/**
 * Retrieves the complete pokemon node for each edge.
 */
export const pokemonNode: PokemonGrowthRateResolver = async (
  parent,
  _,
  { dataSources }: Context,
): Promise<PokemonNode | null> => {
  const id = parent?.node?.id;
  if (!id) {
    return null;
  }
  return dataSources.pokeAPI.getPokemon(id).then(pokemonToPokemonNode);
};
