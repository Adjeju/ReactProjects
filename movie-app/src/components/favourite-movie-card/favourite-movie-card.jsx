import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useDispatch } from 'react-redux';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { removeMovieFromFavourites } from '../../actions';
import PropTypes from 'prop-types';

import './favourite-movie-card.css';

const FavouriteMovieCard = ({ movie: { backdropPath, originalTitle, id } }) => {
  const dispatch = useDispatch();

  return (
    <div
      style={{
        backgroundImage: `url(https://image.tmdb.org/t/p/original${backdropPath})`,
      }}
      className="favourite-movie-card"
    >
      <button
        className="delete-icon"
        onClick={() => dispatch(removeMovieFromFavourites(id))}
      >
        <FontAwesomeIcon icon={faTimes} />
      </button>
      <div className="favourite-movie-card-content">
        <Link to={`/movie/${id}`} className="decoration-none">
          <h5 className="favourite-movie-card-content-title">
            {originalTitle}
          </h5>
        </Link>
      </div>
    </div>
  );
};

export default FavouriteMovieCard;

FavouriteMovieCard.propTypes = {
  movie: PropTypes.object,
};
