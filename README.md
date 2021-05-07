# React Apollo Pokédex

![react-apollo-pokedex](https://user-images.githubusercontent.com/2181467/117517427-e0e0b780-af50-11eb-86d5-35c15d8be78b.png)

Pokédex web application showcasing a full-stack web application built with React & Apollo.

All data is requested from [PokeAPI](https://pokeapi.co/docs/v2).

## Setup

1. Run `yarn setup`.
2. Run `yarn start` to start the web application and service.

If you would like to run each individually (for more readable logs), you can navigate to each package and run `yarn start`.

## Tests

1. Run `yarn test` to run all unit and integration tests.
2. Run `yarn e2e` to run all end-to-end tests.

## How to use

### View Pokémon details

![react-apollo-pokedex-view-pokemon](https://user-images.githubusercontent.com/2181467/117517374-b55dcd00-af50-11eb-8836-fa36ab262945.gif)

### Filter Pokémon by type

![react-apollo-pokedex-filter-by-type](https://user-images.githubusercontent.com/2181467/117517509-11c0ec80-af51-11eb-94c2-c73c9f38f8cc.gif)

### Filter Pokémon by species

![react-apollo-pokedex-filter-by-species](https://user-images.githubusercontent.com/2181467/117517482-0241a380-af51-11eb-97f9-b35aba2d0e41.gif)

### Sort Pokémon by name

![react-apollo-pokedex-sort-by-name](https://user-images.githubusercontent.com/2181467/117517493-08d01b00-af51-11eb-89b7-6bed3b6391fd.gif)

## Packages

| Packages  | Description                                                                                                                                                                                                                                                                              |
| --------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `service` | GraphQL middleware providing abstraction over [PokeAPI](https://pokeapi.co/docs/v2) built with [Apollo Server](https://www.apollographql.com/docs/apollo-server/) and deployed to [AWS Lambda](https://aws.amazon.com/lambda/) using [Serverless Framework](https://www.serverless.com/) |
| `web`     | Pokédex web application built with React and [Apollo Client](https://www.apollographql.com/docs/react/)                                                                                                                                                                                  |

## Available Scripts

| Command       | Description                                                                                                                          |
| ------------- | ------------------------------------------------------------------------------------------------------------------------------------ |
| `setup`       | Installs dependencies and bootstraps the project with [Lerna](https://github.com/lerna/lerna/blob/main/commands/bootstrap/README.md) |
| `postinstall` | Runs code generation after setup is completed                                                                                        |
| `start`       | Starts the service and the web application in parallel                                                                               |
| `lint`        | Runs linting on the project                                                                                                          |
| `prepare`     | Sets up husky                                                                                                                        |
| `generate`    | Runs code generation with [GraphQL Code Generator](https://www.graphql-code-generator.com/)                                          |
| `test`        | Runs tests for all packages in parallel                                                                                              |
| `deploy`      | Deploys the service and the web application in parallel                                                                              |
| `e2e`         | Runs all end-to-end tests with [Cypress](https://www.cypress.io/)                                                                    |

## Tools

| Tool                                                                                  | Why are we using it?                                                                         |
| ------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| [Yarn Workspaces](https://classic.yarnpkg.com/en/docs/workspaces/)                    | Allows our project dependencies to be installed together at one time, without repetitions    |
| [Lerna](https://github.com/lerna/lerna)                                               | Provides commands for parallel execution of scripts in packages                              |
| [GraphQL Code Generator](https://www.graphql-code-generator.com/)                     | Eliminates boilerplate code and improves consistency with our GraphQL schema and operations  |
| [ESLint](https://eslint.org/)                                                         | Lets us enforce linting rules on the project                                                 |
| [Prettier](https://prettier.io/)                                                      | Cleans up our code                                                                           |
| [TypeScript](https://www.typescriptlang.org/)                                         | Provides type safety, documentation, and allows us to generate code                          |
| [Jest](https://jestjs.io/)                                                            | Lets us run our tests                                                                        |
| [React Testing Library](https://testing-library.com/docs/react-testing-library/intro) | Provides us the tools to test React components while avoiding testing implementation details |
| [Cypress](https://www.cypress.io/)                                                    | Allows us to write end-to-end tests and run them in the browser                              |
| [AWS Amplify](https://www.serverless.com/)                                            | Sets up our CDN and lets us deploy our web application with ease                             |
| [Create React App](https://reactjs.org/docs/create-a-new-react-app.html)              | Used to generate our React app and abstracts away some configuration                         |
| [Serverless Framework](https://www.serverless.com/)                                   | Lets us write infrastructure as code and easily deploy our service to AWS                    |
| [Webpack](https://webpack.js.org/)                                                    | Bundles our web and service code                                                             |

## Libraries

| Library                                                            | Why are we using it?                                                                                     |
| ------------------------------------------------------------------ | -------------------------------------------------------------------------------------------------------- |
| [React](https://reactjs.org/)                                      | Renders our web application                                                                              |
| [Apollo Client](https://www.apollographql.com/docs/react/)         | Fetches and caches our application data with GraphQL                                                     |
| [Recoil](https://recoiljs.org/)                                    | Gives us a fast and flexible way to create shared UI state                                               |
| [Material-UI](https://material-ui.com/)                            | Provides our base UI components and theming                                                              |
| [Chart.js](https://www.chartjs.org/)                               | Lets us build charts with a simple API                                                                   |
| [Apollo Server](https://www.apollographql.com/docs/apollo-server/) | Provides a structured way for us to write resolvers for our GraphQL schema using PokeAPI as a datasource |

## Services

| Service                                                 | Why are we using it?                                               |
| ------------------------------------------------------- | ------------------------------------------------------------------ |
| [PokeAPI](https://pokeapi.co/docs/v2/)                  | Provides all the Pokédex data                                      |
| [AWS Lambda](https://aws.amazon.com/lambda/)            | Lets us run our GraphQL server on AWS without provisioning servers |
| [API Gateway](https://recoiljs.org/)                    | Exposes our Lambda function and secures access to our API          |
| [S3](https://aws.amazon.com/s3/)                        | Stores our production web assets                                   |
| [Amazon CloudFront](https://aws.amazon.com/cloudfront/) | CDN for delivering our web application quickly                     |
| [GitHub Actions](https://github.com/features/actions)   | Runs our CI/CD pipelines                                           |
