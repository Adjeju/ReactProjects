import React from 'react';
import { useSelector } from 'react-redux';

import FavouriteMovieCard from '../favourite-movie-card';

import './favourites-movies.css';

const FavouritesMovies = () => {
  const { favourites } = useSelector((state) => state.favouriteMovies);
  return (
    <div>
      <p
        style={{ textAlign: 'center', fontSize: '2rem' }}
        className="fc-white m-2"
      >
        Favourite movies
      </p>
      <div className="favourite-movies">
        {favourites.map((movie) => (
          <FavouriteMovieCard movie={movie} key={movie.id} />
        ))}
      </div>
    </div>
  );
};

export default FavouritesMovies;
