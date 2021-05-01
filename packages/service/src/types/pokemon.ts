export type Pokemon = {
  id: string;
  name: string;
};

export type PokemonResults = {
  count: number;
  next: string;
  previous: string;
  results: {
    name: string;
    url: string;
  }[];
};
