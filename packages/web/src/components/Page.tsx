import {
  createStyles,
  Grid,
  makeStyles,
  Paper,
  Theme,
} from '@material-ui/core';
import { Header } from './Header';
import { PokemonDetails } from './PokemonDetails/PokemonDetails';
import { PokemonList } from './PokemonList';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      height: '100%',
      display: 'grid',
      gridTemplateRows: 'min-content auto',
      background: theme.palette.grey[200],
    },
    gridContainer: {
      overflow: 'auto',
      justifySelf: 'center',
      maxWidth: 1280,
      height: '100%',
      margin: 'unset',
      padding: theme.spacing(3),
      [theme.breakpoints.down('sm')]: {
        padding: theme.spacing(2),
      },
      [theme.breakpoints.down('xs')]: {
        padding: theme.spacing(1),
      },
    },
    gridItem: {
      padding: theme.spacing(1),
      height: '100%',
      [theme.breakpoints.down('xs')]: {
        height: '50%',
      },
    },
    paper: {
      height: '100%',
      overflow: 'auto',
    },
  }),
);

export const Page = () => {
  const styles = useStyles();

  return (
    <div className={styles.container}>
      <Header />
      <Grid
        className={styles.gridContainer}
        container
        direction="row"
        justify="center"
        alignItems="center"
      >
        <Grid className={styles.gridItem} item xs={12} sm={6} md={4}>
          <Paper className={styles.paper} elevation={2}>
            <PokemonList />
          </Paper>
        </Grid>
        <Grid className={styles.gridItem} item xs={12} sm={6} md={6}>
          <Paper className={styles.paper} elevation={2}>
            <PokemonDetails />
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
};
