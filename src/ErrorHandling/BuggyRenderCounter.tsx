import * as React from 'react';
import ErrorBoundary from './ErrorBoundary';

class BuggyRenderCounter extends React.Component<{}, { counter: number }> {
  constructor(props: {}) {
    super(props);

    this.state = { counter: 0 };
  }

  handleClick = () => {
    this.setState(({ counter }) => ({ counter: counter + 1 }));
  }

  render() {
    const { counter } = this.state;
    if (counter === 3) {
      throw new Error('I crashed!');
    }

    return (
      <div>
        <button onClick={this.handleClick}>+1</button>
        <h4>to 3 will crash: {counter}</h4>
      </div>
    );
  }
}

const BuggyRenderIndex = () => {
  return (
    <ErrorBoundary>
      <BuggyRenderCounter />
    </ErrorBoundary>
  );
};

export default BuggyRenderIndex;