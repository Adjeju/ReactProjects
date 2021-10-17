import React from 'react';
import { useParams } from 'react-router';
import SearchedMovies from '../searched-movies';

const SearchedMoviesPage = () => {
  const { querry } = useParams();
  return (
    <>
      <SearchedMovies querry={querry} />
    </>
  );
};

export default SearchedMoviesPage;
