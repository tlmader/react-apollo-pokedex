import { ApolloClient, gql, InMemoryCache } from '@apollo/client';
import { relayStylePagination } from '@apollo/client/utilities';

export const client = new ApolloClient({
  uri: 'http://localhost:4000/dev/graphql',
  cache: new InMemoryCache({
    typePolicies: {
      Query: {
        fields: {
          listPokemon: relayStylePagination(['filter', 'sort']),
        },
      },
    },
  }),
});
