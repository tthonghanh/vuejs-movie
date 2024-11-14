import { ApplicationRepository } from "..";
import { CreateCastObject, CastResponse, UpdateCastObject } from "../helper";

export class CastRepository extends ApplicationRepository {
  constructor() {
    super();
    this.getCasts = this.getCasts.bind(this);
    this.getCastById = this.getCastById.bind(this);
    this.createCast = this.createCast.bind(this);
    this.updateCast = this.updateCast.bind(this);
    this.deleteCast = this.deleteCast.bind(this);
  }

  public async getCasts() : Promise<CastResponse[] | Response> {
    const casts = await this.httpService.get('/admin/casts');
    if (casts.status === 200) return casts.data;

    const isAuthorize = await this.authorizeToken();
    if (isAuthorize) return this.getCasts();

    return {} as CastResponse[];
  }

  public async getCastById(id: string) : Promise<CastResponse | Response> {
    const cast = await this.httpService.get(`/admin/casts/${id}`);
    if (cast.status === 200) return cast.data;

    const isAuthorize = await this.authorizeToken();
    if (isAuthorize) return this.getCastById(id);

    return {} as CastResponse;
  }

  public async createCast(createCastObject: CreateCastObject) : Promise<CastResponse | Response> {
    const cast = await this.httpService.post('/admin/casts', { createCastObject });
    if (cast.status === 201) return cast.data;

    const isAuthorize = await this.authorizeToken();
    if (isAuthorize) return this.createCast(createCastObject);

    return {} as CastResponse;
  }

  public async updateCast(id: string, updateCastObject: UpdateCastObject) : Promise<CastResponse | Response> {
    const cast = await this.httpService.put(`/admin/casts/${id}`, updateCastObject);
    if (cast.status === 201) return cast.data;

    const isAuthorize = await this.authorizeToken();
    if (isAuthorize) return this.updateCast(id, updateCastObject);

    return {} as CastResponse;
  }

  public async deleteCast(id: string) : Promise<Response> {
    const cast = await this.httpService.delete(`/admin/casts/${id}`);
    if (cast.status === 200) return cast.data;

    const isAuthorize = await this.authorizeToken();
    if (isAuthorize) return this.deleteCast(id);

    return {} as Response;
  }
}
