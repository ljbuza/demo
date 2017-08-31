import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
// IndexRedirect, browserHistory
import Dashboard from './components/Dashboard';
import DataBrowser from './components/DataBrowser';

import TopFixedMenu from './components/TopFixedMenu';
import '../public/css/main.css';
import '../node_modules/semantic-ui-css/semantic.min.css';

const App = () => (
  <Router>
    <div className="App">
      <TopFixedMenu />
      <div>
        <Route path="/dashboard" exact component={Dashboard} />
        <Route path="/databrowser" component={DataBrowser} />
      </div>
    </div>
  </Router>
);
export default App;
