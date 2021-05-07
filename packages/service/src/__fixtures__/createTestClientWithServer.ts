import { ApolloServer } from 'apollo-server-lambda';
import { createTestClient } from 'apollo-server-testing';
import { PokeAPI } from '../dataSources/PokeAPI';
import { resolvers } from '../resolvers';
import typeDefs from '../typeDefs.graphql';

/**
 * Creates a test server to test against, using our production typeDefs,
 * resolvers, and dataSources.
 */
export const createTestClientWithServer = (): ReturnType<
  typeof createTestClient
> => {
  const pokeAPI = new PokeAPI();

  const server = new ApolloServer({
    typeDefs,
    resolvers,
    dataSources: () => ({ pokeAPI }),
  });

  return createTestClient(server);
};
