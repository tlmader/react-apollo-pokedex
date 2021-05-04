import { Autocomplete } from '@material-ui/lab';
import { formatName } from '../../utils';
import { HeaderTextField } from '../HeaderTextField';
import { TYPE_OPTIONS } from './typeOptions';

export const TypeFilter = () => {
  return (
    <Autocomplete
      options={TYPE_OPTIONS}
      style={{ flex: 1, maxWidth: 300 }}
      getOptionLabel={(option) => formatName(option)}
      renderInput={(params) => (
        <HeaderTextField placeholder="Filter by type…" {...params} />
      )}
    />
  );
};
