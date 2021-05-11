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

## Performance Benchmarks

![image](https://user-images.githubusercontent.com/2181467/117764253-0d126780-b1e1-11eb-8d2e-10f1e78b44de.png)

### getPokemon

#### Lambda

<img src="https://user-images.githubusercontent.com/2181467/117762796-a55b1d00-b1de-11eb-99f2-4bbacf0e8fd4.png" width="500">

#### Server with cache

<img src="https://user-images.githubusercontent.com/2181467/117762733-8a88a880-b1de-11eb-9044-7cc63a3d642e.png" width="500">

### listPokemon

#### Lambda

<img src="https://user-images.githubusercontent.com/2181467/117763123-1ef30b00-b1df-11eb-929d-e498ba878b5e.png" width="500">

#### Server with cache

<img src="https://user-images.githubusercontent.com/2181467/117763144-2adecd00-b1df-11eb-8fbe-13299f91f522.png" width="500">

### listPokemon, filtered by normal type

#### Lambda

<img src="https://user-images.githubusercontent.com/2181467/117763268-62e61000-b1df-11eb-93cd-71ca132f5345.png" width="500">

#### Server with cache

<img src="https://user-images.githubusercontent.com/2181467/117763342-8315cf00-b1df-11eb-921c-c190ad7c7160.png" width="500">
