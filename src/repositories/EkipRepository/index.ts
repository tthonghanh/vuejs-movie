import { ApplicationRepository } from "..";
import { CreateEkipObject, EkipResponse } from "../helper";

export class EkipRepository extends ApplicationRepository {
  /**
   *
   */
  constructor() {
    super();
    this.getEkips = this.getEkips.bind(this);
    this.getEkipById = this.getEkips.bind(this);
    this.createEkip = this.createEkip.bind(this);
  }

  public async getEkips() : Promise<EkipResponse | Response> {
    const ekips = await this.httpService.get('/admin/ekips');
    if (ekips.status === 200) return ekips.data;

    const isAuthorize = await this.authorizeToken();
    if (isAuthorize) return this.getEkips();

    return {} as EkipResponse;
  }

  public async getEkipById(id: string) : Promise<EkipResponse | Response> {
    const ekip = await this.httpService.get(`/admin/ekips/${id}`);
    if (ekip.status === 200) return ekip.data;

    const isAuthorize = await this.authorizeToken();
    if (isAuthorize) return this.getEkipById(id);

    return {} as EkipResponse;
  }

  public async createEkip(createEkipObject: CreateEkipObject) : Promise<EkipResponse | Response> {
    const ekip = await this.httpService.post('/admin/ekips', { createEkipObject });
    if (ekip.status === 201) return ekip.data;

    const isAuthorize = await this.authorizeToken();
    if (isAuthorize) return this.createEkip(createEkipObject);

    return {} as EkipResponse;
  }
}