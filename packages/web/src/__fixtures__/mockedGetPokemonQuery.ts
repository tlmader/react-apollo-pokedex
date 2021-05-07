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
        species: {
          __typename: 'PokemonSpecies',
          id: '1',
          growthRate: {
            __typename: 'PokemonGrowthRate',
            id: '4',
            levels: [
              {
                __typename: 'GrowthRateExperienceLevel',
                experience: 0,
                level: 1,
              },
              {
                __typename: 'GrowthRateExperienceLevel',
                experience: 9,
                level: 2,
              },
              {
                __typename: 'GrowthRateExperienceLevel',
                experience: 57,
                level: 3,
              },
              {
                __typename: 'GrowthRateExperienceLevel',
                experience: 96,
                level: 4,
              },
              {
                __typename: 'GrowthRateExperienceLevel',
                experience: 135,
                level: 5,
              },
              {
                __typename: 'GrowthRateExperienceLevel',
                experience: 179,
                level: 6,
              },
              {
                __typename: 'GrowthRateExperienceLevel',
                experience: 236,
                level: 7,
              },
              {
                __typename: 'GrowthRateExperienceLevel',
                experience: 314,
                level: 8,
              },
              {
                __typename: 'GrowthRateExperienceLevel',
                experience: 419,
                level: 9,
              },
              {
                __typename: 'GrowthRateExperienceLevel',
                experience: 560,
                level: 10,
              },
              {
                __typename: 'GrowthRateExperienceLevel',
                experience: 742,
                level: 11,
              },
              {
                __typename: 'GrowthRateExperienceLevel',
                experience: 973,
                level: 12,
              },
              {
                __typename: 'GrowthRateExperienceLevel',
                experience: 1261,
                level: 13,
              },
              {
                __typename: 'GrowthRateExperienceLevel',
                experience: 1612,
                level: 14,
              },
              {
                __typename: 'GrowthRateExperienceLevel',
                experience: 2035,
                level: 15,
              },
              {
                __typename: 'GrowthRateExperienceLevel',
                experience: 2535,
                level: 16,
              },
              {
                __typename: 'GrowthRateExperienceLevel',
                experience: 3120,
                level: 17,
              },
              {
                __typename: 'GrowthRateExperienceLevel',
                experience: 3798,
                level: 18,
              },
              {
                __typename: 'GrowthRateExperienceLevel',
                experience: 4575,
                level: 19,
              },
              {
                __typename: 'GrowthRateExperienceLevel',
                experience: 5460,
                level: 20,
              },
              {
                __typename: 'GrowthRateExperienceLevel',
                experience: 6458,
                level: 21,
              },
              {
                __typename: 'GrowthRateExperienceLevel',
                experience: 7577,
                level: 22,
              },
              {
                __typename: 'GrowthRateExperienceLevel',
                experience: 8825,
                level: 23,
              },
              {
                __typename: 'GrowthRateExperienceLevel',
                experience: 10208,
                level: 24,
              },
              {
                __typename: 'GrowthRateExperienceLevel',
                experience: 11735,
                level: 25,
              },
              {
                __typename: 'GrowthRateExperienceLevel',
                experience: 13411,
                level: 26,
              },
              {
                __typename: 'GrowthRateExperienceLevel',
                experience: 15244,
                level: 27,
              },
              {
                __typename: 'GrowthRateExperienceLevel',
                experience: 17242,
                level: 28,
              },
              {
                __typename: 'GrowthRateExperienceLevel',
                experience: 19411,
                level: 29,
              },
              {
                __typename: 'GrowthRateExperienceLevel',
                experience: 21760,
                level: 30,
              },
              {
                __typename: 'GrowthRateExperienceLevel',
                experience: 24294,
                level: 31,
              },
              {
                __typename: 'GrowthRateExperienceLevel',
                experience: 27021,
                level: 32,
              },
              {
                __typename: 'GrowthRateExperienceLevel',
                experience: 29949,
                level: 33,
              },
              {
                __typename: 'GrowthRateExperienceLevel',
                experience: 33084,
                level: 34,
              },
              {
                __typename: 'GrowthRateExperienceLevel',
                experience: 36435,
                level: 35,
              },
              {
                __typename: 'GrowthRateExperienceLevel',
                experience: 40007,
                level: 36,
              },
              {
                __typename: 'GrowthRateExperienceLevel',
                experience: 43808,
                level: 37,
              },
              {
                __typename: 'GrowthRateExperienceLevel',
                experience: 47846,
                level: 38,
              },
              {
                __typename: 'GrowthRateExperienceLevel',
                experience: 52127,
                level: 39,
              },
              {
                __typename: 'GrowthRateExperienceLevel',
                experience: 56660,
                level: 40,
              },
              {
                __typename: 'GrowthRateExperienceLevel',
                experience: 61450,
                level: 41,
              },
              {
                __typename: 'GrowthRateExperienceLevel',
                experience: 66505,
                level: 42,
              },
              {
                __typename: 'GrowthRateExperienceLevel',
                experience: 71833,
                level: 43,
              },
              {
                __typename: 'GrowthRateExperienceLevel',
                experience: 77440,
                level: 44,
              },
              {
                __typename: 'GrowthRateExperienceLevel',
                experience: 83335,
                level: 45,
              },
              {
                __typename: 'GrowthRateExperienceLevel',
                experience: 89523,
                level: 46,
              },
              {
                __typename: 'GrowthRateExperienceLevel',
                experience: 96012,
                level: 47,
              },
              {
                __typename: 'GrowthRateExperienceLevel',
                experience: 102810,
                level: 48,
              },
              {
                __typename: 'GrowthRateExperienceLevel',
                experience: 109923,
                level: 49,
              },
              {
                __typename: 'GrowthRateExperienceLevel',
                experience: 117360,
                level: 50,
              },
              {
                __typename: 'GrowthRateExperienceLevel',
                experience: 125126,
                level: 51,
              },
              {
                __typename: 'GrowthRateExperienceLevel',
                experience: 133229,
                level: 52,
              },
              {
                __typename: 'GrowthRateExperienceLevel',
                experience: 141677,
                level: 53,
              },
              {
                __typename: 'GrowthRateExperienceLevel',
                experience: 150476,
                level: 54,
              },
              {
                __typename: 'GrowthRateExperienceLevel',
                experience: 159635,
                level: 55,
              },
              {
                __typename: 'GrowthRateExperienceLevel',
                experience: 169159,
                level: 56,
              },
              {
                __typename: 'GrowthRateExperienceLevel',
                experience: 179056,
                level: 57,
              },
              {
                __typename: 'GrowthRateExperienceLevel',
                experience: 189334,
                level: 58,
              },
              {
                __typename: 'GrowthRateExperienceLevel',
                experience: 199999,
                level: 59,
              },
              {
                __typename: 'GrowthRateExperienceLevel',
                experience: 211060,
                level: 60,
              },
              {
                __typename: 'GrowthRateExperienceLevel',
                experience: 222522,
                level: 61,
              },
              {
                __typename: 'GrowthRateExperienceLevel',
                experience: 234393,
                level: 62,
              },
              {
                __typename: 'GrowthRateExperienceLevel',
                experience: 246681,
                level: 63,
              },
              {
                __typename: 'GrowthRateExperienceLevel',
                experience: 259392,
                level: 64,
              },
              {
                __typename: 'GrowthRateExperienceLevel',
                experience: 272535,
                level: 65,
              },
              {
                __typename: 'GrowthRateExperienceLevel',
                experience: 286115,
                level: 66,
              },
              {
                __typename: 'GrowthRateExperienceLevel',
                experience: 300140,
                level: 67,
              },
              {
                __typename: 'GrowthRateExperienceLevel',
                experience: 314618,
                level: 68,
              },
              {
                __typename: 'GrowthRateExperienceLevel',
                experience: 329555,
                level: 69,
              },
              {
                __typename: 'GrowthRateExperienceLevel',
                experience: 344960,
                level: 70,
              },
              {
                __typename: 'GrowthRateExperienceLevel',
                experience: 360838,
                level: 71,
              },
              {
                __typename: 'GrowthRateExperienceLevel',
                experience: 377197,
                level: 72,
              },
              {
                __typename: 'GrowthRateExperienceLevel',
                experience: 394045,
                level: 73,
              },
              {
                __typename: 'GrowthRateExperienceLevel',
                experience: 411388,
                level: 74,
              },
              {
                __typename: 'GrowthRateExperienceLevel',
                experience: 429235,
                level: 75,
              },
              {
                __typename: 'GrowthRateExperienceLevel',
                experience: 447591,
                level: 76,
              },
              {
                __typename: 'GrowthRateExperienceLevel',
                experience: 466464,
                level: 77,
              },
              {
                __typename: 'GrowthRateExperienceLevel',
                experience: 485862,
                level: 78,
              },
              {
                __typename: 'GrowthRateExperienceLevel',
                experience: 505791,
                level: 79,
              },
              {
                __typename: 'GrowthRateExperienceLevel',
                experience: 526260,
                level: 80,
              },
              {
                __typename: 'GrowthRateExperienceLevel',
                experience: 547274,
                level: 81,
              },
              {
                __typename: 'GrowthRateExperienceLevel',
                experience: 568841,
                level: 82,
              },
              {
                __typename: 'GrowthRateExperienceLevel',
                experience: 590969,
                level: 83,
              },
              {
                __typename: 'GrowthRateExperienceLevel',
                experience: 613664,
                level: 84,
              },
              {
                __typename: 'GrowthRateExperienceLevel',
                experience: 636935,
                level: 85,
              },
              {
                __typename: 'GrowthRateExperienceLevel',
                experience: 660787,
                level: 86,
              },
              {
                __typename: 'GrowthRateExperienceLevel',
                experience: 685228,
                level: 87,
              },
              {
                __typename: 'GrowthRateExperienceLevel',
                experience: 710266,
                level: 88,
              },
              {
                __typename: 'GrowthRateExperienceLevel',
                experience: 735907,
                level: 89,
              },
              {
                __typename: 'GrowthRateExperienceLevel',
                experience: 762160,
                level: 90,
              },
              {
                __typename: 'GrowthRateExperienceLevel',
                experience: 789030,
                level: 91,
              },
              {
                __typename: 'GrowthRateExperienceLevel',
                experience: 816525,
                level: 92,
              },
              {
                __typename: 'GrowthRateExperienceLevel',
                experience: 844653,
                level: 93,
              },
              {
                __typename: 'GrowthRateExperienceLevel',
                experience: 873420,
                level: 94,
              },
              {
                __typename: 'GrowthRateExperienceLevel',
                experience: 902835,
                level: 95,
              },
              {
                __typename: 'GrowthRateExperienceLevel',
                experience: 932903,
                level: 96,
              },
              {
                __typename: 'GrowthRateExperienceLevel',
                experience: 963632,
                level: 97,
              },
              {
                __typename: 'GrowthRateExperienceLevel',
                experience: 995030,
                level: 98,
              },
              {
                __typename: 'GrowthRateExperienceLevel',
                experience: 1027103,
                level: 99,
              },
              {
                __typename: 'GrowthRateExperienceLevel',
                experience: 1059860,
                level: 100,
              },
            ],
          },
        },
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
