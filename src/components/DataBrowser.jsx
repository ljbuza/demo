<<<<<<< Updated upstream
import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { observer } from 'mobx-react';
import { withRouter } from 'react-router';
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
import DataBrowserStore from '../stores/DataBrowserStore';
import AlertBrowserStore from '../stores/AlertBrowserStore';
import EquipBrowserStore from '../stores/EquipBrowserStore';
import OrderBrowserStore from '../stores/OrderBrowserStore';
=======
import React, { Component } from "react";
import { Route } from "react-router-dom";
import { observer } from "mobx-react";
import { withRouter } from "react-router";
import Header from "./Header";
import SideMenu from "./SideMenu";
import SideMenuEquip from "./SideMenuEquip";
import SideMenuSubscr from "./SideMenuSubscr";
import SideMenuOrders from "./SideMenuOrders";
import SideMenuAlerts from "./SideMenuAlerts";
import DbTable from "./DbTable";
import Subscriber from "./Subscriber";
import SubscriberOverview from "./SubscriberOverview";
import Map from "./Map";
import MapNetwork from "./MapNetwork";
import SecondaryMenu from "./SecondaryMenu";
import SideMenuMap from "./SideMenuMap";
// import tableData from "../data/databrowserData.json";
import DataBrowserStore from "../stores/DataBrowserStore";
import AlertBrowserStore from "../stores/AlertBrowserStore";
import EquipBrowserStore from "../stores/EquipBrowserStore";
import OrderBrowserStore from "../stores/OrderBrowserStore";
>>>>>>> Stashed changes

const routes = [
  {
    path: '/databrowser',
    exact: true,
    header: () => (
      <Header title="Data Browser" subtitle="Network Information" />
    ),
    secondarymenu: () => <SecondaryMenu section="networkMenu" />,
    sidemenu: () => <SideMenu store={DataBrowserStore} />,
  },
  {
    path: '/databrowser/network-cmts',
    header: () => (
      <Header title="Data Browser" subtitle="Network Information" />
    ),
    sidemenu: () => <SideMenu store={DataBrowserStore} />,
    secondarymenu: () => <SecondaryMenu section="networkMenu" />,
  },
  {
    path: '/databrowser/network-mac',
    header: () => (
      <Header title="Data Browser" subtitle="Network Information" />
    ),
    sidemenu: () => <SideMenu store={DataBrowserStore} />,
    secondarymenu: () => <SecondaryMenu section="networkMenu" />,
  },
  {
    path: '/databrowser/network-fiber',
    header: () => (
      <Header title="Data Browser" subtitle="Network Information" />
    ),
    sidemenu: () => <SideMenu store={DataBrowserStore} />,
    secondarymenu: () => <SecondaryMenu section="networkMenu" />,
  },
  {
    path: '/databrowser/network-mdface',
    header: () => (
      <Header title="Data Browser" subtitle="Network Information" />
    ),
    sidemenu: () => <SideMenu store={DataBrowserStore} />,
    secondarymenu: () => <SecondaryMenu section="networkMenu" />,
  },
  {
    path: '/databrowser/network-fnface',
    header: () => (
      <Header title="Data Browser" subtitle="Network Information" />
    ),
    sidemenu: () => <SideMenu store={DataBrowserStore} />,
    secondarymenu: () => <SecondaryMenu section="networkMenu" />,
  },
  {
    path: '/databrowser/equip-cmts',
    header: () => (
      <Header title="Data Browser" subtitle="Equipment Information" />
    ),
    sidemenu: () => <SideMenuEquip store={EquipBrowserStore} />,
    secondarymenu: () => <SecondaryMenu section="equipmentMenu" />,
  },
  {
    path: '/databrowser/equip-modem',
    header: () => (
      <Header title="Data Browser" subtitle="Equipment Information" />
    ),
    sidemenu: () => <SideMenuEquip store={EquipBrowserStore} />,
    secondarymenu: () => <SecondaryMenu section="equipmentMenu" />,
  },
  {
    path: '/databrowser/equip-mta',
    header: () => (
      <Header title="Data Browser" subtitle="Equipment Information" />
    ),
    sidemenu: () => <SideMenuEquip store={EquipBrowserStore} />,
    secondarymenu: () => <SecondaryMenu section="equipmentMenu" />,
  },
  {
    path: '/databrowser/subscribers',
    exact: true,
    header: () => (
      <Header title="Data Browser" subtitle="Subscriber Information" />
    ),
    sidemenu: () => <SideMenuSubscr />,
    secondarymenu: () => <SecondaryMenu section="subscriberMenu" />,
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
  },
  {
    path: '/databrowser/alerts',
    exact: true,
    header: () => <Header title="Data Browser" subtitle="Alerts Information" />,
    sidemenu: () => <SideMenuAlerts store={AlertBrowserStore} />,
    secondarymenu: () => <SecondaryMenu section="alertsMenu" />,
  },
  {
    path: '/databrowser/map',
    exact: true,
    header: () => <Header title="Data Browser" subtitle="Map Information" />,
    sidemenu: () => <SideMenuMap />,
    secondarymenu: () => <SecondaryMenu section="mapMenu" />,
  },
  {
    path: '/databrowser/map-network',
    exact: true,
    header: () => <Header title="Data Browser" subtitle="Map Information" />,
    sidemenu: () => <SideMenuMap />,
    secondarymenu: () => <SecondaryMenu section="mapMenu" />,
  },
];

const DataBrowser = observer(
  class DataBrowser extends Component {
    // @observer class DataBrowser extends Component {
    // constructor(props) {
<<<<<<< Updated upstream
    // super(props);
    // this.handleChange = this.handleChange.bind(this);
    // this.handleClearForm = this.handleClearForm.bind(this);
    // this.state = {
    //   match: props.match,
    //   filters: {},
    //   data: [],
    //   usedColumns: []
    // };
=======
      // super(props);
      // this.handleChange = this.handleChange.bind(this);
      // this.handleClearForm = this.handleClearForm.bind(this);
      // this.state = {
      //   match: props.match,
      //   filters: {},
      //   data: [],
      //   usedColumns: []
      // };
>>>>>>> Stashed changes
    // }

    // loadData() {
    //   fetch("data.json").then(response => response.json()).then(json => {
    //     console.log(json);
    //     this.setState({
    //       data: json
    //     });
    //   });
    // }

    // componentWillMount() {
    //   this.setState({
    //     data: tableData
    //   });
    //   // fetch("../data/databrowserData.json").then(res => res.json()).then(data => {
    //   console.log("data found: ", data);
    //   this.setState({
    //     data: data
    // filters: {}
    // }

    // handleClearForm() {
    //   this.setState({ filters: {} });
    // }

    // handleChange = (evt, { name, value }) => {
    //   const filters = this.state.filters;
    //   filters[name] = value;
    //   this.setState({ filters: filters });
    // };

    render() {
      return (
        <div>
          <div>
            {routes.map((route, index) => (
              <Route
                key={index}
                exact={route.exact}
                path={route.path}
                component={route.header}
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
                    {/* <Route
                      exact
                      path="/databrowser/subscribers/:id"
                      render={props => <div />}
                    />
                    <Route
                      path="/databrowser/network-*"
                      render={props => <SideMenu store={DataBrowserStore} />}
                    />
                    <Route
                      exact
                      path="/databrowser/alerts"
                      render={props => <SideMenuAlerts />}
                    /> */}
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
                        render={props => (
                          <DbTable
                            location={location}
                            store={DataBrowserStore}
                            view="cmts"
                          />
                        )}
                      />
                      <Route
                        exact
                        path="/databrowser/network-mac"
                        render={props => (
                          <DbTable
                            store={DataBrowserStore}
                            view="mac domains"
                          />
                        )}
                      />
                      <Route
                        exact
                        path="/databrowser/network-fiber"
                        render={props => (
                          <DbTable
                            store={DataBrowserStore}
                            view="fiber nodes"
                          />
                        )}
                      />
                      <Route
                        exact
                        path="/databrowser/network-mdface"
                        render={props => (
                          <DbTable
                            store={DataBrowserStore}
                            view="md interfaces"
                          />
                        )}
                      />
                      <Route
                        exact
                        path="/databrowser/network-fnface"
                        render={props => (
                          <DbTable
                            store={DataBrowserStore}
                            view="fn interfaces"
                          />
                        )}
                      />
                      <Route
                        exact
                        path="/databrowser/equip-cmts"
                        render={props => (
                          <DbTable store={EquipBrowserStore} view="cmts" />
                        )}
                      />
                      <Route
                        exact
                        path="/databrowser/equip-modem"
                        render={props => (
                          <DbTable store={EquipBrowserStore} view="modem" />
                        )}
                      />
                      <Route
                        exact
                        path="/databrowser/equip-mta"
                        render={props => (
                          <DbTable store={EquipBrowserStore} view="mta" />
                        )}
                      />
                      <Route
                        exact
                        path="/databrowser/subscribers"
                        render={props => <DbTable view="mta" />}
                        component={Subscriber}
                      />
                      <Route
                        exact
                        path="/databrowser/orders"
                        render={props => (
                          <DbTable store={OrderBrowserStore} view="orders" />
                        )}
                      />
                      <Route
                        exact
                        path="/databrowser/alerts"
                        render={props => (
                          <DbTable store={AlertBrowserStore} view="alerts" />
                        )}
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
      );
    }
  },
);

export default withRouter(DataBrowser);
