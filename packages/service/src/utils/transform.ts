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
  id: pokemon.id.toString(),
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
  // Rest of fields resolved by species resolver
  species: {
    name: pokemon.species.name,
  },
  sprites: {
    frontDefault: pokemon.sprites.front_default,
    backDefault: pokemon.sprites.back_default,
    frontShiny: pokemon.sprites.front_shiny,
    backShiny: pokemon.sprites.back_shiny,
    frontFemale: pokemon.sprites.front_female,
    backFemale: pokemon.sprites.back_female,
    frontShinyFemale: pokemon.sprites.front_shiny_female,
    backShinyFemale: pokemon.sprites.back_shiny_female,
  },
  stats: pokemon.stats.map((resource) => ({
    // Return all uppercase for hp
    name: resource.stat.name === 'hp' ? 'HP' : formatName(resource.stat.name),
    baseStat: resource.base_stat,
  })),
  types: pokemon.types
    // Sort by slot
    .sort((a, b) => a.slot - b.slot)
    .map((resource) => ({
      name: formatName(resource.type.name),
    })),
});

export const resourceToEdge = (offset: number) => (
  resource: NamedAPIResource,
  index: number,
): PokemonEdge => ({
  // Use index to create the cursor so that it works with filtered or sorted lists
  cursor: toCursor(offset + index),
  node: {
    name: resource.name,
  },
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
