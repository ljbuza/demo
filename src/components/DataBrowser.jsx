import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './Header';
import SideMenu from './SideMenu';
import SideMenuEquip from './SideMenuEquip';
import SideMenuSubscr from './SideMenuSubscr';
import SideMenuOrders from './SideMenuOrders';
import SideMenuAlerts from './SideMenuAlerts';
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
import SubscriberOverview from './SubscriberOverview';
import Order from './Order';
import Alerts from './Alerts';
import Map from './Map';
import MapNetwork from './MapNetwork';
import SecondaryMenu from './SecondaryMenu';
import SideMenuMap from './SideMenuMap';

const routes = [
  {
    path: '/databrowser',
    exact: true,
    header: () => (
      <Header title="Data Browser" subtitle="Network Information" />
    ),
    secondarymenu: () => <SecondaryMenu section="networkMenu" />,
    sidemenu: () => <SideMenu />,
    main: () => <div><NetworkCmts /></div>,
  },
  {
    path: '/databrowser/network-cmts',
    header: () => (
      <Header title="Data Browser" subtitle="Network Information" />
    ),
    sidemenu: () => <SideMenu />,
    secondarymenu: () => <SecondaryMenu section="networkMenu" />,
    main: () => <div><NetworkCmts /></div>,
  },
  {
    path: '/databrowser/network-mac',
    header: () => (
      <Header title="Data Browser" subtitle="Network Information" />
    ),
    sidemenu: () => <SideMenu />,
    secondarymenu: () => <SecondaryMenu section="networkMenu" />,
    main: () => <div><NetworkMac /></div>,
  },
  {
    path: '/databrowser/network-fiber',
    header: () => (
      <Header title="Data Browser" subtitle="Network Information" />
    ),
    sidemenu: () => <SideMenu />,
    secondarymenu: () => <SecondaryMenu section="networkMenu" />,
    main: () => <div><NetworkFiber /></div>,
  },
  {
    path: '/databrowser/network-cface',
    header: () => (
      <Header title="Data Browser" subtitle="Network Information" />
    ),
    sidemenu: () => <SideMenu />,
    secondarymenu: () => <SecondaryMenu section="networkMenu" />,
    main: () => <div><NetworkCface /></div>,
  },
  {
    path: '/databrowser/network-modem',
    header: () => (
      <Header title="Data Browser" subtitle="Network Information" />
    ),
    sidemenu: () => <SideMenu />,
    secondarymenu: () => <SecondaryMenu section="networkMenu" />,
    main: () => <div><NetworkModem /></div>,
  },
  {
    path: '/databrowser/network-mface',
    header: () => (
      <Header title="Data Browser" subtitle="Network Information" />
    ),
    sidemenu: () => <SideMenu />,
    secondarymenu: () => <SecondaryMenu section="networkMenu" />,
    main: () => <div><NetworkMface /></div>,
  },
  {
    path: '/databrowser/equip-cmts',
    header: () => (
      <Header title="Data Browser" subtitle="Equipment Information" />
    ),
    sidemenu: () => <SideMenuEquip />,
    secondarymenu: () => <SecondaryMenu section="equipmentMenu" />,
    main: () => <div><EquipCmts /></div>,
  },
  {
    path: '/databrowser/equip-modem',
    header: () => (
      <Header title="Data Browser" subtitle="Equipment Information" />
    ),
    sidemenu: () => <SideMenuEquip />,
    secondarymenu: () => <SecondaryMenu section="equipmentMenu" />,
    main: () => <div><EquipCmts /></div>,
  },
  {
    path: '/databrowser/equip-mta',
    header: () => (
      <Header title="Data Browser" subtitle="Equipment Information" />
    ),
    sidemenu: () => <SideMenuEquip />,
    secondarymenu: () => <SecondaryMenu section="equipmentMenu" />,
    main: () => <div><EquipCmts /></div>,
  },
  {
    path: '/databrowser/subscribers',
    exact: true,
    header: () => (
      <Header title="Data Browser" subtitle="Subscriber Information" />
    ),
    sidemenu: () => <SideMenuSubscr />,
    secondarymenu: () => <SecondaryMenu section="subscriberMenu" />,
    main: () => <div><Subscriber /></div>,
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
    main: () => <div><Order /></div>,
  },
  {
    path: '/databrowser/alerts',
    exact: true,
    header: () => <Header title="Data Browser" subtitle="Alerts Information" />,
    sidemenu: () => <SideMenuAlerts />,
    secondarymenu: () => <SecondaryMenu section="alertsMenu" />,
    main: () => <div><Order /></div>,
  },
  {
    path: '/databrowser/map',
    exact: true,
    header: () => <Header title="Data Browser" subtitle="Map Information" />,
    sidemenu: () => <SideMenuMap />,
    secondarymenu: () => <SecondaryMenu section="mapMenu" />,
    main: () => <div><Map /></div>,
  },
  {
    path: '/databrowser/map-network',
    exact: true,
    header: () => <Header title="Data Browser" subtitle="Map Information" />,
    sidemenu: () => <SideMenuMap />,
    secondarymenu: () => <SecondaryMenu section="mapMenu" />,
    main: () => <div><MapNetwork /></div>,
  },
];

export default class DataBrowser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      match: props.match,
      foo: 'bar',
      // data: tableData.tableData,
    };
  }

  render() {
    const { match, foo } = this.state;
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
                        component={NetworkCmts}
                      />
                      <Route
                        exact
                        path="/databrowser/network-mac"
                        component={NetworkMac}
                      />
                      <Route
                        exact
                        path="/databrowser/network-fiber"
                        component={NetworkFiber}
                      />
                      <Route
                        exact
                        path="/databrowser/network-cface"
                        component={NetworkCface}
                      />
                      <Route
                        exact
                        path="/databrowser/network-modem"
                        component={NetworkModem}
                      />
                      <Route
                        exact
                        path="/databrowser/network-mface"
                        component={NetworkMface}
                      />
                      <Route
                        exact
                        path="/databrowser/equip-cmts"
                        component={EquipCmts}
                      />
                      <Route
                        exact
                        path="/databrowser/equip-modem"
                        component={EquipModem}
                      />
                      <Route
                        exact
                        path="/databrowser/equip-mta"
                        component={EquipMta}
                      />
                      <Route
                        exact
                        path="/databrowser/subscribers"
                        component={Subscriber}
                      />
                      <Route
                        exact
                        path="/databrowser/orders"
                        component={Order}
                      />
                      <Route
                        exact
                        path="/databrowser/alerts"
                        component={Alerts}
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
