import React, { Component } from 'react';
import { Link } from 'react-router';
import { signoutUser } from '../actions';
import { connect } from 'react-redux';

class NavBar extends Component {
  constructor(props) {
    super(props);

    // init component state here

    this.state = {

    };

    this.signOut = this.signOut.bind(this);
  }

  signOut() {
    this.props.signoutUser();
  }

  render() {
    return (
      <div id="myNav">
        <Link to="/">My Blog</Link>
        <Link to="/posts/new">Add</Link>
        <button onClick={this.signOut}>Sign Out</button>
      </div>
    );
  }
}

export default connect(null, { signoutUser })(NavBar);
