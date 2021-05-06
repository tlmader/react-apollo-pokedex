import { PokemonNode } from '../../types';

export const formatPokemonCaption = (
  pokemon: Partial<PokemonNode> | undefined,
) => {
  if (!pokemon) {
    return '';
  }
  const types = pokemon?.types?.map((type) => type?.name);
  return `${pokemon?.id} • ${types?.join('/')}`;
};
