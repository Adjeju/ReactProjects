class MovieService {
  apiBase = 'https://api.themoviedb.org/3';
  apiKey = 'api_key=7beeda20442e1db08b8b2eba8ebd43b1';

  transformMovie = (movie) => {
    return {
      backdropPath: movie.backdrop_path,
      genreIds: movie.genre_ids,
      id: movie.id,
      originalTitle: movie.original_title,
      overview: movie.overview,
      posterPath: movie.poster_path,
      releaseDate: movie.release_date,
      voteAverage: movie.vote_average,
    };
  };

  getPopular = async (page) => {
    const res = await fetch(
      `${this.apiBase}/movie/popular?${this.apiKey}&page=${page}`
    )
      .then((responce) => responce.json())
      .then(({ results }) => {
        return results.map(this.transformMovie);
      });
    return res;
  };

  getGenres = async () => {
    const genres = await fetch(
      `${this.apiBase}/genre/movie/list?${this.apiKey}`
    )
      .then((promise) => promise.json())
      .then(({ genres }) => {
        return genres;
      });
    return genres;
  };

  searchMovies = async (querry, page) => {
    const moviList = await fetch(`
    ${this.apiBase}/search/movie?${this.apiKey}&query=${querry}&page=${page}&include_adult=true`)
      .then((responce) => responce.json())
      .then(({ results }) => {
        return results.map(this.transformMovie);
      });

    return moviList;
  };

  getRecomendation = async (id) => {
    const rec = await fetch(
      `${this.apiBase}/movie/${id}/recommendations?${this.apiKey}&language=en-US&page=1`
    )
      .then((responce) => responce.json())
      .then(({ results }) => {
        return results.map(this.transformMovie);
      });
    return rec;
  };

  getMovieDetails = async (id) => {
    const movie = await fetch(
      `${this.apiBase}/movie/${id}?${this.apiKey}&language=en-US`
    )
      .then((responce) => responce.json())
      .then((movie) => movie);
    return movie;
  };
}

const movieService = new MovieService();

export default movieService;
