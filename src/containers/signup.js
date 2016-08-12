import React, { Component } from 'react';
import { signupUser } from '../actions';
import { connect } from 'react-redux';
import { Link } from 'react-router';

// example class based component (smart component)
class Signup extends Component {
  constructor(props) {
    super(props);

    // init component state here
    this.state = {};
    this.render = this.render.bind(this);
    this.signUpUser = this.signUpUser.bind(this);
  }

  componentWillMount() {

  }

  componentWillUpdate() {

  }

  signUpUser(e) {
    e.preventDefault();
    console.log('signing up');
    this.props.signupUser(document.getElementById('newusername').value, document.getElementById('newpassword').value);
  }

  render() {
    return (
      <div>
        <form>
          <input type="text" id="newusername" placeholder="usename" /> <br />
          <input type="text" id="newpassword" placeholder="password" /> <br />
          <button onClick={this.signUpUser}>Submit</button>
          <Link to="/signin">Sign In</Link>
        </form>
      </div>
    );
  }
}

export default connect(null, { signupUser })(Signup);
