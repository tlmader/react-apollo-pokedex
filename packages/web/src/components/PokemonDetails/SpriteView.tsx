import { Button, CardActions, CardMedia } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { useEffect, useState } from 'react';
import { usePokemonDetails } from '../../hooks';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 200,
    maxWidth: 200,
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  cardActions: {
    justifyContent: 'center',
  },
});

export const SpriteView = () => {
  const { pokemon } = usePokemonDetails();

  const [viewBackSprite, setViewBackSprite] = useState(false);
  const [viewFemaleSprite, setViewFemaleSprite] = useState(false);
  const [viewShinySprite, setViewShinySprite] = useState(false);

  // Reset sprite view on pokemon change
  useEffect(() => {
    setViewBackSprite(false);
    setViewFemaleSprite(false);
    setViewShinySprite(false);
  }, [pokemon]);

  const handleClickViewBack = () => setViewBackSprite(!viewBackSprite);
  const handleClickViewFemale = () => setViewFemaleSprite(!viewFemaleSprite);
  const handleClickViewShiny = () => setViewShinySprite(!viewShinySprite);

  const getSprite = () => {
    if (!pokemon?.sprites) {
      return undefined;
    }
    if (viewBackSprite) {
      if (viewShinySprite) {
        if (viewFemaleSprite) {
          return pokemon.sprites.backShinyFemale;
        } else {
          return pokemon.sprites.backShiny;
        }
      } else {
        if (viewFemaleSprite) {
          return pokemon.sprites.backFemale;
        } else {
          return pokemon.sprites.backDefault;
        }
      }
    } else {
      if (viewShinySprite) {
        if (viewFemaleSprite) {
          return pokemon.sprites.frontShinyFemale;
        } else {
          return pokemon.sprites.frontShiny;
        }
      } else {
        if (viewFemaleSprite) {
          return pokemon.sprites.frontFemale;
        } else {
          return pokemon.sprites.frontDefault;
        }
      }
    }
  };

  const styles = useStyles();

  return pokemon ? (
    <>
      <CardMedia
        className={styles.media}
        image={getSprite() || undefined}
        title={pokemon.name || ''}
      />
      <CardActions className={styles.cardActions}>
        {pokemon.sprites?.backDefault && (
          <Button size="small" color="primary" onClick={handleClickViewBack}>
            {viewBackSprite ? 'View Front' : 'View Back'}
          </Button>
        )}
        {pokemon.sprites?.frontFemale && (
          <Button size="small" color="primary" onClick={handleClickViewFemale}>
            {viewFemaleSprite ? 'View Male' : 'View Female'}
          </Button>
        )}
        {pokemon.sprites?.frontShiny && (
          <Button size="small" color="primary" onClick={handleClickViewShiny}>
            {viewShinySprite ? 'View Regular' : 'View Shiny'}
          </Button>
        )}
      </CardActions>
    </>
  ) : null;
};
