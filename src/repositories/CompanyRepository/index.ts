import { ApplicationRepository } from "..";
import { CreateCompanyObject, CompanyResponse, UpdateCompanyObject } from "../helper";

export class CompanyRepository extends ApplicationRepository {
  constructor() {
    super();
    this.getCompanies = this.getCompanies.bind(this);
    this.getCompanyById = this.getCompanyById.bind(this);
    this.createCompany = this.createCompany.bind(this);
    this.updateCompany = this.updateCompany.bind(this);
    this.deleteCompany = this.deleteCompany.bind(this);
  }

  public async getCompanies() : Promise<CompanyResponse[] | Response> {
    const companies = await this.httpService.get('/admin/companies');
    if (companies.status === 200) return companies.data;

    const isAuthorize = await this.authorizeToken();
    if (isAuthorize) return this.getCompanies();

    return {} as CompanyResponse[];
  }

  public async getCompanyById(id: string) : Promise<CompanyResponse | Response> {
    const company = await this.httpService.get(`/admin/companies/${id}`);
    if (company.status === 200) return company.data;

    const isAuthorize = await this.authorizeToken();
    if (isAuthorize) return this.getCompanyById(id);

    return {} as CompanyResponse;
  }

  public async createCompany(createCompanyObject: CreateCompanyObject) : Promise<CompanyResponse | Response> {
    const company = await this.httpService.post('/admin/companies', { createCompanyObject });
    if (company.status === 201) return company.data;

    const isAuthorize = await this.authorizeToken();
    if (isAuthorize) return this.createCompany(createCompanyObject);

    return {} as CompanyResponse;
  }

  public async updateCompany(id: string, updateCompanyObject: UpdateCompanyObject) : Promise<CompanyResponse | Response> {
    const company = await this.httpService.put(`/admin/companies/${id}`, updateCompanyObject);
    if (company.status === 201) return company.data;

    const isAuthorize = await this.authorizeToken();
    if (isAuthorize) return this.updateCompany(id, updateCompanyObject);

    return {} as CompanyResponse;
  }

  public async deleteCompany(id: string) : Promise<Response> {
    const Company = await this.httpService.delete(`/admin/companies/${id}`);
    if (Company.status === 200) return Company.data;

    const isAuthorize = await this.authorizeToken();
    if (isAuthorize) return this.deleteCompany(id);

    return {} as Response;
  }
}
