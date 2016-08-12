import React, { Component } from 'react';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';

export default function (ComposedComponent) {
  class RequireAuth extends Component {

    componentWillMount() {
      if (!this.props.auth) {
        browserHistory.push('/signin');
      }
    }

    componentWillUpdate(nextProps) {
      if (!nextProps.auth) {
        browserHistory.push('/signin');
      }
    }

    render() {
      return (
        <div>
          <ComposedComponent {...this.props} />
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

  return connect(mapStateToProps, null)(RequireAuth);
}
