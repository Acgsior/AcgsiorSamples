import * as React from 'react';

class ErrorBoundary extends React.Component<{}, { error: Error | null, errorInfo: React.ErrorInfo | null }> {
  constructor(props: {}) {
    super(props);
    this.state = { error: null, errorInfo: null };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    this.setState({
      error: error,
      errorInfo: errorInfo
    });
  }

  render() {
    if (this.state.errorInfo) {
      return (
        <div>
          <h3>Something went wrong.</h3>
          <details>
            <summary>{this.state.error && this.state.error.toString()}</summary>
            <p>{this.state.errorInfo.componentStack}</p>
          </details>
        </div>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;