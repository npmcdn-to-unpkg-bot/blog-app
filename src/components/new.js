import React, { Component } from 'react';

// example class based component (smart component)
class New extends Component {
  constructor(props) {
    super(props);

    // init component state here
    this.state = {};
  }

  render() {
    return (
      <div>
        New
      </div>
    );
  }
}

export default New;
