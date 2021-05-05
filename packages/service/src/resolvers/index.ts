import { Resolvers } from '../types';
import { getPokemon } from './getPokemon';
import { listPokemon } from './listPokemon/listPokemon';

// Provide resolver functions for your schema fields
export const resolvers: Resolvers = {
  Query: {
    getPokemon,
    listPokemon,
  },
};
