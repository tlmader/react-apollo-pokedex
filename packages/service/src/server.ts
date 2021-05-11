import { ApolloServer } from 'apollo-server';
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

server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
