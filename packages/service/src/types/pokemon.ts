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
  next: string;
  previous: string;
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
  sprites: {
    front_default: string;
    back_default: string;
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
