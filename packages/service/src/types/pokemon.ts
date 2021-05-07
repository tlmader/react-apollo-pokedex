/**
 * https://pokeapi.co/docs/v2#namedapiresource
 */
export type NamedAPIResource = {
  name: string;
  url: string;
};

/**
 * https://pokeapi.co/docs/v2#pokemon-section
 */
export type NamedAPIResourceList = {
  count: number;
  next?: string;
  previous?: string;
  results: NamedAPIResource[];
};

/**
 * https://pokeapi.co/docs/v2#pokemon-section
 */
export type Pokemon = {
  id: number;
  name: string;
  base_experience: number;
  height: number;
  order: number;
  weight: number;
  abilities: {
    ability: NamedAPIResource;
  }[];
  held_items: {
    item: NamedAPIResource;
  }[];
  moves: {
    move: NamedAPIResource;
  }[];
  species: NamedAPIResource;
  sprites: {
    back_default: string;
    back_female: string;
    back_shiny_female: string;
    back_shiny: string;
    front_default: string;
    front_female: string;
    front_shiny_female: string;
    front_shiny: string;
  };
  stats: {
    stat: NamedAPIResource;
    base_stat: number;
  }[];
  types: {
    slot: number;
    type: NamedAPIResource;
  }[];
};

export type Type = {
  id: number;
  name: string;
  pokemon: {
    pokemon: NamedAPIResource;
  }[];
};

export type Species = {
  id: number;
  name: string;
  growth_rate: NamedAPIResource;
  varieties: {
    pokemon: NamedAPIResource;
  }[];
};

export type GrowthRate = {
  id: number;
  name: string;
  formula: string;
  levels: {
    level: number;
    experience: number;
  }[];
};
