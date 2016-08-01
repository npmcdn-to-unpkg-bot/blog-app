import React, { Component } from 'react';
import { Link } from 'react-router';
import marked from 'marked';

// example class based component (smart component)
class PostDisplay extends Component {
  constructor(props) {
    super(props);

    // init component state here
    this.state = {
      isEditingTitle: false,
      isEditingContent: false,
    };

    this.render = this.render.bind(this);
    this.displayTitle = this.displayTitle.bind(this);
    this.toggleEditTitle = this.toggleEditTitle.bind(this);
    this.toggleEditContent = this.toggleEditContent.bind(this);
    this.createMarkUp = this.createMarkUp.bind(this);
    this.renderMarkDown = this.renderMarkDown.bind(this);
  }

  toggleEditTitle(e) {
    e.preventDefault();
    this.setState({ isEditingTitle: !this.state.isEditingTitle });
  }

  toggleEditContent(e) {
    e.preventDefault();
    this.setState({ isEditingContent: !this.state.isEditingContent });
  }

  displayTitle() {
    if (!this.state.isEditingTitle) {
      return <h1 onClick={this.toggleEditTitle}>{this.props.title}</h1>;
    } else {
      return (
        <form onSubmit={this.toggleEditTitle}>
          <input defaultValue={this.props.title} />
        </form>
      );
    }
  }

  // create markup text
  createMarkUp() {
    return { __html: marked(this.props.content) };
  }

  // render textbox if editing or markdown if not
  renderMarkDown() {
    if (this.state.isEditingContent) {
      return (
        <div>
          <form id="content" onSubmit={this.toggleEditContent}>
            <textarea onBlur={this.toggleEditContent} defaultValue={this.props.content} />
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
          <Link to="/">Back To Index</Link>
          <Link to="/">Delete</Link>
        </div>
        {this.displayTitle()}
        <h3>{this.props.tags}</h3>
        {this.renderMarkDown()}
      </div>
    );
  }
}

export default PostDisplay;
