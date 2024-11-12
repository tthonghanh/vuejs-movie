import { ApplicationRepository } from "..";
import { CreateMovieObject, Response, MovieDetailResponse, MovieResponse, UpdateMovieObject } from "../helper";

export class MovieRepository extends ApplicationRepository {
  /**
   *
   */
  constructor() {
    super();
    this.getMovies = this.getMovies.bind(this);
    this.getMovieById = this.getMovieById.bind(this);
    this.createMovie = this.createMovie.bind(this);
    this.updateMovie = this.updateMovie.bind(this);
    this.deleteMovie = this.deleteMovie.bind(this);
  }

  public async getMovies(): Promise<MovieResponse[] | Response> {
    const movies = await this.httpService.get("/admin/movies");
    if (movies.status === 200) return movies.data;

    const isAuthorize = await this.authorizeToken();
    if (isAuthorize) return this.getMovies();

    return movies.data;
  }

  public async getMovieById(id: string)  : Promise<MovieDetailResponse>{
    const movie = await this.httpService.get(`/admin/movies/${id}`);
    if (movie.status === 200) return movie.data;

    const isAuthorize = await this.authorizeToken();
    if (isAuthorize) return this.getMovieById(id);

    return {} as MovieDetailResponse;
  }

  public async createMovie(createMovieObject: CreateMovieObject) : Promise<MovieResponse>{
    const movie = await this.httpService.post("/admin/movies", { createMovieObject });
    if (movie.status === 201) return movie.data;

    const isAuthorize = await this.authorizeToken();
    if (isAuthorize) return this.createMovie(createMovieObject);

    return {} as MovieResponse;
  }

  public async updateMovie(id: string, updateMovieObject: UpdateMovieObject) : Promise<MovieResponse> {
    const movie = await this.httpService.put(`/admin/movies/${id}`, { updateMovieObject });
    if (movie.status === 201) return movie.data;

    const isAuthorize = await this.authorizeToken();
    if (isAuthorize) return this.updateMovie(id, updateMovieObject);

    return {} as MovieResponse;
  }

  public async deleteMovie(id: string) : Promise<Response> {
    const movie = await this.httpService.delete(`/admin/movies/${id}`);
    if (movie.status === 200) return movie.data;

    const isAuthorize = await this.authorizeToken();
    if (isAuthorize) return this.deleteMovie(id);

    return {} as Response;
  }
}
