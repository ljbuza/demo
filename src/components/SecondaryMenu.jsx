import React, { Component } from 'react';
import NetworkSecMenu from './NetworkSecMenu';
import EquipSecMenu from './EquipSecMenu';
import SubSecMenu from './SubSecMenu';
import OrderSecMenu from './OrderSecMenu';
import AlertsSecMenu from './AlertsSecMenu';

export default class SecondaryMenu extends Component {
  // state = { OrdeactiveItem: "CMTS" };

  // handleItemClick = (e, { name }) => {
  //   this.setState({ activeItem: name });
  //   // browserHistory.push({ pathname: "/network-cmts" });
  // };

  render() {
    // const { activeItem } = this.state;
    const section = this.props.section;

    if (section === 'Network Information') {
      return <NetworkSecMenu />;
    } else if (section === 'Equipment Information') {
      return <EquipSecMenu />;
    } else if (section === 'Subscriber Information') {
      return <SubSecMenu />;
    } else if (section === 'Order Information') {
      return <OrderSecMenu />;
    } else if (section === 'Alert Information') {
      return <AlertsSecMenu />;
    } else if (section === 'Dashboard') {
      return <AlertsSecMenu />;
    }
  }
}
