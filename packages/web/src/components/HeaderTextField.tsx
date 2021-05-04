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
      margin: theme.spacing(1, 1, 1, 1),
      padding: theme.spacing(1, 1, 1, 2),
      position: 'relative',
      borderRadius: theme.shape.borderRadius,
      backgroundColor: fade(theme.palette.common.white, 0.15),
      '&:hover': {
        backgroundColor: fade(theme.palette.common.white, 0.25),
      },
      marginLeft: 0,
      [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(3),
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
  const classes = useStyles();

  return (
    <div className={classes.search}>
      <div className={classes.searchIcon}>
        <SearchIcon />
      </div>
      <InputBase
        placeholder="Search…"
        classes={{
          root: classes.inputRoot,
          input: classes.inputInput,
        }}
        inputProps={{ 'aria-label': 'search' }}
      />
    </div>
  );
};

export const HeaderTextField = (textFieldProps: TextFieldProps) => {
  const classes = useStyles();
  return (
    <div className={classes.search}>
      {/* @ts-ignore - disableUnderline is missing in InputProps */}
      <TextField
        {...textFieldProps}
        InputProps={{
          ...textFieldProps.InputProps,
          disableUnderline: true,
          classes: {
            root: classes.inputRoot,
            input: classes.inputInput,
          },
        }}
      />
    </div>
  );
};
