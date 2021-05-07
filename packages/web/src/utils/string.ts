import upperFirst from 'lodash/upperFirst';
import { PokemonNode } from '../types';

export const formatPokemonCaption = (
  pokemon: Partial<PokemonNode> | undefined,
) => {
  if (!pokemon) {
    return '';
  }
  const types = pokemon?.types?.map((type) => type?.name);
  return `${pokemon?.id} • ${types?.join('/')}`;
};

/**
 * Formats "example-name" to "Example Name"
 */
export const formatName = (name: string): string =>
  name.split('-').map(upperFirst).join(' ');
