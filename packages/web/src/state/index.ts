import { atom } from 'recoil';
import { PokemonNode, PokemonSortInput, Sort } from '../types';

export const searchState = atom<string | undefined>({
  key: 'searchState', // unique ID (with respect to other atoms/selectors)
  default: undefined, // default value (aka initial value)
});

export const typeState = atom<string | undefined>({
  key: 'typeState',
  default: undefined,
});

export const speciesState = atom<string | undefined>({
  key: 'speciesState',
  default: undefined,
});

export const sortState = atom<PokemonSortInput>({
  key: 'sortState',
  default: {
    order: Sort.Asc,
  },
});

export const selectedPokemonState = atom<Partial<PokemonNode> | undefined>({
  key: 'selectedPokemonState',
  default: undefined,
});
