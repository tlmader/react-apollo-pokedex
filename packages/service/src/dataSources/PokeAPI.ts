import { RESTDataSource } from 'apollo-datasource-rest';
import { NamedAPIResourceList, Pokemon, Species, Type } from '../types';

export class PokeAPI extends RESTDataSource {
  constructor() {
    // Always call super()
    super();
    // Sets the base URL for the REST API
    this.baseURL = 'https://pokeapi.co/api/v2/';
  }

  /**
   * https://pokeapi.co/docs/v2#pokemon
   */
  async getPokemon(name: string): Promise<Pokemon> {
    // Send a GET request to the specified endpoint
    return this.get(`pokemon/${name}`);
  }

  /**
   * https://pokeapi.co/docs/v2#resource-listspagination-section
   *
   * @param limit - API returns 20 resources by default
   * @param offset - Used to move to the next page
   */
  async getPokemonResourceList(
    limit?: number | null,
    offset?: number | null,
  ): Promise<NamedAPIResourceList> {
    return this.get(`pokemon`, {
      // Do not include if null
      limit: limit === null ? undefined : limit,
      // Do not include if 0 or null
      offset: offset || undefined,
    });
  }

  /**
   * https://pokeapi.co/docs/v2#pokemon-species
   */
  async getSpecies(species: string): Promise<Species> {
    return this.get(`pokemon-species/${species}`);
  }

  /**
   * https://pokeapi.co/docs/v2#types
   */
  async getType(type: string): Promise<Type> {
    return this.get(`type/${type}`);
  }
}
