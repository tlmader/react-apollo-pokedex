import {
  AppBar,
  Badge,
  createStyles,
  makeStyles,
  Theme,
  Toolbar,
  Typography,
  useMediaQuery,
  useTheme,
} from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import FilterListIcon from '@material-ui/icons/FilterList';
import SortIcon from '@material-ui/icons/Sort';
import { useRecoilValue } from 'recoil';
import { filterCountState, sortState } from '../../state';
import { SearchInput } from '../SearchInput';
import { SortRadioGroup } from '../SortRadioGroup';
import { SpeciesFilter } from '../SpeciesFilter';
import { TypeFilter } from '../TypeFilter';
import { useHeaderFilterMenu } from './useHeaderFilterMenu';
import { useHeaderSortMenu } from './useHeaderSortMenu';

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
  const theme = useTheme();
  const md = useMediaQuery(theme.breakpoints.up('md'));

  const {
    filterMenuId,
    handleFilterMenuOpen,
    renderFilterMenu,
  } = useHeaderFilterMenu();

  const {
    sortMenuId,
    handleSortMenuOpen,
    renderSortMenu,
  } = useHeaderSortMenu();

  const filterCount = useRecoilValue(filterCountState);
  const sortCount = useRecoilValue(sortState)?.name ? 1 : 0;

  return (
    <>
      <AppBar position="static">
        <Toolbar
          classes={{
            root: styles.toolbarRoot,
          }}
        >
          <Typography
            className={styles.title}
            component="h1"
            variant="h6"
            noWrap
          >
            React Apollo Pokédex
          </Typography>
          <SearchInput />
          {md ? (
            <>
              <TypeFilter />
              <SpeciesFilter />
              <SortRadioGroup />
            </>
          ) : (
            <>
              <IconButton
                aria-label="Filters"
                aria-controls={filterMenuId}
                aria-haspopup="true"
                name="filters"
                onClick={handleFilterMenuOpen}
                color="inherit"
              >
                <Badge badgeContent={filterCount} color="secondary">
                  <FilterListIcon />
                </Badge>
              </IconButton>
              <IconButton
                aria-label="Sort"
                aria-controls={sortMenuId}
                aria-haspopup="true"
                name="sort"
                onClick={handleSortMenuOpen}
                color="inherit"
              >
                <Badge badgeContent={sortCount} color="secondary">
                  <SortIcon />
                </Badge>
              </IconButton>
            </>
          )}
        </Toolbar>
      </AppBar>
      {renderFilterMenu}
      {renderSortMenu}
    </>
  );
};
