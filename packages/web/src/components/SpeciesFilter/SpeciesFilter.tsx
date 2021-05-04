import { Autocomplete } from '@material-ui/lab';
import { formatName } from '../../utils';
import { HeaderTextField } from '../HeaderTextField';
import { SPECIES_OPTIONS } from './speciesOptions';

export const SpeciesFilter = () => {
  return (
    <Autocomplete
      options={SPECIES_OPTIONS}
      getOptionLabel={(option) => formatName(option)}
      style={{ flex: 1, maxWidth: 300 }}
      renderInput={(params) => (
        <HeaderTextField placeholder="Filter by species…" {...params} />
      )}
    />
  );
};
