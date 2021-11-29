import React from 'react';
import PropTypes from 'prop-types';

import './genre-pill.css';

const GenrePill = ({ genres, genreIds }) => {
  return genres
    .filter((genre) => genreIds.includes(genre.id))
    .map(({ name }) => {
      return (
        <span key={name} className="genre-pill">
          {name}
        </span>
      );
    });
};

export default GenrePill;

GenrePill.propTypes = {
  genres: PropTypes.array,
  genreIds: PropTypes.array,
};
