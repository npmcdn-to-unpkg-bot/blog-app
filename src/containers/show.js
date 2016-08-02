import React, { Component } from 'react';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';
import { fetchPost, updatePost, deletePost } from '../actions';
import marked from 'marked';

// example class based component (smart component)
class Show extends Component {
  constructor(props) {
    super(props);

    // init component state here
    this.state = {
      title: ' ',
      tags: ' ',
      content: ' ',
      isEditingTitle: false,
      isEditingContent: false,
    };

    this.delete = this.delete.bind(this);
    this.update = this.update.bind(this);
    this.render = this.render.bind(this);
    this.titleChange = this.titleChange.bind(this);
    this.contentChange = this.contentChange.bind(this);
    this.displayTitle = this.displayTitle.bind(this);
    this.toggleEditTitle = this.toggleEditTitle.bind(this);
    this.toggleEditContent = this.toggleEditContent.bind(this);
    this.createMarkUp = this.createMarkUp.bind(this);
    this.renderMarkDown = this.renderMarkDown.bind(this);
  }

  componentWillMount() {
    this.props.fetchPost(this.props.params.id);
  }

  componentWillReceiveProps(nextProps) {
    console.log(nextProps.post.title);
    this.setState({
      title: nextProps.post.title,
      tags: nextProps.post.tags,
      content: nextProps.post.content,
    });
  }

  toggleEditTitle(e) {
    e.preventDefault();
    if (this.state.isEditingTitle) {
      console.log('update title');
      this.update();
    }

    this.setState({ isEditingTitle: !this.state.isEditingTitle });
  }

  titleChange(e) {
    this.setState({ title: e.target.value });
  }

  toggleEditContent(e) {
    e.preventDefault();

    if (this.state.isEditingContent) {
      console.log('update content');
      this.update();
    }

    this.setState({ isEditingContent: !this.state.isEditingContent });
  }

  contentChange(e) {
    this.setState({ content: e.target.value });
  }

  displayTitle() {
    if (!this.state.isEditingTitle) {
      return <h1 onClick={this.toggleEditTitle}>{this.state.title}</h1>;
    } else {
      return (
        <form onSubmit={this.toggleEditTitle}>
          <input onChange={this.titleChange} defaultValue={this.state.title} />
        </form>
      );
    }
  }

  // create markup text
  createMarkUp() {
    return { __html: marked(this.state.content) };
  }

  delete() {
    this.props.deletePost(this.props.params.id);
  }

  update() {
    const post = {
      title: this.state.title,
      tags: this.state.tags,
      content: this.state.content,
    };
    this.props.updatePost(this.props.params.id, post);
  }

  cancel() {
    browserHistory.push('/');
  }

  // render textbox if editing or markdown if not
  renderMarkDown() {
    if (this.state.isEditingContent) {
      return (
        <div>
          <form id="content" onSubmit={this.toggleEditContent}>
            <textarea onBlur={this.toggleEditContent} onChange={this.contentChange} defaultValue={this.state.content} />
            <h3>Click outside the box to save</h3>
          </form>
        </div>
    );
    } else {
      return (<div dangerouslySetInnerHTML={this.createMarkUp()} onClick={this.toggleEditContent}></div>);
    }
  }

  render() {
    return (
      <div id="displayNote">
        <div id="buttons">
          <button onClick={this.delete} >Delete</button>
          <button onClick={this.cancel} >Cancel</button>
        </div>
        {this.displayTitle()}
        <h3>{this.state.tags}</h3>
        {this.renderMarkDown()}
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
