import React, { useEffect } from 'react';
import Carousel from 'react-multi-carousel';
import PopularMovieCard from '../popular-movie-card';
import { useSelector, useDispatch } from 'react-redux';
import { fetchGenres, fetchRecomendations } from '../../actions';

import './movie-recomendation-carousel.css';
import 'react-multi-carousel/lib/styles.css';

const MovieRecomendationCarousel = ({ id }) => {
  const dispatch = useDispatch();
  const { recomendation } = useSelector((state) => state.movieRecomendation);
  const { genres } = useSelector((state) => state.movieGenres);

  useEffect(() => {
    dispatch(fetchGenres());
    dispatch(fetchRecomendations(id));
  }, [dispatch, id]);

  return (
    <div>
      <h3 className="fc-white mb-4" style={{ textAlign: 'center' }}>
        Movie Recomedation
      </h3>
      <Carousel
        additionalTransfrom={0}
        arrows
        autoPlaySpeed={3000}
        centerMode={false}
        className=""
        containerClass="container-with-dots"
        dotListClass=""
        draggable
        focusOnSelect={false}
        infinite
        itemClass=""
        keyBoardControl
        minimumTouchDrag={80}
        renderButtonGroupOutside={false}
        renderDotsOutside={true}
        responsive={{
          desktop: {
            breakpoint: {
              max: 3000,
              min: 1024,
            },
            items: 4,
            partialVisibilityGutter: 40,
          },
        }}
        showDots={false}
        sliderClass=""
        slidesToSlide={1}
        swipeable
      >
        {recomendation.map((movie) => (
          <div style={{ padding: '0 5px' }}>
            <PopularMovieCard movie={movie} genres={genres} key={movie.id} />
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default MovieRecomendationCarousel;
