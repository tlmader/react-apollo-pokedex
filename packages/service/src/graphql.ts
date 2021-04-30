import { ApolloServer } from 'apollo-server-lambda';
import typeDefs from './typeDefs.graphql';

// Provide resolver functions for your schema fields
const resolvers = {
  Query: {
    hello: () => 'Hello world!',
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
  playground: {
    endpoint: '/dev/graphql',
  },
});

export const graphqlHandler = server.createHandler();
