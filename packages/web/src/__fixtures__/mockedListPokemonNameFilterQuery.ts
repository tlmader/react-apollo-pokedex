import { MockedResponse } from '@apollo/client/testing';
import { ListPokemonDocument, ListPokemonQuery } from '../operations';

export const mockedListPokemonNameFilterQuery: MockedResponse<ListPokemonQuery> = {
  request: {
    query: ListPokemonDocument,
    variables: {
      sort: {
        order: 'asc',
      },
      first: 50,
      filter: {
        name: {
          contains: 'pikachu',
        },
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
              id: 'pikachu',
              pokedexNumber: 25,
              name: 'Pikachu',
              baseExperience: 112,
              order: 35,
              sprites: {
                __typename: 'Sprites',
                frontDefault:
                  'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png',
              },
              types: [
                {
                  __typename: 'Item',
                  id: 'electric',
                  name: 'Electric',
                },
              ],
            },
          },
          {
            __typename: 'PokemonEdge',
            cursor: 'MQ',
            node: {
              __typename: 'PokemonNode',
              id: 'pikachu-rock-star',
              pokedexNumber: 10080,
              name: 'Pikachu Rock Star',
              baseExperience: 112,
              order: 37,
              sprites: {
                __typename: 'Sprites',
                frontDefault:
                  'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10080.png',
              },
              types: [
                {
                  __typename: 'Item',
                  id: 'electric',
                  name: 'Electric',
                },
              ],
            },
          },
          {
            __typename: 'PokemonEdge',
            cursor: 'Mg',
            node: {
              __typename: 'PokemonNode',
              id: 'pikachu-belle',
              pokedexNumber: 10081,
              name: 'Pikachu Belle',
              baseExperience: 112,
              order: 38,
              sprites: {
                __typename: 'Sprites',
                frontDefault:
                  'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10081.png',
              },
              types: [
                {
                  __typename: 'Item',
                  id: 'electric',
                  name: 'Electric',
                },
              ],
            },
          },
          {
            __typename: 'PokemonEdge',
            cursor: 'Mw',
            node: {
              __typename: 'PokemonNode',
              id: 'pikachu-pop-star',
              pokedexNumber: 10082,
              name: 'Pikachu Pop Star',
              baseExperience: 112,
              order: 39,
              sprites: {
                __typename: 'Sprites',
                frontDefault:
                  'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10082.png',
              },
              types: [
                {
                  __typename: 'Item',
                  id: 'electric',
                  name: 'Electric',
                },
              ],
            },
          },
          {
            __typename: 'PokemonEdge',
            cursor: 'NA',
            node: {
              __typename: 'PokemonNode',
              id: 'pikachu-phd',
              pokedexNumber: 10083,
              name: 'Pikachu Phd',
              baseExperience: 112,
              order: 40,
              sprites: {
                __typename: 'Sprites',
                frontDefault:
                  'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10083.png',
              },
              types: [
                {
                  __typename: 'Item',
                  id: 'electric',
                  name: 'Electric',
                },
              ],
            },
          },
          {
            __typename: 'PokemonEdge',
            cursor: 'NQ',
            node: {
              __typename: 'PokemonNode',
              id: 'pikachu-libre',
              pokedexNumber: 10084,
              name: 'Pikachu Libre',
              baseExperience: 112,
              order: 41,
              sprites: {
                __typename: 'Sprites',
                frontDefault:
                  'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10084.png',
              },
              types: [
                {
                  __typename: 'Item',
                  id: 'electric',
                  name: 'Electric',
                },
              ],
            },
          },
          {
            __typename: 'PokemonEdge',
            cursor: 'Ng',
            node: {
              __typename: 'PokemonNode',
              id: 'pikachu-cosplay',
              pokedexNumber: 10085,
              name: 'Pikachu Cosplay',
              baseExperience: 112,
              order: 36,
              sprites: {
                __typename: 'Sprites',
                frontDefault:
                  'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10085.png',
              },
              types: [
                {
                  __typename: 'Item',
                  id: 'electric',
                  name: 'Electric',
                },
              ],
            },
          },
          {
            __typename: 'PokemonEdge',
            cursor: 'Nw',
            node: {
              __typename: 'PokemonNode',
              id: 'pikachu-original-cap',
              pokedexNumber: 10094,
              name: 'Pikachu Original Cap',
              baseExperience: 112,
              order: 42,
              sprites: {
                __typename: 'Sprites',
                frontDefault:
                  'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10094.png',
              },
              types: [
                {
                  __typename: 'Item',
                  id: 'electric',
                  name: 'Electric',
                },
              ],
            },
          },
          {
            __typename: 'PokemonEdge',
            cursor: 'OA',
            node: {
              __typename: 'PokemonNode',
              id: 'pikachu-hoenn-cap',
              pokedexNumber: 10095,
              name: 'Pikachu Hoenn Cap',
              baseExperience: 112,
              order: 43,
              sprites: {
                __typename: 'Sprites',
                frontDefault:
                  'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10095.png',
              },
              types: [
                {
                  __typename: 'Item',
                  id: 'electric',
                  name: 'Electric',
                },
              ],
            },
          },
          {
            __typename: 'PokemonEdge',
            cursor: 'OQ',
            node: {
              __typename: 'PokemonNode',
              id: 'pikachu-sinnoh-cap',
              pokedexNumber: 10096,
              name: 'Pikachu Sinnoh Cap',
              baseExperience: 112,
              order: 44,
              sprites: {
                __typename: 'Sprites',
                frontDefault:
                  'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10096.png',
              },
              types: [
                {
                  __typename: 'Item',
                  id: 'electric',
                  name: 'Electric',
                },
              ],
            },
          },
          {
            __typename: 'PokemonEdge',
            cursor: 'MTA',
            node: {
              __typename: 'PokemonNode',
              id: 'pikachu-unova-cap',
              pokedexNumber: 10097,
              name: 'Pikachu Unova Cap',
              baseExperience: 112,
              order: 45,
              sprites: {
                __typename: 'Sprites',
                frontDefault:
                  'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10097.png',
              },
              types: [
                {
                  __typename: 'Item',
                  id: 'electric',
                  name: 'Electric',
                },
              ],
            },
          },
          {
            __typename: 'PokemonEdge',
            cursor: 'MTE',
            node: {
              __typename: 'PokemonNode',
              id: 'pikachu-kalos-cap',
              pokedexNumber: 10098,
              name: 'Pikachu Kalos Cap',
              baseExperience: 112,
              order: 46,
              sprites: {
                __typename: 'Sprites',
                frontDefault:
                  'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10098.png',
              },
              types: [
                {
                  __typename: 'Item',
                  id: 'electric',
                  name: 'Electric',
                },
              ],
            },
          },
          {
            __typename: 'PokemonEdge',
            cursor: 'MTI',
            node: {
              __typename: 'PokemonNode',
              id: 'pikachu-alola-cap',
              pokedexNumber: 10099,
              name: 'Pikachu Alola Cap',
              baseExperience: 112,
              order: 47,
              sprites: {
                __typename: 'Sprites',
                frontDefault:
                  'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10099.png',
              },
              types: [
                {
                  __typename: 'Item',
                  id: 'electric',
                  name: 'Electric',
                },
              ],
            },
          },
          {
            __typename: 'PokemonEdge',
            cursor: 'MTM',
            node: {
              __typename: 'PokemonNode',
              id: 'pikachu-partner-cap',
              pokedexNumber: 10148,
              name: 'Pikachu Partner Cap',
              baseExperience: 112,
              order: 48,
              sprites: {
                __typename: 'Sprites',
                frontDefault:
                  'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10148.png',
              },
              types: [
                {
                  __typename: 'Item',
                  id: 'electric',
                  name: 'Electric',
                },
              ],
            },
          },
          {
            __typename: 'PokemonEdge',
            cursor: 'MTQ',
            node: {
              __typename: 'PokemonNode',
              id: 'pikachu-gmax',
              pokedexNumber: 10190,
              name: 'Pikachu Gmax',
              baseExperience: 112,
              order: -1,
              sprites: {
                __typename: 'Sprites',
                frontDefault:
                  'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10190.png',
              },
              types: [
                {
                  __typename: 'Item',
                  id: 'electric',
                  name: 'Electric',
                },
              ],
            },
          },
        ],
        pageInfo: {
          __typename: 'PageInfo',
          hasNextPage: false,
          endCursor: 'MTQ',
        },
        totalCount: 15,
      },
    },
  },
};
