import AppBar from '@material-ui/core/AppBar';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { SearchInput } from './SearchInput';
import { SpeciesFilter } from './SpeciesFilter';
import { TypeFilter } from './TypeFilter';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    title: {
      display: 'none',
      [theme.breakpoints.up('sm')]: {
        display: 'block',
      },
    },
  }),
);

export const Header = () => {
  const classes = useStyles();

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography className={classes.title} variant="h6" noWrap>
          React Apollo Pokédex
        </Typography>
        <SearchInput />
        <TypeFilter />
        <SpeciesFilter />
      </Toolbar>
    </AppBar>
  );
};
