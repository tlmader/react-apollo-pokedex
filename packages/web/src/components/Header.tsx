import AppBar from '@material-ui/core/AppBar';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { SearchInput } from './SearchInput';
import { SortRadioGroup } from './SortRadioGroup';
import { SpeciesFilter } from './SpeciesFilter';
import { TypeFilter } from './TypeFilter';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    toolbarRoot: {
      gridGap: theme.spacing(2),
    },
    title: {
      display: 'none',
      [theme.breakpoints.up('sm')]: {
        display: 'block',
      },
    },
  }),
);

export const Header = () => {
  const styles = useStyles();

  return (
    <AppBar position="static">
      <Toolbar
        classes={{
          root: styles.toolbarRoot,
        }}
      >
        <Typography className={styles.title} variant="h6" noWrap>
          React Apollo Pokédex
        </Typography>
        <SearchInput />
        <TypeFilter />
        <SpeciesFilter />
        <SortRadioGroup />
      </Toolbar>
    </AppBar>
  );
};
