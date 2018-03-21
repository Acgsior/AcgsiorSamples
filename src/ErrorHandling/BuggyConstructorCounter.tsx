import * as React from 'react';
import ErrorBoundary from './ErrorBoundary';

class BuggyConstructorCounter extends React.Component<{}, { counter: number }> {
  constructor(props: {}) {
    super(props);

    this.state = { counter: 0 };
    throw new Error('I crashed!');
  }

  handleClick = () => {
    this.setState(({ counter }) => ({ counter: counter + 1 }));
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

const BuggyConstructorIndex = () => {
  return (
    <ErrorBoundary>
      <BuggyConstructorCounter />
    </ErrorBoundary>
  );
};

export default BuggyConstructorIndex;