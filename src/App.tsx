import * as React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import AsyncComponent from './AsyncComponent';
import BuggyConstructorCounter from './ErrorHandling/BuggyConstructorCounter';
import BuggyDidMountCounter from './ErrorHandling/BuggyDidMountCounter';
import BuggyRenderCounter from './ErrorHandling/BuggyRenderCounter';
import './App.css';

const App = () => (
  <Router>
    <div className="App">
      <ul>
        <li><Link to="/async-component">Async Component HOC</Link></li>
        <li>React Error Handling
          <ul>
            <li><Link to="/error-handling/constructor">Handle Constructor Error</Link></li>
            <li><Link to="/error-handling/did-mount">Handle DidMount Error</Link></li>
            <li><Link to="/error-handling/render">Handle Render Error</Link></li>
          </ul>
        </li>
      </ul>

      <div className="App-body">
        <Route path="/async-component" component={AsyncComponent} />
        <Route path="/error-handling/constructor" component={BuggyConstructorCounter} />
        <Route path="/error-handling/did-mount" component={BuggyDidMountCounter} />
        <Route path="/error-handling/render" component={BuggyRenderCounter} />
      </div>
    </div>
  </Router>
);

export default App;