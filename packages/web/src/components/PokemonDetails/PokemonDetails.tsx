import { CardContent, Divider, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { usePokemonDetails } from '../hooks';
import { Loading } from '../Loading';
import { SpriteView } from './SpriteView';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  cardActions: {
    justifyContent: 'center',
  },
});

export const PokemonDetails = () => {
  const { pokemon, loading } = usePokemonDetails();

  const styles = useStyles();

  if (loading) {
    return <Loading title="Loading Pokémon Details…" />;
  }

  return !pokemon ? (
    <Typography>Select a Pokémon to view details.</Typography>
  ) : (
    <>
      <SpriteView />
      <Divider />
      <CardContent>
        <Typography gutterBottom variant="h5" component="h2">
          {pokemon.name}
        </Typography>
      </CardContent>
    </>
  );
};
