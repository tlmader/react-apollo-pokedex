import '@fontsource/roboto';
import { RecoilRoot } from 'recoil';
import { Page } from './Page';

export const App = () => {
  return (
    <RecoilRoot>
      <Page />
    </RecoilRoot>
  );
};
