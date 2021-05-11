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
  // Use name as id, since this is the identifier included in NamedAPIResource
  id: pokemon.name,
  // Use id as pokedexNumber instead
  pokedexNumber: pokemon.id,
  name: formatName(pokemon.name),
  order: pokemon.order,
  height: pokemon.height,
  baseExperience: pokemon.base_experience,
  weight: pokemon.weight,
  abilities: pokemon.abilities.map((resource) => ({
    id: resource.ability.name,
    name: formatName(resource.ability.name),
  })),
  heldItems: pokemon.held_items.map((resource) => ({
    id: resource.item.name,
    name: formatName(resource.item.name),
  })),
  moves: pokemon.moves.map((resource) => ({
    id: resource.move.name,
    name: formatName(resource.move.name),
  })),
  // Rest of fields resolved by species resolver
  species: {
    id: pokemon.species.name,
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
    id: resource.stat.name,
    // Return all uppercase for hp
    name: resource.stat.name === 'hp' ? 'HP' : formatName(resource.stat.name),
    baseStat: resource.base_stat,
  })),
  types: pokemon.types
    // Sort by slot
    .sort((a, b) => a.slot - b.slot)
    .map((resource) => ({
      id: resource.type.name,
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
    id: resource.name,
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
