import { ApolloServer } from 'apollo-server-lambda';
import typeDefs from './typeDefs.graphql';
import { resolvers } from './resolvers';
import { dataSources } from './dataSources';

const server = new ApolloServer({
  typeDefs,
  resolvers,
  dataSources,
  // Run Playground if development
  ...(process.env.NODE_ENV === 'development' && {
    playground: {
      endpoint: '/dev/graphql',
    },
  }),
});

exports.graphqlHandler = server.createHandler({
  cors: {
    origin: '*',
    credentials: true,
  },
});
