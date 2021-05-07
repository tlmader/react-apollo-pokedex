import { MockedResponse } from '@apollo/client/testing';
import { ListPokemonDocument, ListPokemonQuery } from '../operations';

export const mockedListPokemonTypeFilterQuery: MockedResponse<ListPokemonQuery> = {
  request: {
    query: ListPokemonDocument,
    variables: {
      sort: {
        order: 'asc',
      },
      first: 50,
      filter: {
        type: 'normal',
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
              id: '16',
              name: 'Pidgey',
              baseExperience: 50,
              order: 21,
              sprites: {
                __typename: 'Sprites',
                frontDefault:
                  'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/16.png',
              },
              types: [
                {
                  __typename: 'Item',
                  name: 'Normal',
                },
                {
                  __typename: 'Item',
                  name: 'Flying',
                },
              ],
            },
          },
          {
            __typename: 'PokemonEdge',
            cursor: 'MQ',
            node: {
              __typename: 'PokemonNode',
              id: '17',
              name: 'Pidgeotto',
              baseExperience: 122,
              order: 22,
              sprites: {
                __typename: 'Sprites',
                frontDefault:
                  'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/17.png',
              },
              types: [
                {
                  __typename: 'Item',
                  name: 'Normal',
                },
                {
                  __typename: 'Item',
                  name: 'Flying',
                },
              ],
            },
          },
          {
            __typename: 'PokemonEdge',
            cursor: 'Mg',
            node: {
              __typename: 'PokemonNode',
              id: '18',
              name: 'Pidgeot',
              baseExperience: 216,
              order: 23,
              sprites: {
                __typename: 'Sprites',
                frontDefault:
                  'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/18.png',
              },
              types: [
                {
                  __typename: 'Item',
                  name: 'Normal',
                },
                {
                  __typename: 'Item',
                  name: 'Flying',
                },
              ],
            },
          },
          {
            __typename: 'PokemonEdge',
            cursor: 'Mw',
            node: {
              __typename: 'PokemonNode',
              id: '19',
              name: 'Rattata',
              baseExperience: 51,
              order: 25,
              sprites: {
                __typename: 'Sprites',
                frontDefault:
                  'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/19.png',
              },
              types: [
                {
                  __typename: 'Item',
                  name: 'Normal',
                },
              ],
            },
          },
          {
            __typename: 'PokemonEdge',
            cursor: 'NA',
            node: {
              __typename: 'PokemonNode',
              id: '20',
              name: 'Raticate',
              baseExperience: 145,
              order: 27,
              sprites: {
                __typename: 'Sprites',
                frontDefault:
                  'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/20.png',
              },
              types: [
                {
                  __typename: 'Item',
                  name: 'Normal',
                },
              ],
            },
          },
          {
            __typename: 'PokemonEdge',
            cursor: 'NQ',
            node: {
              __typename: 'PokemonNode',
              id: '21',
              name: 'Spearow',
              baseExperience: 52,
              order: 30,
              sprites: {
                __typename: 'Sprites',
                frontDefault:
                  'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/21.png',
              },
              types: [
                {
                  __typename: 'Item',
                  name: 'Normal',
                },
                {
                  __typename: 'Item',
                  name: 'Flying',
                },
              ],
            },
          },
          {
            __typename: 'PokemonEdge',
            cursor: 'Ng',
            node: {
              __typename: 'PokemonNode',
              id: '22',
              name: 'Fearow',
              baseExperience: 155,
              order: 31,
              sprites: {
                __typename: 'Sprites',
                frontDefault:
                  'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/22.png',
              },
              types: [
                {
                  __typename: 'Item',
                  name: 'Normal',
                },
                {
                  __typename: 'Item',
                  name: 'Flying',
                },
              ],
            },
          },
          {
            __typename: 'PokemonEdge',
            cursor: 'Nw',
            node: {
              __typename: 'PokemonNode',
              id: '39',
              name: 'Jigglypuff',
              baseExperience: 95,
              order: 69,
              sprites: {
                __typename: 'Sprites',
                frontDefault:
                  'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/39.png',
              },
              types: [
                {
                  __typename: 'Item',
                  name: 'Normal',
                },
                {
                  __typename: 'Item',
                  name: 'Fairy',
                },
              ],
            },
          },
          {
            __typename: 'PokemonEdge',
            cursor: 'OA',
            node: {
              __typename: 'PokemonNode',
              id: '40',
              name: 'Wigglytuff',
              baseExperience: 196,
              order: 70,
              sprites: {
                __typename: 'Sprites',
                frontDefault:
                  'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/40.png',
              },
              types: [
                {
                  __typename: 'Item',
                  name: 'Normal',
                },
                {
                  __typename: 'Item',
                  name: 'Fairy',
                },
              ],
            },
          },
          {
            __typename: 'PokemonEdge',
            cursor: 'OQ',
            node: {
              __typename: 'PokemonNode',
              id: '52',
              name: 'Meowth',
              baseExperience: 58,
              order: 86,
              sprites: {
                __typename: 'Sprites',
                frontDefault:
                  'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/52.png',
              },
              types: [
                {
                  __typename: 'Item',
                  name: 'Normal',
                },
              ],
            },
          },
          {
            __typename: 'PokemonEdge',
            cursor: 'MTA',
            node: {
              __typename: 'PokemonNode',
              id: '53',
              name: 'Persian',
              baseExperience: 154,
              order: 88,
              sprites: {
                __typename: 'Sprites',
                frontDefault:
                  'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/53.png',
              },
              types: [
                {
                  __typename: 'Item',
                  name: 'Normal',
                },
              ],
            },
          },
          {
            __typename: 'PokemonEdge',
            cursor: 'MTE',
            node: {
              __typename: 'PokemonNode',
              id: '83',
              name: 'Farfetchd',
              baseExperience: 132,
              order: 127,
              sprites: {
                __typename: 'Sprites',
                frontDefault:
                  'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/83.png',
              },
              types: [
                {
                  __typename: 'Item',
                  name: 'Normal',
                },
                {
                  __typename: 'Item',
                  name: 'Flying',
                },
              ],
            },
          },
          {
            __typename: 'PokemonEdge',
            cursor: 'MTI',
            node: {
              __typename: 'PokemonNode',
              id: '84',
              name: 'Doduo',
              baseExperience: 62,
              order: 128,
              sprites: {
                __typename: 'Sprites',
                frontDefault:
                  'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/84.png',
              },
              types: [
                {
                  __typename: 'Item',
                  name: 'Normal',
                },
                {
                  __typename: 'Item',
                  name: 'Flying',
                },
              ],
            },
          },
          {
            __typename: 'PokemonEdge',
            cursor: 'MTM',
            node: {
              __typename: 'PokemonNode',
              id: '85',
              name: 'Dodrio',
              baseExperience: 165,
              order: 129,
              sprites: {
                __typename: 'Sprites',
                frontDefault:
                  'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/85.png',
              },
              types: [
                {
                  __typename: 'Item',
                  name: 'Normal',
                },
                {
                  __typename: 'Item',
                  name: 'Flying',
                },
              ],
            },
          },
          {
            __typename: 'PokemonEdge',
            cursor: 'MTQ',
            node: {
              __typename: 'PokemonNode',
              id: '108',
              name: 'Lickitung',
              baseExperience: 77,
              order: 162,
              sprites: {
                __typename: 'Sprites',
                frontDefault:
                  'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/108.png',
              },
              types: [
                {
                  __typename: 'Item',
                  name: 'Normal',
                },
              ],
            },
          },
          {
            __typename: 'PokemonEdge',
            cursor: 'MTU',
            node: {
              __typename: 'PokemonNode',
              id: '113',
              name: 'Chansey',
              baseExperience: 395,
              order: 170,
              sprites: {
                __typename: 'Sprites',
                frontDefault:
                  'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/113.png',
              },
              types: [
                {
                  __typename: 'Item',
                  name: 'Normal',
                },
              ],
            },
          },
          {
            __typename: 'PokemonEdge',
            cursor: 'MTY',
            node: {
              __typename: 'PokemonNode',
              id: '115',
              name: 'Kangaskhan',
              baseExperience: 172,
              order: 174,
              sprites: {
                __typename: 'Sprites',
                frontDefault:
                  'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/115.png',
              },
              types: [
                {
                  __typename: 'Item',
                  name: 'Normal',
                },
              ],
            },
          },
          {
            __typename: 'PokemonEdge',
            cursor: 'MTc',
            node: {
              __typename: 'PokemonNode',
              id: '128',
              name: 'Tauros',
              baseExperience: 172,
              order: 198,
              sprites: {
                __typename: 'Sprites',
                frontDefault:
                  'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/128.png',
              },
              types: [
                {
                  __typename: 'Item',
                  name: 'Normal',
                },
              ],
            },
          },
          {
            __typename: 'PokemonEdge',
            cursor: 'MTg',
            node: {
              __typename: 'PokemonNode',
              id: '132',
              name: 'Ditto',
              baseExperience: 101,
              order: 203,
              sprites: {
                __typename: 'Sprites',
                frontDefault:
                  'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png',
              },
              types: [
                {
                  __typename: 'Item',
                  name: 'Normal',
                },
              ],
            },
          },
          {
            __typename: 'PokemonEdge',
            cursor: 'MTk',
            node: {
              __typename: 'PokemonNode',
              id: '133',
              name: 'Eevee',
              baseExperience: 65,
              order: 204,
              sprites: {
                __typename: 'Sprites',
                frontDefault:
                  'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/133.png',
              },
              types: [
                {
                  __typename: 'Item',
                  name: 'Normal',
                },
              ],
            },
          },
          {
            __typename: 'PokemonEdge',
            cursor: 'MjA',
            node: {
              __typename: 'PokemonNode',
              id: '137',
              name: 'Porygon',
              baseExperience: 79,
              order: 213,
              sprites: {
                __typename: 'Sprites',
                frontDefault:
                  'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/137.png',
              },
              types: [
                {
                  __typename: 'Item',
                  name: 'Normal',
                },
              ],
            },
          },
          {
            __typename: 'PokemonEdge',
            cursor: 'MjE',
            node: {
              __typename: 'PokemonNode',
              id: '143',
              name: 'Snorlax',
              baseExperience: 189,
              order: 223,
              sprites: {
                __typename: 'Sprites',
                frontDefault:
                  'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/143.png',
              },
              types: [
                {
                  __typename: 'Item',
                  name: 'Normal',
                },
              ],
            },
          },
          {
            __typename: 'PokemonEdge',
            cursor: 'MjI',
            node: {
              __typename: 'PokemonNode',
              id: '161',
              name: 'Sentret',
              baseExperience: 43,
              order: 243,
              sprites: {
                __typename: 'Sprites',
                frontDefault:
                  'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/161.png',
              },
              types: [
                {
                  __typename: 'Item',
                  name: 'Normal',
                },
              ],
            },
          },
          {
            __typename: 'PokemonEdge',
            cursor: 'MjM',
            node: {
              __typename: 'PokemonNode',
              id: '162',
              name: 'Furret',
              baseExperience: 145,
              order: 244,
              sprites: {
                __typename: 'Sprites',
                frontDefault:
                  'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/162.png',
              },
              types: [
                {
                  __typename: 'Item',
                  name: 'Normal',
                },
              ],
            },
          },
          {
            __typename: 'PokemonEdge',
            cursor: 'MjQ',
            node: {
              __typename: 'PokemonNode',
              id: '163',
              name: 'Hoothoot',
              baseExperience: 52,
              order: 245,
              sprites: {
                __typename: 'Sprites',
                frontDefault:
                  'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/163.png',
              },
              types: [
                {
                  __typename: 'Item',
                  name: 'Normal',
                },
                {
                  __typename: 'Item',
                  name: 'Flying',
                },
              ],
            },
          },
          {
            __typename: 'PokemonEdge',
            cursor: 'MjU',
            node: {
              __typename: 'PokemonNode',
              id: '164',
              name: 'Noctowl',
              baseExperience: 158,
              order: 246,
              sprites: {
                __typename: 'Sprites',
                frontDefault:
                  'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/164.png',
              },
              types: [
                {
                  __typename: 'Item',
                  name: 'Normal',
                },
                {
                  __typename: 'Item',
                  name: 'Flying',
                },
              ],
            },
          },
          {
            __typename: 'PokemonEdge',
            cursor: 'MjY',
            node: {
              __typename: 'PokemonNode',
              id: '174',
              name: 'Igglybuff',
              baseExperience: 42,
              order: 68,
              sprites: {
                __typename: 'Sprites',
                frontDefault:
                  'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/174.png',
              },
              types: [
                {
                  __typename: 'Item',
                  name: 'Normal',
                },
                {
                  __typename: 'Item',
                  name: 'Fairy',
                },
              ],
            },
          },
          {
            __typename: 'PokemonEdge',
            cursor: 'Mjc',
            node: {
              __typename: 'PokemonNode',
              id: '190',
              name: 'Aipom',
              baseExperience: 72,
              order: 270,
              sprites: {
                __typename: 'Sprites',
                frontDefault:
                  'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/190.png',
              },
              types: [
                {
                  __typename: 'Item',
                  name: 'Normal',
                },
              ],
            },
          },
          {
            __typename: 'PokemonEdge',
            cursor: 'Mjg',
            node: {
              __typename: 'PokemonNode',
              id: '203',
              name: 'Girafarig',
              baseExperience: 159,
              order: 285,
              sprites: {
                __typename: 'Sprites',
                frontDefault:
                  'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/203.png',
              },
              types: [
                {
                  __typename: 'Item',
                  name: 'Normal',
                },
                {
                  __typename: 'Item',
                  name: 'Psychic',
                },
              ],
            },
          },
          {
            __typename: 'PokemonEdge',
            cursor: 'Mjk',
            node: {
              __typename: 'PokemonNode',
              id: '206',
              name: 'Dunsparce',
              baseExperience: 145,
              order: 288,
              sprites: {
                __typename: 'Sprites',
                frontDefault:
                  'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/206.png',
              },
              types: [
                {
                  __typename: 'Item',
                  name: 'Normal',
                },
              ],
            },
          },
          {
            __typename: 'PokemonEdge',
            cursor: 'MzA',
            node: {
              __typename: 'PokemonNode',
              id: '216',
              name: 'Teddiursa',
              baseExperience: 66,
              order: 299,
              sprites: {
                __typename: 'Sprites',
                frontDefault:
                  'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/216.png',
              },
              types: [
                {
                  __typename: 'Item',
                  name: 'Normal',
                },
              ],
            },
          },
          {
            __typename: 'PokemonEdge',
            cursor: 'MzE',
            node: {
              __typename: 'PokemonNode',
              id: '217',
              name: 'Ursaring',
              baseExperience: 175,
              order: 300,
              sprites: {
                __typename: 'Sprites',
                frontDefault:
                  'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/217.png',
              },
              types: [
                {
                  __typename: 'Item',
                  name: 'Normal',
                },
              ],
            },
          },
          {
            __typename: 'PokemonEdge',
            cursor: 'MzI',
            node: {
              __typename: 'PokemonNode',
              id: '233',
              name: 'Porygon2',
              baseExperience: 180,
              order: 214,
              sprites: {
                __typename: 'Sprites',
                frontDefault:
                  'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/233.png',
              },
              types: [
                {
                  __typename: 'Item',
                  name: 'Normal',
                },
              ],
            },
          },
          {
            __typename: 'PokemonEdge',
            cursor: 'MzM',
            node: {
              __typename: 'PokemonNode',
              id: '234',
              name: 'Stantler',
              baseExperience: 163,
              order: 318,
              sprites: {
                __typename: 'Sprites',
                frontDefault:
                  'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/234.png',
              },
              types: [
                {
                  __typename: 'Item',
                  name: 'Normal',
                },
              ],
            },
          },
          {
            __typename: 'PokemonEdge',
            cursor: 'MzQ',
            node: {
              __typename: 'PokemonNode',
              id: '235',
              name: 'Smeargle',
              baseExperience: 88,
              order: 319,
              sprites: {
                __typename: 'Sprites',
                frontDefault:
                  'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/235.png',
              },
              types: [
                {
                  __typename: 'Item',
                  name: 'Normal',
                },
              ],
            },
          },
          {
            __typename: 'PokemonEdge',
            cursor: 'MzU',
            node: {
              __typename: 'PokemonNode',
              id: '241',
              name: 'Miltank',
              baseExperience: 172,
              order: 320,
              sprites: {
                __typename: 'Sprites',
                frontDefault:
                  'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/241.png',
              },
              types: [
                {
                  __typename: 'Item',
                  name: 'Normal',
                },
              ],
            },
          },
          {
            __typename: 'PokemonEdge',
            cursor: 'MzY',
            node: {
              __typename: 'PokemonNode',
              id: '242',
              name: 'Blissey',
              baseExperience: 608,
              order: 171,
              sprites: {
                __typename: 'Sprites',
                frontDefault:
                  'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/242.png',
              },
              types: [
                {
                  __typename: 'Item',
                  name: 'Normal',
                },
              ],
            },
          },
          {
            __typename: 'PokemonEdge',
            cursor: 'Mzc',
            node: {
              __typename: 'PokemonNode',
              id: '263',
              name: 'Zigzagoon',
              baseExperience: 56,
              order: 345,
              sprites: {
                __typename: 'Sprites',
                frontDefault:
                  'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/263.png',
              },
              types: [
                {
                  __typename: 'Item',
                  name: 'Normal',
                },
              ],
            },
          },
          {
            __typename: 'PokemonEdge',
            cursor: 'Mzg',
            node: {
              __typename: 'PokemonNode',
              id: '264',
              name: 'Linoone',
              baseExperience: 147,
              order: 346,
              sprites: {
                __typename: 'Sprites',
                frontDefault:
                  'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/264.png',
              },
              types: [
                {
                  __typename: 'Item',
                  name: 'Normal',
                },
              ],
            },
          },
          {
            __typename: 'PokemonEdge',
            cursor: 'Mzk',
            node: {
              __typename: 'PokemonNode',
              id: '276',
              name: 'Taillow',
              baseExperience: 54,
              order: 358,
              sprites: {
                __typename: 'Sprites',
                frontDefault:
                  'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/276.png',
              },
              types: [
                {
                  __typename: 'Item',
                  name: 'Normal',
                },
                {
                  __typename: 'Item',
                  name: 'Flying',
                },
              ],
            },
          },
          {
            __typename: 'PokemonEdge',
            cursor: 'NDA',
            node: {
              __typename: 'PokemonNode',
              id: '277',
              name: 'Swellow',
              baseExperience: 159,
              order: 359,
              sprites: {
                __typename: 'Sprites',
                frontDefault:
                  'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/277.png',
              },
              types: [
                {
                  __typename: 'Item',
                  name: 'Normal',
                },
                {
                  __typename: 'Item',
                  name: 'Flying',
                },
              ],
            },
          },
          {
            __typename: 'PokemonEdge',
            cursor: 'NDE',
            node: {
              __typename: 'PokemonNode',
              id: '287',
              name: 'Slakoth',
              baseExperience: 56,
              order: 372,
              sprites: {
                __typename: 'Sprites',
                frontDefault:
                  'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/287.png',
              },
              types: [
                {
                  __typename: 'Item',
                  name: 'Normal',
                },
              ],
            },
          },
          {
            __typename: 'PokemonEdge',
            cursor: 'NDI',
            node: {
              __typename: 'PokemonNode',
              id: '288',
              name: 'Vigoroth',
              baseExperience: 154,
              order: 373,
              sprites: {
                __typename: 'Sprites',
                frontDefault:
                  'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/288.png',
              },
              types: [
                {
                  __typename: 'Item',
                  name: 'Normal',
                },
              ],
            },
          },
          {
            __typename: 'PokemonEdge',
            cursor: 'NDM',
            node: {
              __typename: 'PokemonNode',
              id: '289',
              name: 'Slaking',
              baseExperience: 252,
              order: 374,
              sprites: {
                __typename: 'Sprites',
                frontDefault:
                  'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/289.png',
              },
              types: [
                {
                  __typename: 'Item',
                  name: 'Normal',
                },
              ],
            },
          },
          {
            __typename: 'PokemonEdge',
            cursor: 'NDQ',
            node: {
              __typename: 'PokemonNode',
              id: '293',
              name: 'Whismur',
              baseExperience: 48,
              order: 378,
              sprites: {
                __typename: 'Sprites',
                frontDefault:
                  'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/293.png',
              },
              types: [
                {
                  __typename: 'Item',
                  name: 'Normal',
                },
              ],
            },
          },
          {
            __typename: 'PokemonEdge',
            cursor: 'NDU',
            node: {
              __typename: 'PokemonNode',
              id: '294',
              name: 'Loudred',
              baseExperience: 126,
              order: 379,
              sprites: {
                __typename: 'Sprites',
                frontDefault:
                  'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/294.png',
              },
              types: [
                {
                  __typename: 'Item',
                  name: 'Normal',
                },
              ],
            },
          },
          {
            __typename: 'PokemonEdge',
            cursor: 'NDY',
            node: {
              __typename: 'PokemonNode',
              id: '295',
              name: 'Exploud',
              baseExperience: 221,
              order: 380,
              sprites: {
                __typename: 'Sprites',
                frontDefault:
                  'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/295.png',
              },
              types: [
                {
                  __typename: 'Item',
                  name: 'Normal',
                },
              ],
            },
          },
          {
            __typename: 'PokemonEdge',
            cursor: 'NDc',
            node: {
              __typename: 'PokemonNode',
              id: '298',
              name: 'Azurill',
              baseExperience: 38,
              order: 262,
              sprites: {
                __typename: 'Sprites',
                frontDefault:
                  'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/298.png',
              },
              types: [
                {
                  __typename: 'Item',
                  name: 'Normal',
                },
                {
                  __typename: 'Item',
                  name: 'Fairy',
                },
              ],
            },
          },
          {
            __typename: 'PokemonEdge',
            cursor: 'NDg',
            node: {
              __typename: 'PokemonNode',
              id: '300',
              name: 'Skitty',
              baseExperience: 52,
              order: 385,
              sprites: {
                __typename: 'Sprites',
                frontDefault:
                  'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/300.png',
              },
              types: [
                {
                  __typename: 'Item',
                  name: 'Normal',
                },
              ],
            },
          },
          {
            __typename: 'PokemonEdge',
            cursor: 'NDk',
            node: {
              __typename: 'PokemonNode',
              id: '301',
              name: 'Delcatty',
              baseExperience: 140,
              order: 386,
              sprites: {
                __typename: 'Sprites',
                frontDefault:
                  'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/301.png',
              },
              types: [
                {
                  __typename: 'Item',
                  name: 'Normal',
                },
              ],
            },
          },
        ],
        pageInfo: {
          __typename: 'PageInfo',
          hasNextPage: true,
          endCursor: 'NDk',
        },
        totalCount: 130,
      },
    },
  },
};
