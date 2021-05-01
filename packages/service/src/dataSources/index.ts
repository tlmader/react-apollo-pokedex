import { PokeAPI } from './PokeAPI';

export type DataSources = {
  pokeAPI: PokeAPI;
};

export const dataSources = (): DataSources => ({
  pokeAPI: new PokeAPI(),
});
