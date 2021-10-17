const ratingBG = (voteAverage) => {
  if (voteAverage > 7) {
    return {
      backgroundColor: 'green',
    };
  } else if (voteAverage <= 7 && voteAverage > 4) {
    return {
      backgroundColor: '#f8961e',
    };
  }
  return {
    backgroundColor: 'red',
  };
};

export default ratingBG;
