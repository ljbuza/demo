import React from 'react';
import TopFixedMenu from './components/TopFixedMenu';
import Header from './components/Header';
import SideMenuCard from './components/SideMenuCard';
import '../public/css/main.css';
import '../node_modules/semantic-ui-css/semantic.min.css';
import Dashboard from './components/Dashboard';

const App = props => (
  <div>
    <TopFixedMenu />
    <Header
      title={props.children.props.route.title}
      subheader={props.children.props.route.subheader}
    />
    {props.children.props.route.title === 'Dashboard'
      ? <Dashboard />
      : <SideMenuCard content={props.children} />}
  </div>
);
export default App;
