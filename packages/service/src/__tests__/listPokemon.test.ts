import {
  createTestClientWithServer,
  ListPokemonDocument,
  mockedGetPokemonBulbasaurResponse,
  mockedGetPokemonIvysaurResponse,
} from '../__fixtures__';
import { listPokemonResponse } from '../__fixtures__/mockedListPokemonResponse';

// Mock the dataSource's underlying fetch methods
const mockedGet = jest.fn((path) => {
  if (path === 'pokemon') {
    return listPokemonResponse;
  }
  if (path === 'pokemon/bulbasaur') {
    return mockedGetPokemonBulbasaurResponse;
  }
  if (path === 'pokemon/ivysaur') {
    return mockedGetPokemonIvysaurResponse;
  }
});

jest.mock('apollo-datasource-rest', () => {
  class MockedRESTDataSource {
    baseUrl = '';
    get = mockedGet;
  }
  return {
    RESTDataSource: MockedRESTDataSource,
  };
});

describe('listPokemon', () => {
  it('fetches a list of Pokemon', async () => {
    const { query } = createTestClientWithServer();

    const res = await query({
      query: ListPokemonDocument,
      variables: {
        sort: {
          order: 'asc',
        },
        first: 2,
      },
    });

    // Initial NamedAPIResources
    expect(mockedGet).toHaveBeenNthCalledWith(1, 'pokemon', {
      limit: 2,
      offset: undefined,
    });
    // Complete Pokemon data for each item
    expect(mockedGet).toHaveBeenNthCalledWith(2, 'pokemon/bulbasaur');
    expect(mockedGet).toHaveBeenNthCalledWith(3, 'pokemon/ivysaur');

    expect(res).toMatchSnapshot();
  });
});
