import { RESTDataSource } from 'apollo-datasource-rest';
import { Pokemon } from '../types';

export class PokeAPI extends RESTDataSource {
  constructor() {
    // Always call super()
    super();
    // Sets the base URL for the REST API
    this.baseURL = 'https://pokeapi.co/api/v2/';
  }

  async getPokemon(
    name: string,
    limit?: number,
    offset?: number,
  ): Promise<Pokemon> {
    // Send a GET request to the specified endpoint
    return this.get(`pokemon/${name}`, {
      limit,
      offset,
    });
  }
}
