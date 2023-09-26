import axiosConfig from "../utils/AxiosConfig";

export class AxiosService {
  async fetchMovieList(page = 1) {
    const result = await axiosConfig.get(`3/discover/movie?page=${page}`);
    return result.data;
  }

  async fetchMovieDetails(id) {
    const result = await axiosConfig.get(`3/movie/${id}`);
    return result.data;
  }

  async fetchSearchResults(movieName, page = 1) {
    const result = await axiosConfig.get(
      `3/search/movie?query=${movieName}&page=${page}`
    );
    return result.data;
  }

  async fetchSearchResultsOfGenre(genreId, page = 1) {
    const result = await axiosConfig.get(
      `3/discover/movie?sort_by=popularity.desc&with_genres=${genreId}&page=${page}`
    );
    return result.data;
  }

  async fetchGenreList() {
    const result = await axiosConfig.get(`3/genre/movie/list`);
    return result.data;
  }

  async fetchTV_WebSeriesResults(page = 1) {
    const result = await axiosConfig.get(`3/discover/tv?page=${page}`);
    return result.data;
  }

  async fetchTV_WebSeriesDetails(tvId) {
    const result = await axiosConfig.get(`3/tv/${tvId}`);
    return result.data;
  }
}
