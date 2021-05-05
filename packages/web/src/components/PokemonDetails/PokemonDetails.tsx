import { CardContent, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { useRecoilValue } from 'recoil';
import { selectedPokemonState } from '../../state';
import { SpriteView } from './SpriteView';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 300,
    maxWidth: 300,
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  cardActions: {
    justifyContent: 'center',
  },
});

export const PokemonDetails = () => {
  const styles = useStyles();

  const pokemon = useRecoilValue(selectedPokemonState);

  return !pokemon ? (
    <Typography>Select a Pokémon to view details.</Typography>
  ) : (
    <>
      <SpriteView />
      <CardContent>
        <Typography gutterBottom variant="h5" component="h2">
          {pokemon.name}
        </Typography>
      </CardContent>
    </>
  );
};
