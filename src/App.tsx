import * as React from 'react';
import AsyncComponent from './AsyncComponent';
import NameComponent from './NameComponent';
import './App.css';

interface AppState {
  count: number;
}

class App extends React.Component<{}, AppState> {
  constructor(props: React.Props<{}>) {
    super(props);

    this.state = {
      count: 0
    };
  }

  resolveAfter = function <T>(value: T, sec: number): Promise<T> {
    return new Promise(resolve => { setTimeout(() => resolve(value), sec); });
  };

  mockFetch = async (name: string, sec: number = 2000) => {
    return await this.resolveAfter({ name }, sec);
  }

  render() {
    const { count } = this.state;
    return (
      <div className="App">
        <AsyncComponent
          loader={() => this.mockFetch('morgan')}
          component={(props) => (<NameComponent {...props} />)}
        />
        <AsyncComponent
          loader={() => this.mockFetch('????', 3000)}
          component={(props) => (<NameComponent {...props} />)}
        />
        <div>
          count value: {count}
        </div>
        <button onClick={() => { this.setState({ count: count + 1 }); }}>
          Change state to re-render
        </button>
      </div>
    );
  }
}

export default App;
