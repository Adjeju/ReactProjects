import React from 'react';
import GenrePill from '../genre-pill';
import ratingBG from '../../utils/ratingBG';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router';

import './popular-movie-card.css';

const PopularMovieCard = ({ movie, genres }) => {
  const history = useHistory();
  const { posterPath, originalTitle, releaseDate, voteAverage, id, genreIds } =
    movie;
  const imgPath = `https://image.tmdb.org/t/p/w500${posterPath}`;

  return (
    <div className="movie-card card">
      <div className="movie-card-header">
        <img
          src={imgPath}
          alt="Poster"
          className="card-img"
          onClick={() => history.push(`/movie/${id}`)}
        />
        <span className="rating" style={ratingBG(voteAverage)}>
          {voteAverage}
        </span>
      </div>
      <div className="movie-card-main">
        <Link to={`/movie/${id}`} className="movie-card-title">
          {originalTitle}
        </Link>
        <div className="genres">
          <GenrePill genres={genres} genreIds={genreIds} />
        </div>
        <div className="movie-card-footer">
          <span className="date">{releaseDate}</span>
          <button className="like-button btn">like</button>
        </div>
      </div>
    </div>
  );
};

export default PopularMovieCard;
