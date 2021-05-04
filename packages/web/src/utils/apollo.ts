import { ApolloClient, InMemoryCache } from '@apollo/client';
import { gql } from '@apollo/client';

export const client = new ApolloClient({
  uri: 'http://localhost:4000/dev/graphql',
  cache: new InMemoryCache(),
});

client
  .query({
    query: gql`
      query GetPokemon {
        getPokemon(name: "pikachu") {
          id
          name
        }
      }
    `,
  })
  .then((result) => console.log(result))
  .catch((error) => console.error(error));
