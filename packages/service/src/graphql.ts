import { ApolloServer } from 'apollo-server-lambda';
import typeDefs from './typeDefs.graphql';
import { resolvers } from './resolvers';

const server = new ApolloServer({
  typeDefs,
  resolvers,
  playground: {
    endpoint: '/dev/graphql',
  },
});

export const graphqlHandler = server.createHandler();
