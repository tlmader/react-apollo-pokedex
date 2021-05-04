import { InputAdornment } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import { HeaderTextField } from './HeaderTextField';

export const SearchInput = () => {
  return (
    <HeaderTextField
      placeholder="Search…"
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <SearchIcon />
          </InputAdornment>
        ),
      }}
    />
  );
};
