import {
  createStyles,
  fade,
  InputBase,
  makeStyles,
  TextField,
  TextFieldProps,
  Theme,
} from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    search: {
      padding: theme.spacing(1, 1, 1, 2),
      position: 'relative',
      borderRadius: theme.shape.borderRadius,
      backgroundColor: fade(theme.palette.common.white, 0.15),
      '&:hover': {
        backgroundColor: fade(theme.palette.common.white, 0.25),
      },
      [theme.breakpoints.up('sm')]: {
        width: 'auto',
      },
    },
    searchIcon: {
      padding: theme.spacing(0, 2),
      height: '100%',
      position: 'absolute',
      pointerEvents: 'none',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    inputRoot: {
      color: 'inherit',
      '& .MuiAutocomplete-endAdornment': {
        '& .MuiIconButton-root': {
          color: 'inherit',
        },
      },
    },
    inputInput: {
      // Override padding applied by Autocomplete
      padding: 'unset !important',
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('md')]: {
        width: '20ch',
      },
    },
  }),
);

export const SearchInput = () => {
  const styles = useStyles();

  return (
    <div className={styles.search}>
      <div className={styles.searchIcon}>
        <SearchIcon />
      </div>
      <InputBase
        placeholder="Search…"
        classes={{
          root: styles.inputRoot,
          input: styles.inputInput,
        }}
        inputProps={{ 'aria-label': 'search' }}
      />
    </div>
  );
};

export const HeaderTextField = (textFieldProps: TextFieldProps) => {
  const styles = useStyles();

  return (
    <div className={styles.search}>
      {/* @ts-ignore - disableUnderline is missing in InputProps */}
      <TextField
        {...textFieldProps}
        InputProps={{
          ...textFieldProps.InputProps,
          disableUnderline: true,
          classes: {
            root: styles.inputRoot,
            input: styles.inputInput,
          },
        }}
      />
    </div>
  );
};
