import React, { Component } from 'react';
import PostDisplay from './postDisplay';

// example class based component (smart component)
class Show extends Component {
  constructor(props) {
    super(props);

    // init component state here
    this.state = {};
  }

  render() {
    return (
      <div>
        <PostDisplay title="test title" tags="tags" content="# test content" />
      </div>
    );
  }
}

export default Show;
