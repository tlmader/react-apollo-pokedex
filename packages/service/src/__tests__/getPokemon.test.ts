import {
  createTestClientWithServer,
  GetPokemonDocument,
  mockedGetPokemonBulbasaurResponse,
} from '../__fixtures__';

// Mock the dataSource's underlying fetch methods
const mockedGet = jest
  .fn()
  .mockResolvedValue(mockedGetPokemonBulbasaurResponse);

jest.mock('apollo-datasource-rest', () => {
  class MockedRESTDataSource {
    baseUrl = '';
    get = mockedGet;
  }
  return {
    RESTDataSource: MockedRESTDataSource,
  };
});

describe('getPokemon', () => {
  it('fetches a Pokemon', async () => {
    // Use the test server to create a query function
    const { query } = createTestClientWithServer();

    // Run query against the server and snapshot the output
    const res = await query({
      query: GetPokemonDocument,
      variables: { id: 'bulbasaur' },
    });
    // Make sure REST resource is called with the correct URI
    expect(mockedGet).toHaveBeenCalledWith('pokemon/bulbasaur');
    expect(res).toMatchSnapshot();
  });
});
