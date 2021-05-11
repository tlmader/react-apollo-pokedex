# @react-apollo-pokedex/service

The GraphQL server! All data is fetched from [PokeAPI](https://pokeapi.co/docs/v2).

## Scripts

| Command        | Description                                                                       |
| -------------- | --------------------------------------------------------------------------------- |
| `start`        | Starts serverless-offline where we can run the Apollo Server Lambda locally       |
| `start-server` | Starts Apollo Server using an actual server with in-memory caching for REST calls |
| `test`         | Runs server integration tests with Jest                                           |
| `deploy`       | Deploys the service to AWS with Serverless Framework                              |
| `deploy-dev`   | Deploys the service with the Playground enabled to AWS                            |
