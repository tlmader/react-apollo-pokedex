import { useRecoilValue } from 'recoil';
import { usePokemonDetailsQuery } from '../../operations';
import { selectedPokemonState } from '../../state';

export const usePokemonDetails = () => {
  const selectedPokemon = useRecoilValue(selectedPokemonState);

  const { data, loading } = usePokemonDetailsQuery({
    skip: !selectedPokemon,
    variables: {
      id: selectedPokemon?.id || '',
    },
  });
  const pokemon = data?.getPokemon;

  return { pokemon, loading };
};
