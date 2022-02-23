import React from 'react';

const searchBar = () => (
  <form action="/" method="get">
    <label htmlFor="header-search">
      <span className="visually-hidden">Search for buddies</span>
    </label>
    <input
      type="text"
      id="header-search"
      placeholder="Search for buddies"
      name="s"
    />
    <button type="submit">Search</button>
  </form>
);

export default searchBar
