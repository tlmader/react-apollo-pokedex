import { CardContent, Divider, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { usePokemonDetails } from '../../hooks';
import { formatPokemonCaption } from '../../utils';
import { Loading } from '../Loading';
import { PokemonAttributes } from './PokemonAttributes';
import { SpriteView } from './SpriteView';

const useStyles = makeStyles({
  container: {
    display: 'grid',
    height: '100%',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  caption: {
    display: 'flex',
  },
});

export const PokemonDetails = () => {
  const { pokemon, loading } = usePokemonDetails();

  const styles = useStyles();

  if (loading) {
    return (
      <div className={styles.container}>
        <Loading title="Loading Pokémon Details…" />
      </div>
    );
  }

  if (!pokemon) {
    return (
      <div className={styles.container}>
        <Typography variant="overline">
          Select a Pokémon to view details
        </Typography>
      </div>
    );
  }

  return (
    <>
      <SpriteView />
      <Divider />
      <CardContent>
        <Typography variant="h5" component="h2" role="heading">
          {pokemon.name}
        </Typography>
        <Typography gutterBottom variant="overline" className={styles.caption}>
          {formatPokemonCaption(pokemon)}
        </Typography>
        <PokemonAttributes />
      </CardContent>
    </>
  );
};
