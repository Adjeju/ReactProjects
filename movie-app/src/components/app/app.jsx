import React from 'react';
import Header from '../header';
import { Switch, Route } from 'react-router';

import PopularMoviePage from '../pages/popular-movies-page';
import MovieDetailsPage from '../pages/movie-details-page';
import SearchedMoviesPage from '../pages/searched-movies-page';

import './app.css';

const App = () => {
  return (
    <>
      <Header />
      <Switch>
        <Route path="/" component={PopularMoviePage} exact />
        <Route path="/movie/:id" component={MovieDetailsPage} exact />
        <Route path="/search/:querry" component={SearchedMoviesPage} exact />
      </Switch>
    </>
  );
};

export default App;
