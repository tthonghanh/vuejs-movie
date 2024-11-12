import { ApplicationRepository } from "..";
import { CreateCountryObject, CountryResponse, UpdateCountryObject } from "../helper";

export class CountryRepository extends ApplicationRepository {
  constructor() {
    super();
    this.getCountries = this.getCountries.bind(this);
    this.getCountryById = this.getCountryById.bind(this);
    this.createCountry = this.createCountry.bind(this);
    this.updateCountry = this.updateCountry.bind(this);
    this.deleteCountry = this.deleteCountry.bind(this);
  }

  public async getCountries() : Promise<CountryResponse[] | Response> {
    const Countries = await this.httpService.get('/admin/countries');
    if (Countries.status === 200) return Countries.data;

    const isAuthorize = await this.authorizeToken();
    if (isAuthorize) return this.getCountries();

    return {} as CountryResponse[];
  }

  public async getCountryById(id: string) : Promise<CountryResponse | Response> {
    const Country = await this.httpService.get(`/admin/countries/${id}`);
    if (Country.status === 200) return Country.data;

    const isAuthorize = await this.authorizeToken();
    if (isAuthorize) return this.getCountryById(id);

    return {} as CountryResponse;
  }

  public async createCountry(createCountryObject: CreateCountryObject) : Promise<CountryResponse | Response> {
    const Country = await this.httpService.post('/admin/countries', { createCountryObject });
    if (Country.status === 201) return Country.data;

    const isAuthorize = await this.authorizeToken();
    if (isAuthorize) return this.createCountry(createCountryObject);

    return {} as CountryResponse;
  }

  public async updateCountry(id: string, updateCountryObject: UpdateCountryObject) : Promise<CountryResponse | Response> {
    const Country = await this.httpService.put(`/admin/countries/${id}`, updateCountryObject);
    if (Country.status === 201) return Country.data;

    const isAuthorize = await this.authorizeToken();
    if (isAuthorize) return this.updateCountry(id, updateCountryObject);

    return {} as CountryResponse;
  }

  public async deleteCountry(id: string) : Promise<Response> {
    const Country = await this.httpService.delete(`/admin/countries/${id}`);
    if (Country.status === 200) return Country.data;

    const isAuthorize = await this.authorizeToken();
    if (isAuthorize) return this.deleteCountry(id);

    return {} as Response;
  }
}
