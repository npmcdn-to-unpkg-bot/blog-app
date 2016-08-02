import React, { Component } from 'react';
import { Link } from 'react-router';

// example class based component (smart component)
class PostListItem extends Component {
  constructor(props) {
    super(props);

    // init component state here
    this.state = {

    };
  }

  render() {
    return (
      <Link to={`/posts/${this.props.post.id}`} className="listItem">
        <h1 className="title">{this.props.post.title}</h1>
        <h1 className="tags">{this.props.post.tags}</h1>
      </Link>
    );
  }
}

export default PostListItem;
