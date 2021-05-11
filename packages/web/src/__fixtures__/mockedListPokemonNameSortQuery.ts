import { MockedResponse } from '@apollo/client/testing';
import { ListPokemonDocument, ListPokemonQuery } from '../operations';

export const mockedListPokemonNameSortQuery: MockedResponse<ListPokemonQuery> = {
  request: {
    query: ListPokemonDocument,
    variables: {
      sort: {
        name: 'asc',
      },
      first: 50,
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
              id: 'abomasnow',
              pokedexNumber: 460,
              name: 'Abomasnow',
              baseExperience: 173,
              order: 567,
              sprites: {
                __typename: 'Sprites',
                frontDefault:
                  'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/460.png',
              },
              types: [
                {
                  __typename: 'Item',
                  id: 'grass',
                  name: 'Grass',
                },
                {
                  __typename: 'Item',
                  id: 'ice',
                  name: 'Ice',
                },
              ],
            },
          },
          {
            __typename: 'PokemonEdge',
            cursor: 'MQ',
            node: {
              __typename: 'PokemonNode',
              id: 'abomasnow-mega',
              pokedexNumber: 10060,
              name: 'Abomasnow Mega',
              baseExperience: 208,
              order: 568,
              sprites: {
                __typename: 'Sprites',
                frontDefault:
                  'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10060.png',
              },
              types: [
                {
                  __typename: 'Item',
                  id: 'grass',
                  name: 'Grass',
                },
                {
                  __typename: 'Item',
                  id: 'ice',
                  name: 'Ice',
                },
              ],
            },
          },
          {
            __typename: 'PokemonEdge',
            cursor: 'Mg',
            node: {
              __typename: 'PokemonNode',
              id: 'abra',
              pokedexNumber: 63,
              name: 'Abra',
              baseExperience: 62,
              order: 100,
              sprites: {
                __typename: 'Sprites',
                frontDefault:
                  'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/63.png',
              },
              types: [
                {
                  __typename: 'Item',
                  id: 'psychic',
                  name: 'Psychic',
                },
              ],
            },
          },
          {
            __typename: 'PokemonEdge',
            cursor: 'Mw',
            node: {
              __typename: 'PokemonNode',
              id: 'absol',
              pokedexNumber: 359,
              name: 'Absol',
              baseExperience: 163,
              order: 460,
              sprites: {
                __typename: 'Sprites',
                frontDefault:
                  'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/359.png',
              },
              types: [
                {
                  __typename: 'Item',
                  id: 'dark',
                  name: 'Dark',
                },
              ],
            },
          },
          {
            __typename: 'PokemonEdge',
            cursor: 'NA',
            node: {
              __typename: 'PokemonNode',
              id: 'absol-mega',
              pokedexNumber: 10057,
              name: 'Absol Mega',
              baseExperience: 198,
              order: 461,
              sprites: {
                __typename: 'Sprites',
                frontDefault:
                  'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10057.png',
              },
              types: [
                {
                  __typename: 'Item',
                  id: 'dark',
                  name: 'Dark',
                },
              ],
            },
          },
          {
            __typename: 'PokemonEdge',
            cursor: 'NQ',
            node: {
              __typename: 'PokemonNode',
              id: 'accelgor',
              pokedexNumber: 617,
              name: 'Accelgor',
              baseExperience: 173,
              order: 717,
              sprites: {
                __typename: 'Sprites',
                frontDefault:
                  'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/617.png',
              },
              types: [
                {
                  __typename: 'Item',
                  id: 'bug',
                  name: 'Bug',
                },
              ],
            },
          },
          {
            __typename: 'PokemonEdge',
            cursor: 'Ng',
            node: {
              __typename: 'PokemonNode',
              id: 'aegislash-blade',
              pokedexNumber: 10026,
              name: 'Aegislash Blade',
              baseExperience: 234,
              order: 793,
              sprites: {
                __typename: 'Sprites',
                frontDefault:
                  'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10026.png',
              },
              types: [
                {
                  __typename: 'Item',
                  id: 'steel',
                  name: 'Steel',
                },
                {
                  __typename: 'Item',
                  id: 'ghost',
                  name: 'Ghost',
                },
              ],
            },
          },
          {
            __typename: 'PokemonEdge',
            cursor: 'Nw',
            node: {
              __typename: 'PokemonNode',
              id: 'aegislash-shield',
              pokedexNumber: 681,
              name: 'Aegislash Shield',
              baseExperience: 234,
              order: 792,
              sprites: {
                __typename: 'Sprites',
                frontDefault:
                  'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/681.png',
              },
              types: [
                {
                  __typename: 'Item',
                  id: 'steel',
                  name: 'Steel',
                },
                {
                  __typename: 'Item',
                  id: 'ghost',
                  name: 'Ghost',
                },
              ],
            },
          },
          {
            __typename: 'PokemonEdge',
            cursor: 'OA',
            node: {
              __typename: 'PokemonNode',
              id: 'aerodactyl',
              pokedexNumber: 142,
              name: 'Aerodactyl',
              baseExperience: 180,
              order: 220,
              sprites: {
                __typename: 'Sprites',
                frontDefault:
                  'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/142.png',
              },
              types: [
                {
                  __typename: 'Item',
                  id: 'rock',
                  name: 'Rock',
                },
                {
                  __typename: 'Item',
                  id: 'flying',
                  name: 'Flying',
                },
              ],
            },
          },
          {
            __typename: 'PokemonEdge',
            cursor: 'OQ',
            node: {
              __typename: 'PokemonNode',
              id: 'aerodactyl-mega',
              pokedexNumber: 10042,
              name: 'Aerodactyl Mega',
              baseExperience: 215,
              order: 221,
              sprites: {
                __typename: 'Sprites',
                frontDefault:
                  'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10042.png',
              },
              types: [
                {
                  __typename: 'Item',
                  id: 'rock',
                  name: 'Rock',
                },
                {
                  __typename: 'Item',
                  id: 'flying',
                  name: 'Flying',
                },
              ],
            },
          },
          {
            __typename: 'PokemonEdge',
            cursor: 'MTA',
            node: {
              __typename: 'PokemonNode',
              id: 'aggron',
              pokedexNumber: 306,
              name: 'Aggron',
              baseExperience: 239,
              order: 393,
              sprites: {
                __typename: 'Sprites',
                frontDefault:
                  'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/306.png',
              },
              types: [
                {
                  __typename: 'Item',
                  id: 'steel',
                  name: 'Steel',
                },
                {
                  __typename: 'Item',
                  id: 'rock',
                  name: 'Rock',
                },
              ],
            },
          },
          {
            __typename: 'PokemonEdge',
            cursor: 'MTE',
            node: {
              __typename: 'PokemonNode',
              id: 'aggron-mega',
              pokedexNumber: 10053,
              name: 'Aggron Mega',
              baseExperience: 284,
              order: 394,
              sprites: {
                __typename: 'Sprites',
                frontDefault:
                  'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10053.png',
              },
              types: [
                {
                  __typename: 'Item',
                  id: 'steel',
                  name: 'Steel',
                },
              ],
            },
          },
          {
            __typename: 'PokemonEdge',
            cursor: 'MTI',
            node: {
              __typename: 'PokemonNode',
              id: 'aipom',
              pokedexNumber: 190,
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
                  id: 'normal',
                  name: 'Normal',
                },
              ],
            },
          },
          {
            __typename: 'PokemonEdge',
            cursor: 'MTM',
            node: {
              __typename: 'PokemonNode',
              id: 'alakazam',
              pokedexNumber: 65,
              name: 'Alakazam',
              baseExperience: 225,
              order: 102,
              sprites: {
                __typename: 'Sprites',
                frontDefault:
                  'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/65.png',
              },
              types: [
                {
                  __typename: 'Item',
                  id: 'psychic',
                  name: 'Psychic',
                },
              ],
            },
          },
          {
            __typename: 'PokemonEdge',
            cursor: 'MTQ',
            node: {
              __typename: 'PokemonNode',
              id: 'alakazam-mega',
              pokedexNumber: 10037,
              name: 'Alakazam Mega',
              baseExperience: 270,
              order: 103,
              sprites: {
                __typename: 'Sprites',
                frontDefault:
                  'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10037.png',
              },
              types: [
                {
                  __typename: 'Item',
                  id: 'psychic',
                  name: 'Psychic',
                },
              ],
            },
          },
          {
            __typename: 'PokemonEdge',
            cursor: 'MTU',
            node: {
              __typename: 'PokemonNode',
              id: 'alcremie',
              pokedexNumber: 869,
              name: 'Alcremie',
              baseExperience: 173,
              order: -1,
              sprites: {
                __typename: 'Sprites',
                frontDefault:
                  'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/869.png',
              },
              types: [
                {
                  __typename: 'Item',
                  id: 'fairy',
                  name: 'Fairy',
                },
              ],
            },
          },
          {
            __typename: 'PokemonEdge',
            cursor: 'MTY',
            node: {
              __typename: 'PokemonNode',
              id: 'alcremie-gmax',
              pokedexNumber: 10214,
              name: 'Alcremie Gmax',
              baseExperience: 173,
              order: -1,
              sprites: {
                __typename: 'Sprites',
                frontDefault:
                  'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10214.png',
              },
              types: [
                {
                  __typename: 'Item',
                  id: 'fairy',
                  name: 'Fairy',
                },
              ],
            },
          },
          {
            __typename: 'PokemonEdge',
            cursor: 'MTc',
            node: {
              __typename: 'PokemonNode',
              id: 'alomomola',
              pokedexNumber: 594,
              name: 'Alomomola',
              baseExperience: 165,
              order: 694,
              sprites: {
                __typename: 'Sprites',
                frontDefault:
                  'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/594.png',
              },
              types: [
                {
                  __typename: 'Item',
                  id: 'water',
                  name: 'Water',
                },
              ],
            },
          },
          {
            __typename: 'PokemonEdge',
            cursor: 'MTg',
            node: {
              __typename: 'PokemonNode',
              id: 'altaria',
              pokedexNumber: 334,
              name: 'Altaria',
              baseExperience: 172,
              order: 428,
              sprites: {
                __typename: 'Sprites',
                frontDefault:
                  'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/334.png',
              },
              types: [
                {
                  __typename: 'Item',
                  id: 'dragon',
                  name: 'Dragon',
                },
                {
                  __typename: 'Item',
                  id: 'flying',
                  name: 'Flying',
                },
              ],
            },
          },
          {
            __typename: 'PokemonEdge',
            cursor: 'MTk',
            node: {
              __typename: 'PokemonNode',
              id: 'altaria-mega',
              pokedexNumber: 10067,
              name: 'Altaria Mega',
              baseExperience: 207,
              order: 429,
              sprites: {
                __typename: 'Sprites',
                frontDefault:
                  'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10067.png',
              },
              types: [
                {
                  __typename: 'Item',
                  id: 'dragon',
                  name: 'Dragon',
                },
                {
                  __typename: 'Item',
                  id: 'fairy',
                  name: 'Fairy',
                },
              ],
            },
          },
          {
            __typename: 'PokemonEdge',
            cursor: 'MjA',
            node: {
              __typename: 'PokemonNode',
              id: 'amaura',
              pokedexNumber: 698,
              name: 'Amaura',
              baseExperience: 72,
              order: 810,
              sprites: {
                __typename: 'Sprites',
                frontDefault:
                  'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/698.png',
              },
              types: [
                {
                  __typename: 'Item',
                  id: 'rock',
                  name: 'Rock',
                },
                {
                  __typename: 'Item',
                  id: 'ice',
                  name: 'Ice',
                },
              ],
            },
          },
          {
            __typename: 'PokemonEdge',
            cursor: 'MjE',
            node: {
              __typename: 'PokemonNode',
              id: 'ambipom',
              pokedexNumber: 424,
              name: 'Ambipom',
              baseExperience: 169,
              order: 271,
              sprites: {
                __typename: 'Sprites',
                frontDefault:
                  'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/424.png',
              },
              types: [
                {
                  __typename: 'Item',
                  id: 'normal',
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
              id: 'amoonguss',
              pokedexNumber: 591,
              name: 'Amoonguss',
              baseExperience: 162,
              order: 691,
              sprites: {
                __typename: 'Sprites',
                frontDefault:
                  'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/591.png',
              },
              types: [
                {
                  __typename: 'Item',
                  id: 'grass',
                  name: 'Grass',
                },
                {
                  __typename: 'Item',
                  id: 'poison',
                  name: 'Poison',
                },
              ],
            },
          },
          {
            __typename: 'PokemonEdge',
            cursor: 'MjM',
            node: {
              __typename: 'PokemonNode',
              id: 'ampharos',
              pokedexNumber: 181,
              name: 'Ampharos',
              baseExperience: 230,
              order: 260,
              sprites: {
                __typename: 'Sprites',
                frontDefault:
                  'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/181.png',
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
            cursor: 'MjQ',
            node: {
              __typename: 'PokemonNode',
              id: 'ampharos-mega',
              pokedexNumber: 10045,
              name: 'Ampharos Mega',
              baseExperience: 275,
              order: 261,
              sprites: {
                __typename: 'Sprites',
                frontDefault:
                  'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10045.png',
              },
              types: [
                {
                  __typename: 'Item',
                  id: 'electric',
                  name: 'Electric',
                },
                {
                  __typename: 'Item',
                  id: 'dragon',
                  name: 'Dragon',
                },
              ],
            },
          },
          {
            __typename: 'PokemonEdge',
            cursor: 'MjU',
            node: {
              __typename: 'PokemonNode',
              id: 'anorith',
              pokedexNumber: 347,
              name: 'Anorith',
              baseExperience: 71,
              order: 442,
              sprites: {
                __typename: 'Sprites',
                frontDefault:
                  'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/347.png',
              },
              types: [
                {
                  __typename: 'Item',
                  id: 'rock',
                  name: 'Rock',
                },
                {
                  __typename: 'Item',
                  id: 'bug',
                  name: 'Bug',
                },
              ],
            },
          },
          {
            __typename: 'PokemonEdge',
            cursor: 'MjY',
            node: {
              __typename: 'PokemonNode',
              id: 'appletun',
              pokedexNumber: 842,
              name: 'Appletun',
              baseExperience: 170,
              order: -1,
              sprites: {
                __typename: 'Sprites',
                frontDefault:
                  'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/842.png',
              },
              types: [
                {
                  __typename: 'Item',
                  id: 'grass',
                  name: 'Grass',
                },
                {
                  __typename: 'Item',
                  id: 'dragon',
                  name: 'Dragon',
                },
              ],
            },
          },
          {
            __typename: 'PokemonEdge',
            cursor: 'Mjc',
            node: {
              __typename: 'PokemonNode',
              id: 'appletun-gmax',
              pokedexNumber: 10208,
              name: 'Appletun Gmax',
              baseExperience: 170,
              order: -1,
              sprites: {
                __typename: 'Sprites',
                frontDefault:
                  'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10208.png',
              },
              types: [
                {
                  __typename: 'Item',
                  id: 'grass',
                  name: 'Grass',
                },
                {
                  __typename: 'Item',
                  id: 'dragon',
                  name: 'Dragon',
                },
              ],
            },
          },
          {
            __typename: 'PokemonEdge',
            cursor: 'Mjg',
            node: {
              __typename: 'PokemonNode',
              id: 'applin',
              pokedexNumber: 840,
              name: 'Applin',
              baseExperience: 52,
              order: -1,
              sprites: {
                __typename: 'Sprites',
                frontDefault:
                  'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/840.png',
              },
              types: [
                {
                  __typename: 'Item',
                  id: 'grass',
                  name: 'Grass',
                },
                {
                  __typename: 'Item',
                  id: 'dragon',
                  name: 'Dragon',
                },
              ],
            },
          },
          {
            __typename: 'PokemonEdge',
            cursor: 'Mjk',
            node: {
              __typename: 'PokemonNode',
              id: 'araquanid',
              pokedexNumber: 752,
              name: 'Araquanid',
              baseExperience: 159,
              order: 884,
              sprites: {
                __typename: 'Sprites',
                frontDefault:
                  'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/752.png',
              },
              types: [
                {
                  __typename: 'Item',
                  id: 'water',
                  name: 'Water',
                },
                {
                  __typename: 'Item',
                  id: 'bug',
                  name: 'Bug',
                },
              ],
            },
          },
          {
            __typename: 'PokemonEdge',
            cursor: 'MzA',
            node: {
              __typename: 'PokemonNode',
              id: 'araquanid-totem',
              pokedexNumber: 10153,
              name: 'Araquanid Totem',
              baseExperience: 159,
              order: 885,
              sprites: {
                __typename: 'Sprites',
                frontDefault: null,
              },
              types: [
                {
                  __typename: 'Item',
                  id: 'water',
                  name: 'Water',
                },
                {
                  __typename: 'Item',
                  id: 'bug',
                  name: 'Bug',
                },
              ],
            },
          },
          {
            __typename: 'PokemonEdge',
            cursor: 'MzE',
            node: {
              __typename: 'PokemonNode',
              id: 'arbok',
              pokedexNumber: 24,
              name: 'Arbok',
              baseExperience: 157,
              order: 33,
              sprites: {
                __typename: 'Sprites',
                frontDefault:
                  'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/24.png',
              },
              types: [
                {
                  __typename: 'Item',
                  id: 'poison',
                  name: 'Poison',
                },
              ],
            },
          },
          {
            __typename: 'PokemonEdge',
            cursor: 'MzI',
            node: {
              __typename: 'PokemonNode',
              id: 'arcanine',
              pokedexNumber: 59,
              name: 'Arcanine',
              baseExperience: 194,
              order: 95,
              sprites: {
                __typename: 'Sprites',
                frontDefault:
                  'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/59.png',
              },
              types: [
                {
                  __typename: 'Item',
                  id: 'fire',
                  name: 'Fire',
                },
              ],
            },
          },
          {
            __typename: 'PokemonEdge',
            cursor: 'MzM',
            node: {
              __typename: 'PokemonNode',
              id: 'arceus',
              pokedexNumber: 493,
              name: 'Arceus',
              baseExperience: 324,
              order: 590,
              sprites: {
                __typename: 'Sprites',
                frontDefault:
                  'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/493.png',
              },
              types: [
                {
                  __typename: 'Item',
                  id: 'normal',
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
              id: 'archen',
              pokedexNumber: 566,
              name: 'Archen',
              baseExperience: 71,
              order: 666,
              sprites: {
                __typename: 'Sprites',
                frontDefault:
                  'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/566.png',
              },
              types: [
                {
                  __typename: 'Item',
                  id: 'rock',
                  name: 'Rock',
                },
                {
                  __typename: 'Item',
                  id: 'flying',
                  name: 'Flying',
                },
              ],
            },
          },
          {
            __typename: 'PokemonEdge',
            cursor: 'MzU',
            node: {
              __typename: 'PokemonNode',
              id: 'archeops',
              pokedexNumber: 567,
              name: 'Archeops',
              baseExperience: 177,
              order: 667,
              sprites: {
                __typename: 'Sprites',
                frontDefault:
                  'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/567.png',
              },
              types: [
                {
                  __typename: 'Item',
                  id: 'rock',
                  name: 'Rock',
                },
                {
                  __typename: 'Item',
                  id: 'flying',
                  name: 'Flying',
                },
              ],
            },
          },
          {
            __typename: 'PokemonEdge',
            cursor: 'MzY',
            node: {
              __typename: 'PokemonNode',
              id: 'arctovish',
              pokedexNumber: 883,
              name: 'Arctovish',
              baseExperience: 177,
              order: -1,
              sprites: {
                __typename: 'Sprites',
                frontDefault:
                  'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/883.png',
              },
              types: [
                {
                  __typename: 'Item',
                  id: 'water',
                  name: 'Water',
                },
                {
                  __typename: 'Item',
                  id: 'ice',
                  name: 'Ice',
                },
              ],
            },
          },
          {
            __typename: 'PokemonEdge',
            cursor: 'Mzc',
            node: {
              __typename: 'PokemonNode',
              id: 'arctozolt',
              pokedexNumber: 881,
              name: 'Arctozolt',
              baseExperience: 177,
              order: -1,
              sprites: {
                __typename: 'Sprites',
                frontDefault:
                  'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/881.png',
              },
              types: [
                {
                  __typename: 'Item',
                  id: 'electric',
                  name: 'Electric',
                },
                {
                  __typename: 'Item',
                  id: 'ice',
                  name: 'Ice',
                },
              ],
            },
          },
          {
            __typename: 'PokemonEdge',
            cursor: 'Mzg',
            node: {
              __typename: 'PokemonNode',
              id: 'ariados',
              pokedexNumber: 168,
              name: 'Ariados',
              baseExperience: 140,
              order: 250,
              sprites: {
                __typename: 'Sprites',
                frontDefault:
                  'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/168.png',
              },
              types: [
                {
                  __typename: 'Item',
                  id: 'bug',
                  name: 'Bug',
                },
                {
                  __typename: 'Item',
                  id: 'poison',
                  name: 'Poison',
                },
              ],
            },
          },
          {
            __typename: 'PokemonEdge',
            cursor: 'Mzk',
            node: {
              __typename: 'PokemonNode',
              id: 'armaldo',
              pokedexNumber: 348,
              name: 'Armaldo',
              baseExperience: 173,
              order: 443,
              sprites: {
                __typename: 'Sprites',
                frontDefault:
                  'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/348.png',
              },
              types: [
                {
                  __typename: 'Item',
                  id: 'rock',
                  name: 'Rock',
                },
                {
                  __typename: 'Item',
                  id: 'bug',
                  name: 'Bug',
                },
              ],
            },
          },
          {
            __typename: 'PokemonEdge',
            cursor: 'NDA',
            node: {
              __typename: 'PokemonNode',
              id: 'aromatisse',
              pokedexNumber: 683,
              name: 'Aromatisse',
              baseExperience: 162,
              order: 795,
              sprites: {
                __typename: 'Sprites',
                frontDefault:
                  'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/683.png',
              },
              types: [
                {
                  __typename: 'Item',
                  id: 'fairy',
                  name: 'Fairy',
                },
              ],
            },
          },
          {
            __typename: 'PokemonEdge',
            cursor: 'NDE',
            node: {
              __typename: 'PokemonNode',
              id: 'aron',
              pokedexNumber: 304,
              name: 'Aron',
              baseExperience: 66,
              order: 391,
              sprites: {
                __typename: 'Sprites',
                frontDefault:
                  'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/304.png',
              },
              types: [
                {
                  __typename: 'Item',
                  id: 'steel',
                  name: 'Steel',
                },
                {
                  __typename: 'Item',
                  id: 'rock',
                  name: 'Rock',
                },
              ],
            },
          },
          {
            __typename: 'PokemonEdge',
            cursor: 'NDI',
            node: {
              __typename: 'PokemonNode',
              id: 'arrokuda',
              pokedexNumber: 846,
              name: 'Arrokuda',
              baseExperience: 56,
              order: -1,
              sprites: {
                __typename: 'Sprites',
                frontDefault:
                  'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/846.png',
              },
              types: [
                {
                  __typename: 'Item',
                  id: 'water',
                  name: 'Water',
                },
              ],
            },
          },
          {
            __typename: 'PokemonEdge',
            cursor: 'NDM',
            node: {
              __typename: 'PokemonNode',
              id: 'articuno',
              pokedexNumber: 144,
              name: 'Articuno',
              baseExperience: 261,
              order: 224,
              sprites: {
                __typename: 'Sprites',
                frontDefault:
                  'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/144.png',
              },
              types: [
                {
                  __typename: 'Item',
                  id: 'ice',
                  name: 'Ice',
                },
                {
                  __typename: 'Item',
                  id: 'flying',
                  name: 'Flying',
                },
              ],
            },
          },
          {
            __typename: 'PokemonEdge',
            cursor: 'NDQ',
            node: {
              __typename: 'PokemonNode',
              id: 'articuno-galar',
              pokedexNumber: 10166,
              name: 'Articuno Galar',
              baseExperience: 261,
              order: 224,
              sprites: {
                __typename: 'Sprites',
                frontDefault:
                  'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10166.png',
              },
              types: [
                {
                  __typename: 'Item',
                  id: 'psychic',
                  name: 'Psychic',
                },
                {
                  __typename: 'Item',
                  id: 'flying',
                  name: 'Flying',
                },
              ],
            },
          },
          {
            __typename: 'PokemonEdge',
            cursor: 'NDU',
            node: {
              __typename: 'PokemonNode',
              id: 'audino',
              pokedexNumber: 531,
              name: 'Audino',
              baseExperience: 390,
              order: 628,
              sprites: {
                __typename: 'Sprites',
                frontDefault:
                  'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/531.png',
              },
              types: [
                {
                  __typename: 'Item',
                  id: 'normal',
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
              id: 'audino-mega',
              pokedexNumber: 10069,
              name: 'Audino Mega',
              baseExperience: 425,
              order: 629,
              sprites: {
                __typename: 'Sprites',
                frontDefault:
                  'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10069.png',
              },
              types: [
                {
                  __typename: 'Item',
                  id: 'normal',
                  name: 'Normal',
                },
                {
                  __typename: 'Item',
                  id: 'fairy',
                  name: 'Fairy',
                },
              ],
            },
          },
          {
            __typename: 'PokemonEdge',
            cursor: 'NDc',
            node: {
              __typename: 'PokemonNode',
              id: 'aurorus',
              pokedexNumber: 699,
              name: 'Aurorus',
              baseExperience: 104,
              order: 811,
              sprites: {
                __typename: 'Sprites',
                frontDefault:
                  'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/699.png',
              },
              types: [
                {
                  __typename: 'Item',
                  id: 'rock',
                  name: 'Rock',
                },
                {
                  __typename: 'Item',
                  id: 'ice',
                  name: 'Ice',
                },
              ],
            },
          },
          {
            __typename: 'PokemonEdge',
            cursor: 'NDg',
            node: {
              __typename: 'PokemonNode',
              id: 'avalugg',
              pokedexNumber: 713,
              name: 'Avalugg',
              baseExperience: 180,
              order: 830,
              sprites: {
                __typename: 'Sprites',
                frontDefault:
                  'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/713.png',
              },
              types: [
                {
                  __typename: 'Item',
                  id: 'ice',
                  name: 'Ice',
                },
              ],
            },
          },
          {
            __typename: 'PokemonEdge',
            cursor: 'NDk',
            node: {
              __typename: 'PokemonNode',
              id: 'axew',
              pokedexNumber: 610,
              name: 'Axew',
              baseExperience: 64,
              order: 710,
              sprites: {
                __typename: 'Sprites',
                frontDefault:
                  'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/610.png',
              },
              types: [
                {
                  __typename: 'Item',
                  id: 'dragon',
                  name: 'Dragon',
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
        totalCount: 1118,
      },
    },
  },
};
