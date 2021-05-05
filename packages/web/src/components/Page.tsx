import { createStyles, makeStyles, Theme } from '@material-ui/core';
import { Header } from './Header';
import { PokemonList } from './PokemonList';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    listContainer: {
      display: 'grid',
      justifyContent: 'center',
    },
  }),
);

export const Page = () => {
  const styles = useStyles();

  return (
    <>
      <Header />
      <div className={styles.listContainer}>
        <PokemonList />
      </div>
    </>
  );
};
