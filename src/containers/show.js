import React, { Component } from 'react';
import { connect } from 'react-redux';
import PostDisplay from '../components/postDisplay';
import { fetchPost, updatePost, deletePost } from '../actions';

// example class based component (smart component)
class Show extends Component {
  constructor(props) {
    super(props);

    // init component state here
    this.state = {};
    this.render = this.render.bind(this);
  }

  componentWillMount() {
    this.props.fetchPost(this.props.params.id);
  }

  componentWillReceiveProps(nextProps) {
    console.log(nextProps.post.title);
  }

  render() {
    // console.log(this.props.post);
    return (
      <div id="showPosts">
        <PostDisplay title="title" tags="tags" content="# test content" />
      </div>
    );
  }
}

const mapStateToProps = (state) => (
  {
    post: state.posts.post,
  }
);

export default connect(mapStateToProps, { fetchPost, updatePost, deletePost })(Show);
