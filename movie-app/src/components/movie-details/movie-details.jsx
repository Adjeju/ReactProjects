import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMovieDetails } from '../../actions';
import LikeButton from '../like-button';
import PropTypes from 'prop-types';

import './movie-details.css';

const MovieDetails = ({ id }) => {
  const dispatch = useDispatch();
  const { details } = useSelector((state) => state.movieDetails);
  const {
    backdrop_path: backdropPath,
    original_title: originalTitle,
    overview,
    poster_path: posterPath,
    release_date: releaseDate,
    tagline,
    vote_average: voteAvarage,
    genres,
  } = details;

  useEffect(() => {
    dispatch(fetchMovieDetails(id));
  }, [dispatch, id]);

  return (
    <div
      className="movie-detalis-bg-image"
      style={{
        backgroundImage: `url(https://image.tmdb.org/t/p/original${backdropPath})`,
      }}
    >
      <div className="movie-detalis">
        <div className="movie-details-poster">
          <img
            src={`https://image.tmdb.org/t/p/w500${posterPath}`}
            alt="poster"
            className="poster"
          />
        </div>
        <div className="movie-details-info">
          <h3 className="fc-white">{originalTitle}</h3>
          <p className="tagline fc-white">{tagline}</p>
          <div>
            {genres?.map(({ id, name }) => {
              return (
                <span key={id} className="genre-pill-alt">
                  {name}
                </span>
              );
            })}
          </div>
          <p className="fc-white">{overview}</p>
          <p className="fc-white">Date of release: {releaseDate}</p>
          <p className="fc-white">Rating: {voteAvarage}</p>
          <div>
            <LikeButton movie={details} />
          </div>
        </div>
      </div>
    </div>
  );
};

MovieDetails.propTypes = {
  id: PropTypes.number,
};

export default MovieDetails;
