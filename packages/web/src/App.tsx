import { ApolloProvider } from '@apollo/client';
import '@fontsource/roboto';
import { RecoilRoot } from 'recoil';
import { Page } from './components/Page';
import { client } from './utils/apollo';

export const App = () => {
  return (
    <RecoilRoot>
      <ApolloProvider client={client}>
        <Page />
      </ApolloProvider>
    </RecoilRoot>
  );
};
