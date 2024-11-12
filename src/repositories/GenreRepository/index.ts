import { ApplicationRepository } from "..";
import { CreateGenreObject, GenreResponse, UpdateGenreObject } from "../helper";

export class GenreRepository extends ApplicationRepository {
  /**
   *
   */
  constructor() {
    super();
    this.getGenres = this.getGenres.bind(this);
    this.getGenreById = this.getGenreById.bind(this);
    this.createGenre = this.createGenre.bind(this);
    this.updateGenre = this.updateGenre.bind(this);
    this.deleteGenre = this.deleteGenre.bind(this);
  }

  public async getGenres() : Promise<GenreResponse[] | Response> {
    const genres = await this.httpService.get('/admin/genres');
    if (genres.status === 200) return genres.data;

    const isAuthorize = await this.authorizeToken();
    if (isAuthorize) return this.getGenres();

    return {} as GenreResponse[];
  }

  public async getGenreById(id: string) : Promise<GenreResponse | Response> {
    const genre = await this.httpService.get(`/admin/genres/${id}`);
    if (genre.status === 200) return genre.data;

    const isAuthorize = await this.authorizeToken();
    if (isAuthorize) return this.getGenreById(id);

    return {} as GenreResponse;
  }

  public async createGenre(createGenreObject: CreateGenreObject) : Promise<GenreResponse | Response> {
    const genre = await this.httpService.post('/admin/genres', { createGenreObject });
    if (genre.status === 201) return genre.data;

    const isAuthorize = await this.authorizeToken();
    if (isAuthorize) return this.createGenre(createGenreObject);

    return {} as GenreResponse;
  }

  public async updateGenre(id: string, updateGenreObject: UpdateGenreObject) : Promise<GenreResponse | Response> {
    const genre = await this.httpService.put(`/admin/genres/${id}`, updateGenreObject);
    if (genre.status === 201) return genre.data;

    const isAuthorize = await this.authorizeToken();
    if (isAuthorize) return this.updateGenre(id, updateGenreObject);

    return {} as GenreResponse;
  }

  public async deleteGenre(id: string) : Promise<Response> {
    const genre = await this.httpService.delete(`/admin/genres/${id}`);
    if (genre.status === 200) return genre.data;

    const isAuthorize = await this.authorizeToken();
    if (isAuthorize) return this.deleteGenre(id);

    return {} as Response;
  }
}