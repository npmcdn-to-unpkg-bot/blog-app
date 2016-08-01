import React, { Component } from 'react';
import { Link } from 'react-router';
import { createPost } from '../actions';
import { connect } from 'react-redux';

// example class based component (smart component)
class New extends Component {
  constructor(props) {
    super(props);

    // init component state here
    this.state = {};
    this.create = this.create.bind(this);
  }

  create(e) {
    e.preventDefault();
    const fields = {
      title: document.getElementById('title').value,
      content: document.getElementById('content').value,
      tags: document.getElementById('tags').value,
    };

    console.log('creating');
    this.props.createPost(fields);
  }

  render() {
    return (
      <div>
        <h1>Create A New Post</h1>
        <form>
          <input type="text" id="title" placeholder="title" /> <br />
          <input type="text" id="tags" placeholder="tags" /> <br />
          <input type="text" id="content" placeholder="content" /> <br />
          <button onClick={this.create}>Submit</button>
          <Link to="/">Cancel</Link>
        </form>
      </div>
    );
  }
}

export default connect(null, { createPost })(New);
