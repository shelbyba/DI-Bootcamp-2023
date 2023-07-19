// ErrorBoundary.js

import React, { Component } from 'react';

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      errorInfo: null
    };
  }

  componentDidCatch(error, errorInfo) {
    this.setState({
      error: error,
      errorInfo: errorInfo
    });
  }

  render() {
    if (this.state.error) {
      return (
        <details style={{ whiteSpace: 'pre-wrap' }}>
          <summary>Something went wrong.</summary>
          <p>{this.state.error.toString()}</p>
          <p>{this.state.errorInfo.componentStack}</p>
        </details>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
