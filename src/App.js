import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// IndexRedirect, browserHistory
import Alerts from './components/Alerts';
import Dashboard from './components/Dashboard';
import DataBrowser from './components/DataBrowser';
import Foo from './components/Foo';

import TopFixedMenu from './components/TopFixedMenu';
import SubscriberOverview from './components/SubscriberOverview';
import '../public/css/main.css';
import '../node_modules/semantic-ui-css/semantic.min.css';

const routes = [
  {
    path: '/databrowser/',
    exact: false,
    main: () => <div><DataBrowser /></div>,
  },
  {
    path: '/dashboard',
    exact: true,
    main: () => <Dashboard />,
  },
];

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

/* <Header
      title={props.children.props.route.title}
      subheader={props.children.props.route.subheader}
    />
    {this.props.children}*/
