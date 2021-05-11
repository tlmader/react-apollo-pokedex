import { RESTDataSource } from 'apollo-datasource-rest';
import {
  GrowthRate,
  NamedAPIResourceList,
  Pokemon,
  Species,
  Type,
} from '../types';

export class PokeAPI extends RESTDataSource {
  constructor() {
    // Always call super()
    super();
    // Sets the base URL for the REST API
    this.baseURL = 'https://pokeapi.co/api/v2/';
  }

  /**
   * We are using name as id across the application because it is included
   * in NamedAPIResource.
   * https://pokeapi.co/docs/v2#pokemon
   */
  async getPokemon(id: string): Promise<Pokemon> {
    // Send a GET request to the specified endpoint
    return this.get(`pokemon/${id}`);
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
  async getSpecies(id: string): Promise<Species> {
    return this.get(`pokemon-species/${id}`);
  }

  /**
   * https://pokeapi.co/docs/v2#types
   */
  async getType(id: string): Promise<Type> {
    return this.get(`type/${id}`);
  }

  /**
   * https://pokeapi.co/docs/v2#types
   */
  async getGrowthRate(id: string): Promise<GrowthRate> {
    return this.get(`growth-rate/${id}`);
  }
}
