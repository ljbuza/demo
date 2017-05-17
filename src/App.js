import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// IndexRedirect, browserHistory
import Alerts from './components/Alerts';
import Dashboard from './components/Dashboard';
import DataBrowser from './components/DataBrowser';

import TopFixedMenu from './components/TopFixedMenu';
import SubscriberOverview from './components/SubscriberOverview';
import Header from './components/Header';
import '../public/css/main.css';
import '../node_modules/semantic-ui-css/semantic.min.css';

const routes = [
  {
    path: '/databrowser',
    main: () => <div><DataBrowser /></div>,
  },
  {
    path: '/dashboard',
    main: () => <div><Dashboard /></div>,
  },
  {
    path: '/subscriber/:id',
    main: () => <div><SubscriberOverview /></div>,
  },
];

const App = appProps => (
  <Router>
    <div className="App">
      <TopFixedMenu />
      <div>
        {routes.map((route, index) => (
          <Route key={index} path={route.path} component={route.main} />
        ))}
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
