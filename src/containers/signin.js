import React, { Component } from 'react';
import { signinUser, signupUser } from '../actions';
import { connect } from 'react-redux';
import { Link } from 'react-router';

// example class based component (smart component)
class Signin extends Component {
  constructor(props) {
    super(props);

    // init component state here
    this.state = {};
    this.render = this.render.bind(this);
    this.signInUser = this.signInUser.bind(this);
  }

  componentWillMount() {

  }


  componentWillUpdate() {

  }

  signInUser(e) {
    e.preventDefault();
    console.log('signing in');
    this.props.signinUser(document.getElementById('username').value, document.getElementById('password').value);
  }

  render() {
    return (
      <div>
        <form>
          <input type="text" id="username" placeholder="username" /> <br />
          <input type="text" id="password" placeholder="password" /> <br />
          <button onClick={this.signInUser}>Submit</button>
          <Link to="/signup">Sign Up</Link>
        </form>
      </div>
    );
  }
}

export default connect(null, { signinUser, signupUser })(Signin);
