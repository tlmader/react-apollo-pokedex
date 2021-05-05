import { Context, PokemonNode, QueryResolvers } from '../types';
import { pokemonToPokemonNode } from '../utils/transform';

export const getPokemon: QueryResolvers['getPokemon'] = (
  _,
  { id },
  { dataSources }: Context,
): Promise<PokemonNode> => {
  return dataSources.pokeAPI.getPokemon(id).then(pokemonToPokemonNode);
};
