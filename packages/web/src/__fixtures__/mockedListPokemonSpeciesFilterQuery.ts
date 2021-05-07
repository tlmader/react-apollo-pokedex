import { MockedResponse } from '@apollo/client/testing';
import { ListPokemonDocument, ListPokemonQuery } from '../operations';

export const mockedListPokemonSpeciesFilterQuery: MockedResponse<ListPokemonQuery> = {
  request: {
    query: ListPokemonDocument,
    variables: {
      sort: {
        order: 'asc',
      },
      first: 50,
      filter: {
        species: 'bulbasaur',
      },
    },
  },
  result: {
    data: {
      listPokemon: {
        __typename: 'PokemonConnection',
        edges: [
          {
            __typename: 'PokemonEdge',
            cursor: 'MA',
            node: {
              __typename: 'PokemonNode',
              id: '1',
              name: 'Bulbasaur',
              baseExperience: 64,
              order: 1,
              sprites: {
                __typename: 'Sprites',
                frontDefault:
                  'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png',
              },
              types: [
                {
                  __typename: 'Item',
                  name: 'Grass',
                },
                {
                  __typename: 'Item',
                  name: 'Poison',
                },
              ],
            },
          },
        ],
        pageInfo: {
          __typename: 'PageInfo',
          hasNextPage: false,
          endCursor: 'MA',
        },
        totalCount: 1,
      },
    },
  },
};
