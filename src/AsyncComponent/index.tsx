import * as React from 'react';
import asyncComponent from './asyncComponent';
import NameComponent from './NameComponent';

interface AppState {
  count: number;
}

const resolveAfter = function <T>(value: T, ms: number): Promise<T> {
  return new Promise(resolve => {
    setTimeout(() => resolve(value), ms);
  });
};

const mockFetch = async (name: string, label: string, ms: number = 2000) => {
  return await resolveAfter({ name, label }, ms);
};

const AsyncNameComp1 = asyncComponent(() => NameComponent, () => mockFetch('morgan', 'Fetched in 2s: '));

const AsyncNameComp2 = asyncComponent(() => NameComponent, () => mockFetch('????', 'Fetched in 4s: ', 4000));

class AsyncComponent extends React.Component<{}, AppState> {
  constructor(props: {}) {
    super(props);

    this.state = {
      count: 0
    };
  }

  render() {
    const { count } = this.state;
    return (
      <div className="async-comp">
        <AsyncNameComp1 />
        <AsyncNameComp2 />
        <div>
          count value: {count}
        </div>
        <button onClick={() => this.setState({ count: count + 1 })}>
          Change state to re-render
        </button>
      </div>
    );
  }
}

export default AsyncComponent;
