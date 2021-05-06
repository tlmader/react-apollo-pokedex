import { atom, selector } from 'recoil';
import { PokemonNode, PokemonSortInput, Sort } from '../types';

export const searchState = atom<string>({
  key: 'searchState', // unique ID (with respect to other atoms/selectors)
  default: '', // default value (aka initial value)
});

export const typeState = atom<string>({
  key: 'typeState',
  default: '',
});

export const speciesState = atom<string>({
  key: 'speciesState',
  default: '',
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

export const filterCountState = selector({
  key: 'filterCountState',
  get: ({ get }) => {
    const type = get(typeState);
    const species = get(speciesState);

    let count = 0;
    if (type) {
      count++;
    }
    if (species) {
      count++;
    }
    return count;
  },
});
