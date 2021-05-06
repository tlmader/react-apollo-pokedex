import { useRecoilValue } from 'recoil';
import { useGetPokemonQuery } from '../operations';
import { selectedPokemonState } from '../state';

export const usePokemonDetails = () => {
  const selectedPokemon = useRecoilValue(selectedPokemonState);

  const { data, loading } = useGetPokemonQuery({
    skip: !selectedPokemon,
    variables: {
      id: selectedPokemon?.id || '',
    },
  });
  const pokemon = data?.getPokemon;

  return { pokemon, loading };
};
