import { Resolvers } from '../types';
import { getPokemon } from './getPokemon';
import { growthRate } from './growthRate';
import { listPokemon } from './listPokemon/listPokemon';
import { pokemonNode } from './pokemonNode';
import { species } from './species';

// Provide resolver functions for your schema fields
export const resolvers: Resolvers = {
  Query: {
    getPokemon,
    listPokemon,
  },
  PokemonEdge: {
    node: pokemonNode,
  },
  PokemonNode: {
    species,
  },
  PokemonSpecies: {
    growthRate,
  },
};
