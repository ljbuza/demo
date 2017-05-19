import React, { Component } from 'react';
import { NavLink, Link, BrowserRouter } from 'react-router-dom';
import { Menu } from 'semantic-ui-react';

export default class NetworkSecMenu extends Component {
  render() {
    return (
      <div>
        <Menu pointing secondary>
          <Menu.Item name="CMTS" as={NavLink} to="/databrowser/equip-cmts" />
          <Menu.Item name="modem" as={NavLink} to="/databrowser/equip-modem" />
          <Menu.Item name="MTA" as={NavLink} to="/databrowser/equip-mta" />
        </Menu>
      </div>
    );
  }
}
