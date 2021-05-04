import { Autocomplete } from '@material-ui/lab';
import { useRecoilState } from 'recoil';
import { typeState } from '../../state';
import { formatName } from '../../utils';
import { HeaderTextField } from '../HeaderTextField';
import { TYPE_OPTIONS } from './typeOptions';

export const TypeFilter = () => {
  const [type, setType] = useRecoilState(typeState);

  const handleChange = (_: unknown, value: string | null) => {
    setType(value || '');
  };

  return (
    <Autocomplete
      value={type}
      onChange={handleChange}
      options={TYPE_OPTIONS}
      style={{ flex: 1, maxWidth: 300 }}
      getOptionLabel={(option) => formatName(option)}
      renderInput={(params) => (
        <HeaderTextField placeholder="Filter by type…" {...params} />
      )}
    />
  );
};
