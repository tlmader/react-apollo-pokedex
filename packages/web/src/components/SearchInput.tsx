import { InputAdornment } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import { ChangeEvent } from 'react';
import { useRecoilState } from 'recoil';
import { searchState } from '../state';
import { HeaderTextField } from './HeaderTextField';

export const SearchInput = () => {
  const [search, setSearch] = useRecoilState(searchState);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
  };

  return (
    <HeaderTextField
      placeholder="Search"
      onChange={handleChange}
      value={search}
      inputProps={{
        'data-testid': 'search-input',
      }}
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
