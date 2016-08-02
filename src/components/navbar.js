import React from 'react';
import { Link } from 'react-router';

// example class based component (smart component)
const NavBar = () => {
  return (
    <div id="myNav">
      <Link to="/">My Blog</Link>
      <Link to="/posts/new">Add</Link>
    </div>
  );
};

export default NavBar;
