import { ApolloServer } from 'apollo-server-lambda';
import typeDefs from './typeDefs.graphql';
import { resolvers } from './resolvers';
import { dataSources } from './dataSources';

const server = new ApolloServer({
  typeDefs,
  resolvers,
  dataSources,
  playground: {
    endpoint: '/dev/graphql',
  },
});

exports.graphqlHandler = server.createHandler({
  cors: {
    origin: '*',
    credentials: true,
  },
});
