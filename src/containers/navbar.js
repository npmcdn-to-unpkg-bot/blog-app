import React, { Component } from 'react';
import { Link } from 'react-router';
import { signoutUser } from '../actions';
import { connect } from 'react-redux';

class NavBar extends Component {
  constructor(props) {
    super(props);

    // init component state here

    this.state = {
      auth: false,
    };

    this.signOut = this.signOut.bind(this);
    this.renderButton = this.renderButton.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    console.log(nextProps.auth);
    this.setState({ auth: nextProps.auth });
  }

  signOut() {
    this.props.signoutUser();
  }

  renderButton() {
    if (this.state.auth) {
      return (<button onClick={this.signOut}>Sign Out</button>);
    }
    return (<Link to="/signin">Sign In</Link>);
  }

  render() {
    return (
      <div id="myNav">
        <Link to="/">My Blog</Link>
        <Link to="/posts/new">Add</Link>
        {this.renderButton()}
      </div>
    );
  }
}

// mapStateToProps
const mapStateToProps = (state) => (
  {
    auth: state.auth.authenticated,
  }
);

export default connect(mapStateToProps, { signoutUser })(NavBar);
