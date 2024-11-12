import { DateTimeFormat } from "vue-i18n";

export type Response = {
  message: string,
  success: boolean
}

export type MovieResponse = {
    id: string;
    title: string;
    releaseDate: Date;
    description: string;
    videoLink: string;
    ageLimit: number;
    countryId: string;
    languageCode: string;
    companyId: string;
    userId: string | null;
}

export type RefreshTokenResponse = {
  success: boolean,
  data: {
    userId: string,
    email: string,
    accessToken: string,
    refreshToken: string
  }
}

export type LoginResponse = {
  success: boolean,
  data: {
    userId: string,
    email: string,
    accessToken: string,
    refreshToken: string
  }
}

export type MovieDetailResponse = {
  feedbacks: {
    id: string;
    content: string;
    stars: number;
    createAt: Date;
    userId: string;
    movieId: string;
  }[];
  country: {
      id: string;
      name: string;
      code: string;
  };
  company: {
    id: string;
    name: string;
    countryId: string;
  };
  movieGenres: ({

  } & {

  })[];
  movieCasts: ({

  } & {

  })[];
  movieEkips: ({

  } & {

  })[];
  } & {
}

export type CreateMovieObject = {
  title: string,
  releaseDate: DateTimeFormat,
  description: string,
  videoLink: string,
  ageLimit: number,
  countryId: string,
  languageCode: string,
  companyId: string,
  genreList: string[],
  castList: string[],
  ekipList: string[],
}
export type UpdateMovieObject = {
  title: string,
  releaseDate: DateTimeFormat,
  description: string,
  videoLink: string,
  ageLimit: number,
  countryId: string,
  languageCode: string,
  companyId: string,
  genreList: string[],
  castList: string[],
  ekipList: string[],
}

export type GenreResponse = {
  id: string,
  name: string
}

export type CreateGenreObject = {
  name: string
}

export type UpdateGenreObject = {
  name: string
}

export type EkipResponse = {
  id: string,
  firstName: string,
  lastName: string,
  genderCode: number,
  positionCode: string
}

export type CountryResponse = {
  id: string,
  name: string,
  code: string
}

export type CreateCountryObject = {
  name: string,
  code: string
}

export type UpdateCountryObject = {
  name: string,
  code: string
}
