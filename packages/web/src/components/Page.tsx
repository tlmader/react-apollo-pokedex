import { useRecoilValue } from 'recoil';
import { useListPokemonQuery } from '../operations';
import { searchState, sortState, speciesState, typeState } from '../state';
import { Header } from './Header';
import logo from './logo.svg';
import './Page.css';
import { PokemonCard } from './PokemonCard';

export const Page = () => {
  const search = useRecoilValue(searchState);
  const type = useRecoilValue(typeState);
  const species = useRecoilValue(speciesState);
  const sort = useRecoilValue(sortState);

  const { data } = useListPokemonQuery({
    variables: {
      filter: {
        name: {
          contains: search,
        },
        species,
        type,
      },
      sort,
    },
  });

  const pokemon = data?.listPokemon?.edges?.map((edge) => edge?.node);

  return (
    <div className="App">
      <Header />
      {pokemon?.map((p) => p && <PokemonCard pokemon={p} key={p.id} />)}
    </div>
  );
};
