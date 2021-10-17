const initialState = {
  popularMovies: {
    loading: false,
    movies: [],
    error: null,
    currentPage: 1,
  },
  movieGenres: {
    loading: false,
    genres: [],
    error: null,
  },
  movieDetails: {
    loading: false,
    details: {},
    error: null,
  },
  movieRecomendation: {
    loading: false,
    recomendation: [],
    error: null,
  },
  searchedMovies: {
    loading: false,
    searchedMoviesList: [],
    currentPage: 1,
    error: null,
  },
};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case 'FETCH_MOVIE_REQEUSTED':
      return {
        ...state,
        popularMovies: {
          ...state.popularMovies,
          loading: true,
        },
      };
    case 'FETCH_MOVIE_SUCCESS':
      return {
        ...state,
        popularMovies: {
          ...state.popularMovies,
          loading: false,
          movies: payload,
        },
      };
    case 'FETCH_MOVIE_FAILURE':
      return {
        ...state,
        popularMovies: {
          ...state.popularMovies,
          error: payload,
        },
      };

    case 'FETCH_GENRES_REQUESTED':
      return {
        ...state,
        movieGenres: {
          ...state.movieGenres,
          loading: true,
        },
      };
    case 'FETCH_GENRES_SUCCESS':
      return {
        ...state,
        movieGenres: {
          ...state.movieGenres,
          genres: payload,
          loading: false,
        },
      };
    case 'FETCH_GENRES_FAILURE':
      return {
        ...state,
        movieGenres: {
          ...state.movieGenres,
          error: payload,
        },
      };

    case 'SET_PAGE_SUCCESS':
      return {
        ...state,
        popularMovies: {
          ...state.popularMovies,
          currentPage: payload,
        },
      };

    case 'FETCH_MOVIE_DETAILS_REQUESTED':
      return {
        ...state,
        movieDetails: {
          ...state.movieDetails,
          loading: true,
        },
      };
    case 'FETCH_MOVIE_DETAILS_SUCCESS':
      return {
        ...state,
        movieDetails: {
          ...state.movieDetails,
          details: payload,
        },
      };
    case 'FETCH_MOVIE_DETAILS_FAILURE':
      return {
        ...state,
        movieDetails: {
          ...state.movieDetails,
          error: payload,
        },
      };

    case 'FETCH_RECOMENDATION_REQUESTED':
      return {
        ...state,
        movieRecomendation: {
          ...state.movieRecomendation,
          loading: true,
        },
      };
    case 'FETCH_RECOMENDATION_SUCCESS':
      return {
        ...state,
        movieRecomendation: {
          ...state.movieRecomendation,
          loading: false,
          recomendation: payload,
        },
      };
    case 'FETCH_RECOMENDATION_FAILURE':
      return {
        ...state,
        movieRecomendation: {
          ...state.movieRecomendation,
          error: payload,
        },
      };

    case 'FETCH_SEARCHED_MOVIES_REQUESTED':
      return {
        ...state,
        searchedMovies: {
          ...state.searchedMovies,
          loading: true,
        },
      };
    case 'FETCH_SEARCHED_MOVIES_SUCCESS':
      return {
        ...state,
        searchedMovies: {
          ...state.searchedMovies,
          searchedMoviesList: payload,
          loading: false,
        },
      };
    case 'FETCH_SEARCHED_MOVIES_FAILURE':
      return {
        ...state,
        searchedMovies: {
          ...state.searchedMovies,
          error: payload,
        },
      };
    case 'SET_SEARCHED_PAGE_SUCCESS':
      return {
        ...state,
        searchedMovies: {
          ...state.searchedMovies,
          currentPage: payload,
        },
      };
    default:
      return state;
  }
};

export { reducer };
