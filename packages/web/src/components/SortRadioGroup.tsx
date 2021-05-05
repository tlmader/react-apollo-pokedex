import {
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
} from '@material-ui/core';
import { ChangeEvent } from 'react';
import { useRecoilState } from 'recoil';
import { sortState } from '../state';
import { PokemonSortInput, Sort } from '../types';

export const SortRadioGroup = () => {
  const [sort, setSort] = useRecoilState(sortState);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.value === 'order') {
      setSort({ order: Sort.Asc });
    }
    console.log(event.target.value);
    if (event.target.value === 'name') {
      setSort({ name: Sort.Asc });
    }
  };

  return (
    <>
      <FormControl component="fieldset">
        <FormLabel component="legend">Sort</FormLabel>
        <RadioGroup
          aria-label="sort"
          name="sort"
          value={sortInputToValue(sort)}
          onChange={handleChange}
        >
          <FormControlLabel value="order" control={<Radio />} label="Order" />
          <FormControlLabel value="name" control={<Radio />} label="Name" />
        </RadioGroup>
      </FormControl>
    </>
  );
};

const sortInputToValue = (sort: PokemonSortInput): string => {
  if (sort.name) {
    return 'name';
  }
  return 'order';
};
