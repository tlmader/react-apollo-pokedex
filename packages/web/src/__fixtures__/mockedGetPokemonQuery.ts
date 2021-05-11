import { MockedResponse } from '@apollo/client/testing';
import { GetPokemonDocument, GetPokemonQuery } from '../operations';

export const mockedGetPokemonQuery: MockedResponse<GetPokemonQuery> = {
  request: {
    query: GetPokemonDocument,
    variables: {
      id: 'bulbasaur',
    },
  },
  result: {
    data: {
      getPokemon: {
        __typename: 'PokemonNode',
        id: 'bulbasaur',
        pokedexNumber: 1,
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
            id: 'overgrow',
            name: 'Overgrow',
          },
          {
            __typename: 'Item',
            id: 'chlorophyll',
            name: 'Chlorophyll',
          },
        ],
        heldItems: [],
        moves: [
          {
            __typename: 'Item',
            id: 'razor-wind',
            name: 'Razor Wind',
          },
          {
            __typename: 'Item',
            id: 'swords-dance',
            name: 'Swords Dance',
          },
          {
            __typename: 'Item',
            id: 'cut',
            name: 'Cut',
          },
          {
            __typename: 'Item',
            id: 'bind',
            name: 'Bind',
          },
          {
            __typename: 'Item',
            id: 'vine-whip',
            name: 'Vine Whip',
          },
          {
            __typename: 'Item',
            id: 'headbutt',
            name: 'Headbutt',
          },
          {
            __typename: 'Item',
            id: 'tackle',
            name: 'Tackle',
          },
          {
            __typename: 'Item',
            id: 'body-slam',
            name: 'Body Slam',
          },
          {
            __typename: 'Item',
            id: 'take-down',
            name: 'Take Down',
          },
          {
            __typename: 'Item',
            id: 'double-edge',
            name: 'Double Edge',
          },
          {
            __typename: 'Item',
            id: 'growl',
            name: 'Growl',
          },
          {
            __typename: 'Item',
            id: 'strength',
            name: 'Strength',
          },
          {
            __typename: 'Item',
            id: 'mega-drain',
            name: 'Mega Drain',
          },
          {
            __typename: 'Item',
            id: 'leech-seed',
            name: 'Leech Seed',
          },
          {
            __typename: 'Item',
            id: 'growth',
            name: 'Growth',
          },
          {
            __typename: 'Item',
            id: 'razor-leaf',
            name: 'Razor Leaf',
          },
          {
            __typename: 'Item',
            id: 'solar-beam',
            name: 'Solar Beam',
          },
          {
            __typename: 'Item',
            id: 'poison-powder',
            name: 'Poison Powder',
          },
          {
            __typename: 'Item',
            id: 'sleep-powder',
            name: 'Sleep Powder',
          },
          {
            __typename: 'Item',
            id: 'petal-dance',
            name: 'Petal Dance',
          },
          {
            __typename: 'Item',
            id: 'string-shot',
            name: 'String Shot',
          },
          {
            __typename: 'Item',
            id: 'toxic',
            name: 'Toxic',
          },
          {
            __typename: 'Item',
            id: 'rage',
            name: 'Rage',
          },
          {
            __typename: 'Item',
            id: 'mimic',
            name: 'Mimic',
          },
          {
            __typename: 'Item',
            id: 'double-team',
            name: 'Double Team',
          },
          {
            __typename: 'Item',
            id: 'defense-curl',
            name: 'Defense Curl',
          },
          {
            __typename: 'Item',
            id: 'light-screen',
            name: 'Light Screen',
          },
          {
            __typename: 'Item',
            id: 'reflect',
            name: 'Reflect',
          },
          {
            __typename: 'Item',
            id: 'bide',
            name: 'Bide',
          },
          {
            __typename: 'Item',
            id: 'sludge',
            name: 'Sludge',
          },
          {
            __typename: 'Item',
            id: 'skull-bash',
            name: 'Skull Bash',
          },
          {
            __typename: 'Item',
            id: 'amnesia',
            name: 'Amnesia',
          },
          {
            __typename: 'Item',
            id: 'flash',
            name: 'Flash',
          },
          {
            __typename: 'Item',
            id: 'rest',
            name: 'Rest',
          },
          {
            __typename: 'Item',
            id: 'substitute',
            name: 'Substitute',
          },
          {
            __typename: 'Item',
            id: 'snore',
            name: 'Snore',
          },
          {
            __typename: 'Item',
            id: 'curse',
            name: 'Curse',
          },
          {
            __typename: 'Item',
            id: 'protect',
            name: 'Protect',
          },
          {
            __typename: 'Item',
            id: 'sludge-bomb',
            name: 'Sludge Bomb',
          },
          {
            __typename: 'Item',
            id: 'mud-slap',
            name: 'Mud Slap',
          },
          {
            __typename: 'Item',
            id: 'giga-drain',
            name: 'Giga Drain',
          },
          {
            __typename: 'Item',
            id: 'endure',
            name: 'Endure',
          },
          {
            __typename: 'Item',
            id: 'charm',
            name: 'Charm',
          },
          {
            __typename: 'Item',
            id: 'swagger',
            name: 'Swagger',
          },
          {
            __typename: 'Item',
            id: 'fury-cutter',
            name: 'Fury Cutter',
          },
          {
            __typename: 'Item',
            id: 'attract',
            name: 'Attract',
          },
          {
            __typename: 'Item',
            id: 'sleep-talk',
            name: 'Sleep Talk',
          },
          {
            __typename: 'Item',
            id: 'return',
            name: 'Return',
          },
          {
            __typename: 'Item',
            id: 'frustration',
            name: 'Frustration',
          },
          {
            __typename: 'Item',
            id: 'safeguard',
            name: 'Safeguard',
          },
          {
            __typename: 'Item',
            id: 'sweet-scent',
            name: 'Sweet Scent',
          },
          {
            __typename: 'Item',
            id: 'synthesis',
            name: 'Synthesis',
          },
          {
            __typename: 'Item',
            id: 'hidden-power',
            name: 'Hidden Power',
          },
          {
            __typename: 'Item',
            id: 'sunny-day',
            name: 'Sunny Day',
          },
          {
            __typename: 'Item',
            id: 'rock-smash',
            name: 'Rock Smash',
          },
          {
            __typename: 'Item',
            id: 'facade',
            name: 'Facade',
          },
          {
            __typename: 'Item',
            id: 'nature-power',
            name: 'Nature Power',
          },
          {
            __typename: 'Item',
            id: 'ingrain',
            name: 'Ingrain',
          },
          {
            __typename: 'Item',
            id: 'knock-off',
            name: 'Knock Off',
          },
          {
            __typename: 'Item',
            id: 'secret-power',
            name: 'Secret Power',
          },
          {
            __typename: 'Item',
            id: 'grass-whistle',
            name: 'Grass Whistle',
          },
          {
            __typename: 'Item',
            id: 'bullet-seed',
            name: 'Bullet Seed',
          },
          {
            __typename: 'Item',
            id: 'magical-leaf',
            name: 'Magical Leaf',
          },
          {
            __typename: 'Item',
            id: 'natural-gift',
            name: 'Natural Gift',
          },
          {
            __typename: 'Item',
            id: 'worry-seed',
            name: 'Worry Seed',
          },
          {
            __typename: 'Item',
            id: 'seed-bomb',
            name: 'Seed Bomb',
          },
          {
            __typename: 'Item',
            id: 'energy-ball',
            name: 'Energy Ball',
          },
          {
            __typename: 'Item',
            id: 'leaf-storm',
            name: 'Leaf Storm',
          },
          {
            __typename: 'Item',
            id: 'power-whip',
            name: 'Power Whip',
          },
          {
            __typename: 'Item',
            id: 'captivate',
            name: 'Captivate',
          },
          {
            __typename: 'Item',
            id: 'grass-knot',
            name: 'Grass Knot',
          },
          {
            __typename: 'Item',
            id: 'venoshock',
            name: 'Venoshock',
          },
          {
            __typename: 'Item',
            id: 'round',
            name: 'Round',
          },
          {
            __typename: 'Item',
            id: 'echoed-voice',
            name: 'Echoed Voice',
          },
          {
            __typename: 'Item',
            id: 'grass-pledge',
            name: 'Grass Pledge',
          },
          {
            __typename: 'Item',
            id: 'work-up',
            name: 'Work Up',
          },
          {
            __typename: 'Item',
            id: 'grassy-terrain',
            name: 'Grassy Terrain',
          },
          {
            __typename: 'Item',
            id: 'confide',
            name: 'Confide',
          },
        ],
        species: {
          __typename: 'PokemonSpecies',
          id: 'bulbasaur',
          growthRate: {
            __typename: 'PokemonGrowthRate',
            id: 'medium-slow',
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
            id: 'hp',
            name: 'HP',
            baseStat: 45,
          },
          {
            __typename: 'Stat',
            id: 'attack',
            name: 'Attack',
            baseStat: 49,
          },
          {
            __typename: 'Stat',
            id: 'defense',
            name: 'Defense',
            baseStat: 49,
          },
          {
            __typename: 'Stat',
            id: 'special-attack',
            name: 'Special Attack',
            baseStat: 65,
          },
          {
            __typename: 'Stat',
            id: 'special-defense',
            name: 'Special Defense',
            baseStat: 65,
          },
          {
            __typename: 'Stat',
            id: 'speed',
            name: 'Speed',
            baseStat: 45,
          },
        ],
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
  },
};
