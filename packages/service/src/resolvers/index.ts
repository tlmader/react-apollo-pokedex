import { Context, PokemonNode, Resolvers } from '../types';
import { pokemonToPokemonNode } from '../utils/transform';

// Provide resolver functions for your schema fields
export const resolvers: Resolvers = {
  Query: {
    getPokemon: async (
      _,
      { name },
      { dataSources }: Context,
    ): Promise<PokemonNode> => {
      const pokemon = await dataSources.pokeAPI.getPokemon(name);
      return pokemonToPokemonNode(pokemon);
    },
  },
};
