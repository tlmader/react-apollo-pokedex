import { ApolloClient, InMemoryCache } from '@apollo/client';
import { relayStylePagination } from '@apollo/client/utilities';

export const client = new ApolloClient({
  uri:
    process.env.NODE_ENV === 'development'
      ? 'http://localhost:4000/dev/graphql'
      : 'https://htacwcwjvf.execute-api.us-east-1.amazonaws.com/dev/graphql',
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
