import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { PokemonNode } from '../types';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
    maxWidth: 140,
    marginLeft: 'auto',
    marginRight: 'auto',
  },
});

export type PokemonCardProps = {
  pokemon: Partial<PokemonNode>;
};

export const PokemonCard = ({ pokemon }: PokemonCardProps) => {
  const styles = useStyles();

  return (
    <Card className={styles.root}>
      <CardActionArea>
        <CardMedia
          className={styles.media}
          image={pokemon.sprites?.frontDefault || ''}
          title={pokemon.name}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {pokemon.name}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};
