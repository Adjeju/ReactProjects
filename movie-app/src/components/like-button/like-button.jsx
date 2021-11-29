import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp, faThumbsDown } from '@fortawesome/free-solid-svg-icons';
import { addMovieToFavourites, removeMovieFromFavourites } from '../../actions';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';

import './like-button.css';

const LikeButton = ({ movie }) => {
  const dispatch = useDispatch();

  const { favourites } = useSelector((state) => state.favouriteMovies);

  const isSaved = favourites.filter(({ id }) => id === movie.id).length > 0;

  const handleAddToFavourites = () => {
    dispatch(addMovieToFavourites(movie));
  };

  const handleRemoveFromFavourites = () => {
    dispatch(removeMovieFromFavourites(movie.id));
  };

  const clazz = isSaved ? 'like-button-green' : 'like-button-red';

  return (
    <button
      className={`like-button ${clazz}`}
      onClick={isSaved ? handleRemoveFromFavourites : handleAddToFavourites}
    >
      {console.log(isSaved)}
      {isSaved ? (
        <FontAwesomeIcon icon={faThumbsUp} />
      ) : (
        <FontAwesomeIcon icon={faThumbsDown} />
      )}
    </button>
  );
};

LikeButton.propTypes = {
  movie: PropTypes.object.isRequired,
};

export default LikeButton;
