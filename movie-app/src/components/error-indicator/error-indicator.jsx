import React from 'react';

import './error-indicator.css';

const ErrorIndicator = () => {
  return (
    <div className="error-indicator">
      <span className="oops">Oops!</span>
      <span>Something went wrong...</span>
      <span>We will fix it as soon as possible!</span>
    </div>
  );
};

export default ErrorIndicator;
