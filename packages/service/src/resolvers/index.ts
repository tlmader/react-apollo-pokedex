import { Context, PokemonNode, Resolvers } from '../types';

// Provide resolver functions for your schema fields
export const resolvers: Resolvers = {
  Query: {
    getPokemon: async (
      _,
      { name },
      { dataSources }: Context,
    ): Promise<PokemonNode> => {
      const pokemon = await dataSources.pokeAPI.getPokemon(name);
      return {
        id: pokemon.id,
        name: pokemon.name,
      };
    },
  },
};
