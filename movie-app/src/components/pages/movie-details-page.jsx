import React from 'react';
import { useParams } from 'react-router';
import MovieDetails from '../movie-details/movie-details';
import MovieRecomendationCarousel from '../movie-recomendation-carousel';

const MovieDetailsPage = () => {
  const { id } = useParams();
  return (
    <>
      <MovieDetails id={id} />
      <MovieRecomendationCarousel id={id} />
    </>
  );
};

export default MovieDetailsPage;
