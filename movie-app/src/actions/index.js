import movieService from '../services/movie-service';

const moviesRequested = () => {
  return {
    type: 'FETCH_MOVIE_REQUESTED',
  };
};

const moviesLoaded = (movies) => {
  return {
    type: 'FETCH_MOVIE_SUCCESS',
    payload: movies,
  };
};

const moviesError = (error) => {
  return {
    type: 'FETCH_MOVIE_FAILURE',
    payload: error,
  };
};

const genresRequested = () => {
  return {
    type: 'FETCH_GENRES_REQUESTED',
  };
};

const genresLoaded = (genres) => {
  return {
    type: 'FETCH_GENRES_SUCCESS',
    payload: genres,
  };
};

const genresError = (error) => {
  return {
    type: 'FETCH_GENRES_FAILURE',
    payload: error,
  };
};

const setPage = (pageNumber) => {
  return {
    type: 'SET_PAGE_SUCCESS',
    payload: pageNumber,
  };
};

const movieDetailsRequested = () => {
  return {
    type: 'FETCH_MOVIE_DETAILS_REQUESTED',
  };
};

const movieDetailsLoaded = (movieDetails) => {
  return {
    type: 'FETCH_MOVIE_DETAILS_SUCCESS',
    payload: movieDetails,
  };
};

const movieDetailsError = (error) => {
  return {
    type: 'FETCH_MOVIE_DETAILS_FAILURE',
    payload: error,
  };
};

const recomendationRequested = () => {
  return {
    type: 'FETCH_RECOMENDATION_REQUESTED',
  };
};

const recomendationLoaded = (recomendations) => {
  return {
    type: 'FETCH_RECOMENDATION_SUCCESS',
    payload: recomendations,
  };
};

const recomendationError = (err) => {
  return {
    type: 'FETCH_RECOMENDATION_FAILURE',
    payload: err,
  };
};

const searchedMoviesRequested = () => {
  return {
    type: 'FETCH_SEARCHED_MOVIES_REQUESTED',
  };
};

const searchedMoviesLoaded = (movies) => {
  return {
    type: 'FETCH_SEARCHED_MOVIES_SUCCESS',
    payload: movies,
  };
};

const searchedMoviesError = (error) => {
  return {
    type: 'FETCH_SEARCHED_MOVIES_FAILURE',
    payload: error,
  };
};

const setSearchedPage = (page) => {
  return {
    type: 'SET_SEARCHED_PAGE_SUCCESS',
    payload: page,
  };
};

const fetchPopularMovies = (page) => (dispatch) => {
  dispatch(moviesRequested());
  movieService
    .getPopular(page)
    .then((movies) => dispatch(moviesLoaded(movies)))
    .catch((err) => dispatch(moviesError(err)));
};

const fetchGenres = () => (dispatch) => {
  dispatch(genresRequested());
  movieService
    .getGenres()
    .then((genres) => dispatch(genresLoaded(genres)))
    .catch((err) => dispatch(genresError(err)));
};

const fetchMovieDetails = (id) => (dispatch) => {
  dispatch(movieDetailsRequested());
  movieService
    .getMovieDetails(id)
    .then((details) => dispatch(movieDetailsLoaded(details)))
    .catch((error) => dispatch(movieDetailsError(error)));
};

const fetchRecomendations = (id) => (dispatch) => {
  dispatch(recomendationRequested());
  movieService
    .getRecomendation(id)
    .then((recomendation) => dispatch(recomendationLoaded(recomendation)))
    .catch((error) => dispatch(recomendationError(error)));
};

const fetchSearchedMovies = (querry, page) => (dispatch) => {
  dispatch(searchedMoviesRequested());
  movieService
    .searchMovies(querry, page)
    .then((movies) => dispatch(searchedMoviesLoaded(movies)))
    .catch((error) => dispatch(searchedMoviesError(error)));
};

export {
  fetchPopularMovies,
  fetchGenres,
  fetchMovieDetails,
  setPage,
  fetchRecomendations,
  fetchSearchedMovies,
  setSearchedPage,
};
