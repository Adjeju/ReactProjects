import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPopularMovies, fetchGenres, setPage } from '../../actions';
import Pagination from 'react-js-pagination';
import Spinner from '../spinner';
import PopularMovieCard from '../popular-movie-card';

import './popular-movies.css';

const PopularMovies = () => {
  const dispatch = useDispatch();

  const {
    movies,
    loading: movieLoading,
    currentPage,
  } = useSelector((state) => state.popularMovies);

  const { genres } = useSelector((state) => state.movieGenres);

  useEffect(() => {
    dispatch(fetchPopularMovies(currentPage));
    dispatch(fetchGenres());
  }, [dispatch, currentPage]);

  const handlePageChange = (pageNumber) => {
    window.scrollTo(0, 0);
    dispatch(setPage(pageNumber));
    dispatch(fetchPopularMovies(pageNumber));
  };

  const spinner = movieLoading ? <Spinner /> : null;

  return (
    <div className="movie-page">
      <h3 className="popular-header">Popular movies</h3>
      {spinner}
      <div className="popular-movies">
        {movies.map((movie) => (
          <PopularMovieCard movie={movie} genres={genres} key={movie.id} />
        ))}
      </div>
      <div className="mt-4">
        <Pagination
          activePage={currentPage}
          totalItemsCount={10000}
          pageRangeDisplayed={15}
          onChange={handlePageChange}
          itemClass="page-item"
          linkClass="page-link"
        />
      </div>
    </div>
  );
};

export default PopularMovies;
