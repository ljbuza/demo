import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
// IndexRedirect, browserHistory
import Dashboard from './components/Dashboard';
import DataBrowser from './components/DataBrowser';

import DocsisMaintenance from './docsisComponents/DocsisMaintenance'


import TopFixedMenu from './components/TopFixedMenu';
import '../public/css/main.css';
import '../node_modules/semantic-ui-css/semantic.min.css';

// const routes = [
//   {
//     path: '/databrowser/',
//     exact: false,
//     main: () => <div><DataBrowser /></div>,
//   },
//   {
//     path: '/dashboard',
//     exact: true,
//     main: () => <Dashboard />,
//   },
// ];

const App = () => (
  <Router>
    <div className="App">
      <TopFixedMenu />
      <div>
        <Route path="/dashboard" exact component={Dashboard} />
        <Route path="/databrowser" component={DataBrowser} />
        <Route path="/docsismaintenance" component={DocsisMaintenance} />
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
