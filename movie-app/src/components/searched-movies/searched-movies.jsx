import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  fetchSearchedMovies,
  fetchGenres,
  setSearchedPage,
} from '../../actions';
import PopularMovieCard from '../popular-movie-card';
import Pagination from 'react-js-pagination';
import PropTypes from 'prop-types';

import './searched-movies.css';

const SearchedMovies = ({ querry }) => {
  const dispatch = useDispatch();
  const { currentPage, searchedMoviesList } = useSelector(
    (state) => state.searchedMovies
  );
  const { genres } = useSelector((state) => state.movieGenres);

  useEffect(() => {
    dispatch(fetchGenres());
    dispatch(setSearchedPage(1));
    dispatch(fetchSearchedMovies(querry, currentPage));
  }, [dispatch, querry, currentPage]);

  const handlePageChange = (pageNumber) => {
    window.scrollTo(0, 0);
    dispatch(setSearchedPage(pageNumber));
    dispatch(fetchSearchedMovies(querry, pageNumber));
  };

  return (
    <div>
      <h3 className="fc-white m-4">Search for "{querry}"</h3>
      <div className="popular-movies">
        {searchedMoviesList.map((movie) => (
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

SearchedMovies.propTypes = {
  querry: PropTypes.string,
};

export default SearchedMovies;
