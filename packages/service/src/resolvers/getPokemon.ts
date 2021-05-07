import { Context, PokemonNode, QueryResolvers } from '../types';
import { pokemonToPokemonNode } from '../utils/transform';

type GetPokemonResolver = QueryResolvers<Context>['getPokemon'];

export const getPokemon: GetPokemonResolver = (
  _,
  { id },
  { dataSources },
): Promise<PokemonNode> => {
  return dataSources.pokeAPI.getPokemon(id).then(pokemonToPokemonNode);
};
