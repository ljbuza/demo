import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './Header';
import SideMenu from './SideMenu';
import NetworkSecMenu from './NetworkSecMenu';
import EquipSecMenu from './EquipSecMenu';
import NetworkCmts from './NetworkCmts';
import NetworkMac from './NetworkMac';
import NetworkFiber from './NetworkFiber';
import NetworkCface from './NetworkCface';
import NetworkModem from './NetworkModem';
import NetworkMface from './NetworkMface';
import EquipCmts from './EquipCmts';
import EquipModem from './EquipModem';
import EquipMta from './EquipMta';
import Subscriber from './Subscriber';
import SubSecMenu from './SubSecMenu';
import SubscriberOverview from './SubscriberOverview';
import Order from './Order';

import '../../public/css/main.css';
import '../../node_modules/semantic-ui-css/semantic.min.css';

const routes = [
  {
    path: '/databrowser',
    exact: true,
    header: () => (
      <Header title="Data Browser" subtitle="Network Information" />
    ),
    secondarymenu: () => <NetworkSecMenu />,
    main: () => <div><NetworkCmts /></div>,
  },
  {
    path: '/databrowser/network-cmts',
    header: () => (
      <Header title="Data Browser" subtitle="Network Information" />
    ),
    secondarymenu: () => <NetworkSecMenu />,
    main: () => <div><NetworkCmts /></div>,
  },
  {
    path: '/databrowser/network-mac',
    header: () => (
      <Header title="Data Browser" subtitle="Network Information" />
    ),
    secondarymenu: () => <NetworkSecMenu />,
    main: () => <div><NetworkMac /></div>,
  },
  {
    path: '/databrowser/network-fiber',
    header: () => (
      <Header title="Data Browser" subtitle="Network Information" />
    ),
    secondarymenu: () => <NetworkSecMenu />,
    main: () => <div><NetworkFiber /></div>,
  },
  {
    path: '/databrowser/network-cface',
    header: () => (
      <Header title="Data Browser" subtitle="Network Information" />
    ),
    secondarymenu: () => <NetworkSecMenu />,
    main: () => <div><NetworkCface /></div>,
  },
  {
    path: '/databrowser/network-modem',
    header: () => (
      <Header title="Data Browser" subtitle="Network Information" />
    ),
    secondarymenu: () => <NetworkSecMenu />,
    main: () => <div><NetworkModem /></div>,
  },
  {
    path: '/databrowser/network-mface',
    header: () => (
      <Header title="Data Browser" subtitle="Network Information" />
    ),
    secondarymenu: () => <NetworkSecMenu />,
    main: () => <div><NetworkMface /></div>,
  },

  {
    path: '/databrowser/equip-cmts',
    header: () => (
      <Header title="Data Browser" subtitle="Equipment Information" />
    ),
    secondarymenu: () => <EquipSecMenu />,
    main: () => <div><EquipCmts /></div>,
  },
  {
    path: '/databrowser/subscriber',
    exact: true,
    header: () => (
      <Header title="Data Browser" subtitle="Subscriber Information" />
    ),
    secondarymenu: () => <SubSecMenu />,
    main: () => <div><Subscriber /></div>,
  },
];

const DataBrowser = () => (
  <Router>
    <div>
      {routes.map((route, index) => (
        <Route
          key={index}
          path={route.path}
          exact={route.exact}
          component={route.header}
        />
      ))}
      <div className="ui container" id="main_body">
        {routes.map((route, index) => (
          <Route
            key={index}
            path={route.path}
            exact={route.exact}
            component={route.secondarymenu}
          />
        ))}
        <div className="ui two column grid">
          <div className="stretched row">
            <div className="three wide column">
              <SideMenu />
            </div>
            <div className="thirteen wide column">
              <div className="ui vertical basic segment">
                {routes.map((route, index) => (
                  <Route
                    key={index}
                    path={route.path}
                    exact={route.exact}
                    component={route.main}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Router>
);
export default DataBrowser;
