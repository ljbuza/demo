import React from 'react';
import { Route } from 'react-router';
import App from './App';
import Network from './components/Network';
import NetworkCmts from './components/NetworkCmts';
import NetworkMac from './components/NetworkMac';
import NetworkFiber from './components/NetworkFiber';
import NetworkCface from './components/NetworkCface';
import NetworkModem from './components/NetworkModem';
import NetworkMface from './components/NetworkMface';
import EquipCmts from './components/EquipCmts';
import EquipModem from './components/EquipModem';
import EquipMta from './components/EquipMta';
import Subscriber from './components/Subscriber';
import Order from './components/Order';
import Alerts from './components/Alerts';
import Dashboard from './components/Dashboard';

export default (
  <Route path="/" component={App}>
    {/* <IndexRoute component={Home} />*/}
    <Route path="/network" component={Network} />
    <Route
      path="/network-cmts"
      title="Data Browser"
      subheader="Network Information"
      component={NetworkCmts}
    />
    <Route
      path="/network-mac"
      title="Data Browser"
      subheader="Network Information"
      component={NetworkMac}
    />
    <Route
      path="/network-fiber"
      title="Data Browser"
      subheader="Network Information"
      component={NetworkFiber}
    />
    <Route
      path="/network-cface"
      title="Data Browser"
      subheader="Network Information"
      component={NetworkCface}
    />
    <Route
      path="/network-modem"
      title="Data Browser"
      subheader="Network Information"
      component={NetworkModem}
    />
    <Route
      path="/network-mface"
      title="Data Browser"
      subheader="Network Information"
      component={NetworkMface}
    />
    <Route
      path="/equip-cmts"
      title="Data Browser"
      subheader="Equipment Information"
      component={EquipCmts}
    />
    <Route
      path="/equip-modem"
      title="Data Browser"
      subheader="Equipment Information"
      component={EquipModem}
    />
    <Route
      path="/equip-mta"
      title="Data Browser"
      subheader="Equipment Information"
      component={EquipMta}
    />
    <Route
      path="/subscriber"
      title="Data Browser"
      subheader="Subscriber Information"
      component={Subscriber}
    />
    <Route
      path="/orders"
      title="Data Browser"
      subheader="Order Information"
      component={Order}
    />
    <Route
      path="/alerts"
      title="Data Browser"
      subheader="Alert Information"
      component={Alerts}
    />
    <Route
      path="/dashboard"
      title="Dashboard"
      subheader=""
      component={Dashboard}
    />
  </Route>
);
