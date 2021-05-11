import { MockedResponse } from '@apollo/client/testing';
import { ListPokemonDocument, ListPokemonQuery } from '../operations';

export const mockedListPokemonQuery: MockedResponse<ListPokemonQuery> = {
  request: {
    query: ListPokemonDocument,
    variables: {
      sort: {
        order: 'asc',
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
              id: 'bulbasaur',
              pokedexNumber: 1,
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
            cursor: 'MQ',
            node: {
              __typename: 'PokemonNode',
              id: 'ivysaur',
              pokedexNumber: 2,
              name: 'Ivysaur',
              baseExperience: 142,
              order: 2,
              sprites: {
                __typename: 'Sprites',
                frontDefault:
                  'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png',
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
            cursor: 'Mg',
            node: {
              __typename: 'PokemonNode',
              id: 'venusaur',
              pokedexNumber: 3,
              name: 'Venusaur',
              baseExperience: 236,
              order: 3,
              sprites: {
                __typename: 'Sprites',
                frontDefault:
                  'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/3.png',
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
            cursor: 'Mw',
            node: {
              __typename: 'PokemonNode',
              id: 'charmander',
              pokedexNumber: 4,
              name: 'Charmander',
              baseExperience: 62,
              order: 5,
              sprites: {
                __typename: 'Sprites',
                frontDefault:
                  'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png',
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
            cursor: 'NA',
            node: {
              __typename: 'PokemonNode',
              id: 'charmeleon',
              pokedexNumber: 5,
              name: 'Charmeleon',
              baseExperience: 142,
              order: 6,
              sprites: {
                __typename: 'Sprites',
                frontDefault:
                  'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/5.png',
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
            cursor: 'NQ',
            node: {
              __typename: 'PokemonNode',
              id: 'charizard',
              pokedexNumber: 6,
              name: 'Charizard',
              baseExperience: 240,
              order: 7,
              sprites: {
                __typename: 'Sprites',
                frontDefault:
                  'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png',
              },
              types: [
                {
                  __typename: 'Item',
                  id: 'fire',
                  name: 'Fire',
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
            cursor: 'Ng',
            node: {
              __typename: 'PokemonNode',
              id: 'squirtle',
              pokedexNumber: 7,
              name: 'Squirtle',
              baseExperience: 63,
              order: 10,
              sprites: {
                __typename: 'Sprites',
                frontDefault:
                  'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png',
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
            cursor: 'Nw',
            node: {
              __typename: 'PokemonNode',
              id: 'wartortle',
              pokedexNumber: 8,
              name: 'Wartortle',
              baseExperience: 142,
              order: 11,
              sprites: {
                __typename: 'Sprites',
                frontDefault:
                  'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/8.png',
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
            cursor: 'OA',
            node: {
              __typename: 'PokemonNode',
              id: 'blastoise',
              pokedexNumber: 9,
              name: 'Blastoise',
              baseExperience: 239,
              order: 12,
              sprites: {
                __typename: 'Sprites',
                frontDefault:
                  'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/9.png',
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
            cursor: 'OQ',
            node: {
              __typename: 'PokemonNode',
              id: 'caterpie',
              pokedexNumber: 10,
              name: 'Caterpie',
              baseExperience: 39,
              order: 14,
              sprites: {
                __typename: 'Sprites',
                frontDefault:
                  'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10.png',
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
            cursor: 'MTA',
            node: {
              __typename: 'PokemonNode',
              id: 'metapod',
              pokedexNumber: 11,
              name: 'Metapod',
              baseExperience: 72,
              order: 15,
              sprites: {
                __typename: 'Sprites',
                frontDefault:
                  'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/11.png',
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
            cursor: 'MTE',
            node: {
              __typename: 'PokemonNode',
              id: 'butterfree',
              pokedexNumber: 12,
              name: 'Butterfree',
              baseExperience: 178,
              order: 16,
              sprites: {
                __typename: 'Sprites',
                frontDefault:
                  'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/12.png',
              },
              types: [
                {
                  __typename: 'Item',
                  id: 'bug',
                  name: 'Bug',
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
            cursor: 'MTI',
            node: {
              __typename: 'PokemonNode',
              id: 'weedle',
              pokedexNumber: 13,
              name: 'Weedle',
              baseExperience: 39,
              order: 17,
              sprites: {
                __typename: 'Sprites',
                frontDefault:
                  'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/13.png',
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
            cursor: 'MTM',
            node: {
              __typename: 'PokemonNode',
              id: 'kakuna',
              pokedexNumber: 14,
              name: 'Kakuna',
              baseExperience: 72,
              order: 18,
              sprites: {
                __typename: 'Sprites',
                frontDefault:
                  'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/14.png',
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
            cursor: 'MTQ',
            node: {
              __typename: 'PokemonNode',
              id: 'beedrill',
              pokedexNumber: 15,
              name: 'Beedrill',
              baseExperience: 178,
              order: 19,
              sprites: {
                __typename: 'Sprites',
                frontDefault:
                  'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/15.png',
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
            cursor: 'MTU',
            node: {
              __typename: 'PokemonNode',
              id: 'pidgey',
              pokedexNumber: 16,
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
                  id: 'normal',
                  name: 'Normal',
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
            cursor: 'MTY',
            node: {
              __typename: 'PokemonNode',
              id: 'pidgeotto',
              pokedexNumber: 17,
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
                  id: 'normal',
                  name: 'Normal',
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
            cursor: 'MTc',
            node: {
              __typename: 'PokemonNode',
              id: 'pidgeot',
              pokedexNumber: 18,
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
                  id: 'normal',
                  name: 'Normal',
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
            cursor: 'MTg',
            node: {
              __typename: 'PokemonNode',
              id: 'rattata',
              pokedexNumber: 19,
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
                  id: 'normal',
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
              id: 'raticate',
              pokedexNumber: 20,
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
                  id: 'normal',
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
              id: 'spearow',
              pokedexNumber: 21,
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
                  id: 'normal',
                  name: 'Normal',
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
            cursor: 'MjE',
            node: {
              __typename: 'PokemonNode',
              id: 'fearow',
              pokedexNumber: 22,
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
                  id: 'normal',
                  name: 'Normal',
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
            cursor: 'MjI',
            node: {
              __typename: 'PokemonNode',
              id: 'ekans',
              pokedexNumber: 23,
              name: 'Ekans',
              baseExperience: 58,
              order: 32,
              sprites: {
                __typename: 'Sprites',
                frontDefault:
                  'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/23.png',
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
            cursor: 'MjM',
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
            cursor: 'MjQ',
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
            cursor: 'MjU',
            node: {
              __typename: 'PokemonNode',
              id: 'raichu',
              pokedexNumber: 26,
              name: 'Raichu',
              baseExperience: 218,
              order: 49,
              sprites: {
                __typename: 'Sprites',
                frontDefault:
                  'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/26.png',
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
            cursor: 'MjY',
            node: {
              __typename: 'PokemonNode',
              id: 'sandshrew',
              pokedexNumber: 27,
              name: 'Sandshrew',
              baseExperience: 60,
              order: 51,
              sprites: {
                __typename: 'Sprites',
                frontDefault:
                  'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/27.png',
              },
              types: [
                {
                  __typename: 'Item',
                  id: 'ground',
                  name: 'Ground',
                },
              ],
            },
          },
          {
            __typename: 'PokemonEdge',
            cursor: 'Mjc',
            node: {
              __typename: 'PokemonNode',
              id: 'sandslash',
              pokedexNumber: 28,
              name: 'Sandslash',
              baseExperience: 158,
              order: 53,
              sprites: {
                __typename: 'Sprites',
                frontDefault:
                  'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/28.png',
              },
              types: [
                {
                  __typename: 'Item',
                  id: 'ground',
                  name: 'Ground',
                },
              ],
            },
          },
          {
            __typename: 'PokemonEdge',
            cursor: 'Mjg',
            node: {
              __typename: 'PokemonNode',
              id: 'nidoran-f',
              pokedexNumber: 29,
              name: 'Nidoran F',
              baseExperience: 55,
              order: 55,
              sprites: {
                __typename: 'Sprites',
                frontDefault:
                  'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/29.png',
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
            cursor: 'Mjk',
            node: {
              __typename: 'PokemonNode',
              id: 'nidorina',
              pokedexNumber: 30,
              name: 'Nidorina',
              baseExperience: 128,
              order: 56,
              sprites: {
                __typename: 'Sprites',
                frontDefault:
                  'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/30.png',
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
            cursor: 'MzA',
            node: {
              __typename: 'PokemonNode',
              id: 'nidoqueen',
              pokedexNumber: 31,
              name: 'Nidoqueen',
              baseExperience: 227,
              order: 57,
              sprites: {
                __typename: 'Sprites',
                frontDefault:
                  'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/31.png',
              },
              types: [
                {
                  __typename: 'Item',
                  id: 'poison',
                  name: 'Poison',
                },
                {
                  __typename: 'Item',
                  id: 'ground',
                  name: 'Ground',
                },
              ],
            },
          },
          {
            __typename: 'PokemonEdge',
            cursor: 'MzE',
            node: {
              __typename: 'PokemonNode',
              id: 'nidoran-m',
              pokedexNumber: 32,
              name: 'Nidoran M',
              baseExperience: 55,
              order: 58,
              sprites: {
                __typename: 'Sprites',
                frontDefault:
                  'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/32.png',
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
              id: 'nidorino',
              pokedexNumber: 33,
              name: 'Nidorino',
              baseExperience: 128,
              order: 59,
              sprites: {
                __typename: 'Sprites',
                frontDefault:
                  'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/33.png',
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
            cursor: 'MzM',
            node: {
              __typename: 'PokemonNode',
              id: 'nidoking',
              pokedexNumber: 34,
              name: 'Nidoking',
              baseExperience: 227,
              order: 60,
              sprites: {
                __typename: 'Sprites',
                frontDefault:
                  'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/34.png',
              },
              types: [
                {
                  __typename: 'Item',
                  id: 'poison',
                  name: 'Poison',
                },
                {
                  __typename: 'Item',
                  id: 'ground',
                  name: 'Ground',
                },
              ],
            },
          },
          {
            __typename: 'PokemonEdge',
            cursor: 'MzQ',
            node: {
              __typename: 'PokemonNode',
              id: 'clefairy',
              pokedexNumber: 35,
              name: 'Clefairy',
              baseExperience: 113,
              order: 62,
              sprites: {
                __typename: 'Sprites',
                frontDefault:
                  'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/35.png',
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
            cursor: 'MzU',
            node: {
              __typename: 'PokemonNode',
              id: 'clefable',
              pokedexNumber: 36,
              name: 'Clefable',
              baseExperience: 217,
              order: 63,
              sprites: {
                __typename: 'Sprites',
                frontDefault:
                  'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/36.png',
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
            cursor: 'MzY',
            node: {
              __typename: 'PokemonNode',
              id: 'vulpix',
              pokedexNumber: 37,
              name: 'Vulpix',
              baseExperience: 60,
              order: 64,
              sprites: {
                __typename: 'Sprites',
                frontDefault:
                  'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/37.png',
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
            cursor: 'Mzc',
            node: {
              __typename: 'PokemonNode',
              id: 'ninetales',
              pokedexNumber: 38,
              name: 'Ninetales',
              baseExperience: 177,
              order: 66,
              sprites: {
                __typename: 'Sprites',
                frontDefault:
                  'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/38.png',
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
            cursor: 'Mzg',
            node: {
              __typename: 'PokemonNode',
              id: 'jigglypuff',
              pokedexNumber: 39,
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
            cursor: 'Mzk',
            node: {
              __typename: 'PokemonNode',
              id: 'wigglytuff',
              pokedexNumber: 40,
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
            cursor: 'NDA',
            node: {
              __typename: 'PokemonNode',
              id: 'zubat',
              pokedexNumber: 41,
              name: 'Zubat',
              baseExperience: 49,
              order: 71,
              sprites: {
                __typename: 'Sprites',
                frontDefault:
                  'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/41.png',
              },
              types: [
                {
                  __typename: 'Item',
                  id: 'poison',
                  name: 'Poison',
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
            cursor: 'NDE',
            node: {
              __typename: 'PokemonNode',
              id: 'golbat',
              pokedexNumber: 42,
              name: 'Golbat',
              baseExperience: 159,
              order: 72,
              sprites: {
                __typename: 'Sprites',
                frontDefault:
                  'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/42.png',
              },
              types: [
                {
                  __typename: 'Item',
                  id: 'poison',
                  name: 'Poison',
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
            cursor: 'NDI',
            node: {
              __typename: 'PokemonNode',
              id: 'oddish',
              pokedexNumber: 43,
              name: 'Oddish',
              baseExperience: 64,
              order: 74,
              sprites: {
                __typename: 'Sprites',
                frontDefault:
                  'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/43.png',
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
            cursor: 'NDM',
            node: {
              __typename: 'PokemonNode',
              id: 'gloom',
              pokedexNumber: 44,
              name: 'Gloom',
              baseExperience: 138,
              order: 75,
              sprites: {
                __typename: 'Sprites',
                frontDefault:
                  'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/44.png',
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
            cursor: 'NDQ',
            node: {
              __typename: 'PokemonNode',
              id: 'vileplume',
              pokedexNumber: 45,
              name: 'Vileplume',
              baseExperience: 221,
              order: 76,
              sprites: {
                __typename: 'Sprites',
                frontDefault:
                  'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/45.png',
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
            cursor: 'NDU',
            node: {
              __typename: 'PokemonNode',
              id: 'paras',
              pokedexNumber: 46,
              name: 'Paras',
              baseExperience: 57,
              order: 78,
              sprites: {
                __typename: 'Sprites',
                frontDefault:
                  'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/46.png',
              },
              types: [
                {
                  __typename: 'Item',
                  id: 'bug',
                  name: 'Bug',
                },
                {
                  __typename: 'Item',
                  id: 'grass',
                  name: 'Grass',
                },
              ],
            },
          },
          {
            __typename: 'PokemonEdge',
            cursor: 'NDY',
            node: {
              __typename: 'PokemonNode',
              id: 'parasect',
              pokedexNumber: 47,
              name: 'Parasect',
              baseExperience: 142,
              order: 79,
              sprites: {
                __typename: 'Sprites',
                frontDefault:
                  'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/47.png',
              },
              types: [
                {
                  __typename: 'Item',
                  id: 'bug',
                  name: 'Bug',
                },
                {
                  __typename: 'Item',
                  id: 'grass',
                  name: 'Grass',
                },
              ],
            },
          },
          {
            __typename: 'PokemonEdge',
            cursor: 'NDc',
            node: {
              __typename: 'PokemonNode',
              id: 'venonat',
              pokedexNumber: 48,
              name: 'Venonat',
              baseExperience: 61,
              order: 80,
              sprites: {
                __typename: 'Sprites',
                frontDefault:
                  'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/48.png',
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
            cursor: 'NDg',
            node: {
              __typename: 'PokemonNode',
              id: 'venomoth',
              pokedexNumber: 49,
              name: 'Venomoth',
              baseExperience: 158,
              order: 81,
              sprites: {
                __typename: 'Sprites',
                frontDefault:
                  'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/49.png',
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
            cursor: 'NDk',
            node: {
              __typename: 'PokemonNode',
              id: 'diglett',
              pokedexNumber: 50,
              name: 'Diglett',
              baseExperience: 53,
              order: 82,
              sprites: {
                __typename: 'Sprites',
                frontDefault:
                  'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/50.png',
              },
              types: [
                {
                  __typename: 'Item',
                  id: 'ground',
                  name: 'Ground',
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
