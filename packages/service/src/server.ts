import { ApolloServer } from 'apollo-server';
import { dataSources } from './dataSources';
import { resolvers } from './resolvers';
import typeDefs from './typeDefs.graphql';

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

server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
