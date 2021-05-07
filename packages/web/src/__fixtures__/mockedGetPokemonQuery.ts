import { MockedResponse } from '@apollo/client/testing';
import { GetPokemonDocument, GetPokemonQuery } from '../operations';

export const mockedGetPokemonQuery: MockedResponse<GetPokemonQuery> = {
  request: {
    query: GetPokemonDocument,
    variables: {
      id: '1',
    },
  },
  result: {
    data: {
      getPokemon: {
        __typename: 'PokemonNode',
        id: '1',
        name: 'Bulbasaur',
        baseExperience: 64,
        height: 7,
        order: 1,
        weight: 69,
        sprites: {
          __typename: 'Sprites',
          frontDefault:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png',
          backDefault:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/1.png',
          backFemale: null,
          backShiny:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/1.png',
          backShinyFemale: null,
          frontFemale: null,
          frontShiny:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/1.png',
          frontShinyFemale: null,
        },
        abilities: [
          {
            __typename: 'Item',
            name: 'Overgrow',
          },
          {
            __typename: 'Item',
            name: 'Chlorophyll',
          },
        ],
        heldItems: [],
        moves: [
          {
            __typename: 'Item',
            name: 'Razor Wind',
          },
          {
            __typename: 'Item',
            name: 'Swords Dance',
          },
          {
            __typename: 'Item',
            name: 'Cut',
          },
          {
            __typename: 'Item',
            name: 'Bind',
          },
          {
            __typename: 'Item',
            name: 'Vine Whip',
          },
          {
            __typename: 'Item',
            name: 'Headbutt',
          },
          {
            __typename: 'Item',
            name: 'Tackle',
          },
          {
            __typename: 'Item',
            name: 'Body Slam',
          },
          {
            __typename: 'Item',
            name: 'Take Down',
          },
          {
            __typename: 'Item',
            name: 'Double Edge',
          },
          {
            __typename: 'Item',
            name: 'Growl',
          },
          {
            __typename: 'Item',
            name: 'Strength',
          },
          {
            __typename: 'Item',
            name: 'Mega Drain',
          },
          {
            __typename: 'Item',
            name: 'Leech Seed',
          },
          {
            __typename: 'Item',
            name: 'Growth',
          },
          {
            __typename: 'Item',
            name: 'Razor Leaf',
          },
          {
            __typename: 'Item',
            name: 'Solar Beam',
          },
          {
            __typename: 'Item',
            name: 'Poison Powder',
          },
          {
            __typename: 'Item',
            name: 'Sleep Powder',
          },
          {
            __typename: 'Item',
            name: 'Petal Dance',
          },
          {
            __typename: 'Item',
            name: 'String Shot',
          },
          {
            __typename: 'Item',
            name: 'Toxic',
          },
          {
            __typename: 'Item',
            name: 'Rage',
          },
          {
            __typename: 'Item',
            name: 'Mimic',
          },
          {
            __typename: 'Item',
            name: 'Double Team',
          },
          {
            __typename: 'Item',
            name: 'Defense Curl',
          },
          {
            __typename: 'Item',
            name: 'Light Screen',
          },
          {
            __typename: 'Item',
            name: 'Reflect',
          },
          {
            __typename: 'Item',
            name: 'Bide',
          },
          {
            __typename: 'Item',
            name: 'Sludge',
          },
          {
            __typename: 'Item',
            name: 'Skull Bash',
          },
          {
            __typename: 'Item',
            name: 'Amnesia',
          },
          {
            __typename: 'Item',
            name: 'Flash',
          },
          {
            __typename: 'Item',
            name: 'Rest',
          },
          {
            __typename: 'Item',
            name: 'Substitute',
          },
          {
            __typename: 'Item',
            name: 'Snore',
          },
          {
            __typename: 'Item',
            name: 'Curse',
          },
          {
            __typename: 'Item',
            name: 'Protect',
          },
          {
            __typename: 'Item',
            name: 'Sludge Bomb',
          },
          {
            __typename: 'Item',
            name: 'Mud Slap',
          },
          {
            __typename: 'Item',
            name: 'Giga Drain',
          },
          {
            __typename: 'Item',
            name: 'Endure',
          },
          {
            __typename: 'Item',
            name: 'Charm',
          },
          {
            __typename: 'Item',
            name: 'Swagger',
          },
          {
            __typename: 'Item',
            name: 'Fury Cutter',
          },
          {
            __typename: 'Item',
            name: 'Attract',
          },
          {
            __typename: 'Item',
            name: 'Sleep Talk',
          },
          {
            __typename: 'Item',
            name: 'Return',
          },
          {
            __typename: 'Item',
            name: 'Frustration',
          },
          {
            __typename: 'Item',
            name: 'Safeguard',
          },
          {
            __typename: 'Item',
            name: 'Sweet Scent',
          },
          {
            __typename: 'Item',
            name: 'Synthesis',
          },
          {
            __typename: 'Item',
            name: 'Hidden Power',
          },
          {
            __typename: 'Item',
            name: 'Sunny Day',
          },
          {
            __typename: 'Item',
            name: 'Rock Smash',
          },
          {
            __typename: 'Item',
            name: 'Facade',
          },
          {
            __typename: 'Item',
            name: 'Nature Power',
          },
          {
            __typename: 'Item',
            name: 'Ingrain',
          },
          {
            __typename: 'Item',
            name: 'Knock Off',
          },
          {
            __typename: 'Item',
            name: 'Secret Power',
          },
          {
            __typename: 'Item',
            name: 'Grass Whistle',
          },
          {
            __typename: 'Item',
            name: 'Bullet Seed',
          },
          {
            __typename: 'Item',
            name: 'Magical Leaf',
          },
          {
            __typename: 'Item',
            name: 'Natural Gift',
          },
          {
            __typename: 'Item',
            name: 'Worry Seed',
          },
          {
            __typename: 'Item',
            name: 'Seed Bomb',
          },
          {
            __typename: 'Item',
            name: 'Energy Ball',
          },
          {
            __typename: 'Item',
            name: 'Leaf Storm',
          },
          {
            __typename: 'Item',
            name: 'Power Whip',
          },
          {
            __typename: 'Item',
            name: 'Captivate',
          },
          {
            __typename: 'Item',
            name: 'Grass Knot',
          },
          {
            __typename: 'Item',
            name: 'Venoshock',
          },
          {
            __typename: 'Item',
            name: 'Round',
          },
          {
            __typename: 'Item',
            name: 'Echoed Voice',
          },
          {
            __typename: 'Item',
            name: 'Grass Pledge',
          },
          {
            __typename: 'Item',
            name: 'Work Up',
          },
          {
            __typename: 'Item',
            name: 'Grassy Terrain',
          },
          {
            __typename: 'Item',
            name: 'Confide',
          },
        ],
        stats: [
          {
            __typename: 'Stat',
            name: 'HP',
            baseStat: 45,
          },
          {
            __typename: 'Stat',
            name: 'Attack',
            baseStat: 49,
          },
          {
            __typename: 'Stat',
            name: 'Defense',
            baseStat: 49,
          },
          {
            __typename: 'Stat',
            name: 'Special Attack',
            baseStat: 65,
          },
          {
            __typename: 'Stat',
            name: 'Special Defense',
            baseStat: 65,
          },
          {
            __typename: 'Stat',
            name: 'Speed',
            baseStat: 45,
          },
        ],
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
  },
};
