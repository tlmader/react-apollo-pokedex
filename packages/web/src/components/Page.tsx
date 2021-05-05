import { useRecoilState } from 'recoil';
import { useListPokemonQuery } from '../operations';
import { searchState, speciesState, typeState } from '../state';
import { Header } from './Header';
import logo from './logo.svg';
import './Page.css';

export const Page = () => {
  const [search] = useRecoilState(searchState);
  const [type] = useRecoilState(typeState);
  const [species] = useRecoilState(speciesState);

  const { data } = useListPokemonQuery({
    variables: {
      filter: {
        name: {
          contains: search,
        },
        species,
        type,
      },
    },
  });

  return (
    <div className="App">
      <Header />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {JSON.stringify({
          search,
          type,
          species,
          data,
        })}
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
};
