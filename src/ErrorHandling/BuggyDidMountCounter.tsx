import * as React from 'react';
import ErrorBoundary from './ErrorBoundary';

class BuggyDidMountCounter extends React.Component<{}, { counter: number }> {
  constructor(props: {}) {
    super(props);

    this.state = { counter: 0 };
  }

  handleClick = () => {
    this.setState(({ counter }) => ({ counter: counter + 1 }));
  }

  componentDidMount() {
    throw new Error('I crashed!');
  }

  render() {
    const { counter } = this.state;
    return (
      <div>
        <button onClick={this.handleClick}>+1</button>
        <h4>to 3 will crash: {counter}</h4>
      </div>
    );
  }
}

const BuggyDidMountIndex = () => {
  return (
    <ErrorBoundary>
      <BuggyDidMountCounter />
    </ErrorBoundary>
  );
};

export default BuggyDidMountIndex;