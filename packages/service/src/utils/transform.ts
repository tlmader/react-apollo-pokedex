import {
  NamedAPIResource,
  Pokemon,
  PokemonEdge,
  PokemonNode,
  Species,
  Type,
} from '../types';
import { toCursor } from './cursor';
import { formatName } from './string';

export const pokemonToPokemonNode = (pokemon: Pokemon): PokemonNode => ({
  id: pokemon.id,
  name: formatName(pokemon.name),
  order: pokemon.order,
  height: pokemon.height,
  baseExperience: pokemon.base_experience,
  weight: pokemon.weight,
  abilities: pokemon.abilities.map((resource) => ({
    name: formatName(resource.ability.name),
  })),
  heldItems: pokemon.held_items.map((resource) => ({
    name: formatName(resource.item.name),
  })),
  moves: pokemon.moves.map((resource) => ({
    name: formatName(resource.move.name),
  })),
  stats: pokemon.stats.map((resource) => ({
    name: formatName(resource.stat.name),
    baseStat: resource.base_stat,
  })),
  sprites: {
    frontDefault: pokemon.sprites.front_default,
    backDefault: pokemon.sprites.back_default,
  },
  types: pokemon.types
    // Sort by slot
    .sort((a, b) => a.slot - b.slot)
    .map((resource) => ({
      name: formatName(resource.type.name),
    })),
});

export const pokemonToEdge = (offset: number) => (
  pokemon: Pokemon,
  index: number,
): PokemonEdge => ({
  // Use index to create the cursor so that it works with filtered or sorted lists
  cursor: toCursor(offset + index),
  node: pokemonToPokemonNode(pokemon),
});

export const speciesToPokemonResource = (
  species: Species,
): NamedAPIResource[] => species.varieties.map((variety) => variety.pokemon);

export const typeToPokemonResource = (type: Type): NamedAPIResource[] =>
  type.pokemon.map((p) => p.pokemon);
