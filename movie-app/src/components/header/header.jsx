import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router';

import './header.css';

const Header = () => {
  const history = useHistory();
  const [searchQuerry, setSearchQuerry] = useState('');

  const onHandleChange = (e) => {
    setSearchQuerry(e.target.value);
  };

  return (
    <div className="header bg-light">
      <div>
        <Link to="/" className="navbar-brand">
          Cinema
        </Link>
      </div>
      <form
        className="search-form"
        onSubmit={(e) => {
          history.push(`/search/${searchQuerry}`);
          e.preventDefault();
          setSearchQuerry('');
        }}
      >
        <input
          placeholder="Search film"
          className="form-control search-input"
          onChange={onHandleChange}
          value={searchQuerry}
        ></input>
        <button className="btn btn-primary">Search</button>
      </form>
      <div>
        <Link to="/favourites" className="favourites">
          Favourites
        </Link>
      </div>
    </div>
  );
};

export default Header;
