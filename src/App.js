import React from 'react';
import TopFixedMenu from './components/TopFixedMenu';
import Header from './components/Header';
import SideMenuCard from './components/SideMenuCard';
import '../public/css/main.css';
import '../node_modules/semantic-ui-css/semantic.min.css';

const App = props => (
  <div>
    <TopFixedMenu />
    <Header subheader={props.children.props.route.subheader} />
    <SideMenuCard content={props.children} />
  </div>
);
export default App;
