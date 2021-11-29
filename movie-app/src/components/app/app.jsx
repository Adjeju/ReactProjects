import React from 'react';
import { Switch, Route } from 'react-router';

import Header from '../header';
import PopularMoviePage from '../pages/popular-movies-page';
import MovieDetailsPage from '../pages/movie-details-page';
import SearchedMoviesPage from '../pages/searched-movies-page';
import FavouiritesMoviesPage from '../pages/favouirites-movies-page';

import './app.css';

const App = () => {
  return (
    <>
      <Header />
      <Switch>
        <Route path="/" component={PopularMoviePage} exact />
        <Route path="/movie/:id" component={MovieDetailsPage} exact />
        <Route path="/search/:querry" component={SearchedMoviesPage} exact />
        <Route path="/favourites" component={FavouiritesMoviesPage} exact />
      </Switch>
    </>
  );
};

export default App;
