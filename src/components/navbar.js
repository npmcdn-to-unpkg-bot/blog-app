import React, { Component } from 'react';
import { Link } from 'react-router';

// example class based component (smart component)
class navBar extends Component {
  constructor(props) {
    super(props);

    // init component state here
    this.state = {};
  }

  render() {
    return (
      <div id="mynav">
        <Link to="/">Emma</Link>
        <Link to="posts/new">new post</Link>
      </div>
    );
  }
}

export default navBar;
