import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './Header';
import SideMenu from './SideMenu';
import SideMenuEquip from './SideMenuEquip';
import SideMenuSubscr from './SideMenuSubscr';
import SideMenuOrders from './SideMenuOrders';
import SideMenuAlerts from './SideMenuAlerts';
import DbTable from './DbTable';
import Subscriber from './Subscriber';
import SubscriberOverview from './SubscriberOverview';
import Map from './Map';
import MapNetwork from './MapNetwork';
import SecondaryMenu from './SecondaryMenu';
import SideMenuMap from './SideMenuMap';
import tableData from '../data/databrowserData.json';

const routes = [
  {
    path: '/databrowser',
    exact: true,
    header: () => (
      <Header title="Data Browser" subtitle="Network Information" />
    ),
    secondarymenu: () => <SecondaryMenu section="networkMenu" />,
    sidemenu: () => (
      <SideMenu data={tableData} filters={[{ networkcmts: [] }]} />
    ),
    // main: () => <div><DbTable view="networkCmts" /></div>,
  },
  {
    path: '/databrowser/network-cmts',
    header: () => (
      <Header title="Data Browser" subtitle="Network Information" />
    ),
    sidemenu: () => (
      <SideMenu data={tableData} filters={[{ 'networkcmts-Name': [] }]} />
    ),
    secondarymenu: () => <SecondaryMenu section="networkMenu" />,
    // main: () => <div><DbTable view="networkCmts" /></div>,
  },
  {
    path: '/databrowser/network-mac',
    header: () => (
      <Header title="Data Browser" subtitle="Network Information" />
    ),
    sidemenu: () => <SideMenu data={tableData} filters={[]} />,
    secondarymenu: () => <SecondaryMenu section="networkMenu" />,
    // main: () => <div><NetworkMac /></div>,
  },
  {
    path: '/databrowser/network-fiber',
    header: () => (
      <Header title="Data Browser" subtitle="Network Information" />
    ),
    sidemenu: () => <SideMenu data={tableData} filters={[]} />,
    secondarymenu: () => <SecondaryMenu section="networkMenu" />,
    // main: () => <div><NetworkFiber /></div>,
  },
  {
    path: '/databrowser/network-cface',
    header: () => (
      <Header title="Data Browser" subtitle="Network Information" />
    ),
    sidemenu: () => (
      <SideMenu data={tableData} filters={{ 'networkcmts-Name': [] }} />
    ),
    secondarymenu: () => <SecondaryMenu section="networkMenu" />,
    // main: () => <div><NetworkCface /></div>,
  },
  {
    path: '/databrowser/network-modem',
    header: () => (
      <Header title="Data Browser" subtitle="Network Information" />
    ),
    sidemenu: () => <SideMenu data={tableData} filters={[]} />,
    secondarymenu: () => <SecondaryMenu section="networkMenu" />,
    // main: () => <div><NetworkModem /></div>,
  },
  {
    path: '/databrowser/network-mface',
    header: () => (
      <Header title="Data Browser" subtitle="Network Information" />
    ),
    sidemenu: () => <SideMenu data={tableData} filters={[]} />,
    secondarymenu: () => <SecondaryMenu section="networkMenu" />,
    // main: () => <div><NetworkMface /></div>,
  },
  {
    path: '/databrowser/equip-cmts',
    header: () => (
      <Header title="Data Browser" subtitle="Equipment Information" />
    ),
    sidemenu: () => <SideMenuEquip data={tableData} filters={[]} />,
    secondarymenu: () => <SecondaryMenu section="equipmentMenu" />,
    // main: () => <div><EquipCmts /></div>,
  },
  {
    path: '/databrowser/equip-modem',
    header: () => (
      <Header title="Data Browser" subtitle="Equipment Information" />
    ),
    sidemenu: () => <SideMenuEquip data={tableData} filters={[]} />,
    secondarymenu: () => <SecondaryMenu section="equipmentMenu" />,
    // main: () => <div><EquipCmts /></div>,
  },
  {
    path: '/databrowser/equip-mta',
    header: () => (
      <Header title="Data Browser" subtitle="Equipment Information" />
    ),
    sidemenu: () => <SideMenuEquip data={tableData} filters={[]} />,
    secondarymenu: () => <SecondaryMenu section="equipmentMenu" />,
    // main: () => <div><EquipCmts /></div>,
  },
  {
    path: '/databrowser/subscribers',
    exact: true,
    header: () => (
      <Header title="Data Browser" subtitle="Subscriber Information" />
    ),
    sidemenu: () => <SideMenuSubscr />,
    secondarymenu: () => <SecondaryMenu section="subscriberMenu" />,
    // main: () => <div><Subscriber /></div>,
  },
  {
    path: '/databrowser/subscribers/:userid',
    header: () => (
      <Header title="Noal Miles" subtitle="123 Main St, Anytown, WI" />
    ),
    sidemenu: () => <div />,
    secondarymenu: () => <div />,
  },
  {
    path: '/databrowser/orders',
    exact: true,
    header: () => <Header title="Data Browser" subtitle="Order Information" />,
    sidemenu: () => <SideMenuOrders />,
    secondarymenu: () => <SecondaryMenu section="orderMenu" />,
    // main: () => <div><Order /></div>,
  },
  {
    path: '/databrowser/alerts',
    exact: true,
    header: () => <Header title="Data Browser" subtitle="Alerts Information" />,
    sidemenu: () => <SideMenuAlerts />,
    secondarymenu: () => <SecondaryMenu section="alertsMenu" />,
    // main: () => <div><Order /></div>,
  },
  {
    path: '/databrowser/map',
    exact: true,
    header: () => <Header title="Data Browser" subtitle="Map Information" />,
    sidemenu: () => <SideMenuMap />,
    secondarymenu: () => <SecondaryMenu section="mapMenu" />,
    // main: () => <div><Map /></div>,
  },
  {
    path: '/databrowser/map-network',
    exact: true,
    header: () => <Header title="Data Browser" subtitle="Map Information" />,
    sidemenu: () => <SideMenuMap />,
    secondarymenu: () => <SecondaryMenu section="mapMenu" />,
    // main: () => <div><MapNetwork /></div>,
  },
];

export default class DataBrowser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: tableData,
      match: props.match,
      foo: 'bar',
      filters: [],
      // data: tableData.tableData,
    };
  }

  render() {
    const { match, foo, data } = this.state;
    return (
      // const DataBrowser = ({ match }) => (
      (
        <div>
          <div>
            {/* const extraProps = {title: 'Foo Bar Baz'};*/}
            {routes.map((route, index) => (
              <Route
                key={index}
                exact={route.exact}
                path={route.path}
                component={route.header}
                // render={props => <Header {...props} titles={route.header} />
              />
            ))}
            <div className="ui container" id="main_body">
              <Route
                path="/databrowser/subscribers/:userid"
                component={SubscriberOverview}
              />

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
                    {routes.map((route, index) => (
                      <Route
                        key={index}
                        path={route.path}
                        exact={route.exact}
                        component={route.sidemenu}
                      />
                    ))}
                  </div>
                  <div className="thirteen wide column">
                    <div className="ui vertical basic segment">
                      <Route
                        exact
                        path="/databrowser/network-cmts"
                        render={props => <DbTable data={data.networkCmts} />}
                      />
                      <Route
                        exact
                        path="/databrowser/network-mac"
                        render={props => <DbTable data={data.networkMac} />}
                      />
                      <Route
                        exact
                        path="/databrowser/network-fiber"
                        render={props => <DbTable data={data.networkFiber} />}
                      />
                      <Route
                        exact
                        path="/databrowser/network-cface"
                        render={props => <DbTable data={data.networkCface} />}
                      />
                      <Route
                        exact
                        path="/databrowser/network-modem"
                        render={props => <DbTable data={data.networkModem} />}
                      />
                      <Route
                        exact
                        path="/databrowser/network-mface"
                        render={props => <DbTable data={data.networkMface} />}
                      />
                      <Route
                        exact
                        path="/databrowser/equip-cmts"
                        render={props => <DbTable data={data.equipCmts} />}
                      />
                      <Route
                        exact
                        path="/databrowser/equip-modem"
                        render={props => <DbTable data={data.equipModem} />}
                      />
                      <Route
                        exact
                        path="/databrowser/equip-mta"
                        render={props => <DbTable data={data.equipMta} />}
                      />
                      <Route
                        exact
                        path="/databrowser/subscribers"
                        component={Subscriber}
                      />
                      <Route
                        exact
                        path="/databrowser/orders"
                        render={props => <DbTable data={data.orders} />}
                      />
                      <Route
                        exact
                        path="/databrowser/alerts"
                        render={props => <DbTable data={data.alerts} />}
                      />
                      <Route exact path="/databrowser/map" component={Map} />
                      <Route
                        exact
                        path="/databrowser/map-network"
                        component={MapNetwork}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    );
  }
}
