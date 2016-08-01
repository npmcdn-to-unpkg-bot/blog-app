import React, { Component } from 'react';
import { fetchPosts } from '../actions';
import { connect } from 'react-redux';
import PostListItem from '../components/postListItem';

// example class based component (smart component)
class Index extends Component {
  constructor(props) {
    super(props);

    // init component state here
    this.state = {};
    this.render = this.render.bind(this);
  }

  componentWillMount() {
    this.props.fetchPosts();
  }

  render() {
    if (!this.props.all || this.props.all.size === 0) {
      return (
        <div>
          <h1>No Posts Yet</h1>
        </div>
      );
    }

    let posts = this.props.all.map((post) => {
      return (<PostListItem post={post} key={post.id} />);
    });

    return (
      <div id="showPosts">
        {posts}
      </div>
    );
  }
}

const mapStateToProps = (state) => (
  {
    all: state.posts.all,
  }
);

export default connect(mapStateToProps, { fetchPosts })(Index);
