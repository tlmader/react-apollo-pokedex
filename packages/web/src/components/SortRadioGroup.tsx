import {
  createStyles,
  FormControl,
  FormControlLabel,
  makeStyles,
  Radio,
  RadioGroup,
  Theme,
  Typography,
} from '@material-ui/core';
import { ChangeEvent } from 'react';
import { useRecoilState } from 'recoil';
import { sortState } from '../state';
import { PokemonSortInput, Sort } from '../types';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    div: {
      display: 'flex',
      alignItems: 'center',
    },
    typographyRoot: {
      marginRight: theme.spacing(1),
    },
  }),
);

export const SortRadioGroup = () => {
  const styles = useStyles();
  const [sort, setSort] = useRecoilState(sortState);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.value === 'order') {
      setSort({ order: Sort.Asc });
    }
    if (event.target.value === 'name') {
      setSort({ name: Sort.Asc });
    }
  };

  return (
    <div className={styles.div}>
      <Typography
        component="legend"
        classes={{
          root: styles.typographyRoot,
        }}
      >
        Sort by:
      </Typography>
      <FormControl component="fieldset">
        <RadioGroup
          row
          aria-label="sort"
          name="sort"
          value={sortInputToValue(sort)}
          onChange={handleChange}
        >
          <FormControlLabel
            value="order"
            control={<Radio />}
            label="Pokédex #"
          />
          <FormControlLabel value="name" control={<Radio />} label="Name" />
        </RadioGroup>
      </FormControl>
    </div>
  );
};

const sortInputToValue = (sort: PokemonSortInput): string => {
  if (sort.name) {
    return 'name';
  }
  return 'order';
};
