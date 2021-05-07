import { Autocomplete } from '@material-ui/lab';
import { useRecoilState } from 'recoil';
import { speciesState } from '../../state';
import { formatName } from '../../utils';
import { HeaderTextField } from '../HeaderTextField';
import { SPECIES_OPTIONS } from './speciesOptions';

export const SpeciesFilter = () => {
  const [species, setSpecies] = useRecoilState(speciesState);

  const handleChange = (_: unknown, value: string | null) => {
    setSpecies(value || '');
  };

  return (
    <Autocomplete
      value={species || null}
      onChange={handleChange}
      options={SPECIES_OPTIONS}
      getOptionLabel={(option) => formatName(option)}
      style={{ flex: 1, maxWidth: 300 }}
      renderInput={(params) => (
        <HeaderTextField
          placeholder="Species"
          {...params}
          inputProps={{ ...params.inputProps, 'data-testid': 'species-input' }}
        />
      )}
    />
  );
};
