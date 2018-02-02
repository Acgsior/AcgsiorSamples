import * as React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import AsyncComponent from './AsyncComponent';
import './App.css';

const App = () => (
  <Router>
    <div className="App">
      <ul>
        <li><Link to="async-component">AsyncComponentHoc</Link></li>
      </ul>

      <hr />
      <Route path="/async-component" component={AsyncComponent} />
    </div>
  </Router>
);

export default App;