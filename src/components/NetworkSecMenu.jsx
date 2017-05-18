import React, { Component } from 'react';
import { NavLink, Link, BrowserRouter } from 'react-router-dom';
import { Menu } from 'semantic-ui-react';

export default class NetworkSecMenu extends Component {
  render() {
    // const section = this.props.section;
    return (
      <div>
        <Menu pointing secondary>
          <Menu.Item name="CMTS" as={NavLink} to="/databrowser/network-cmts" />
          <Menu.Item
            name="MAC domain"
            as={NavLink}
            to="/databrowser/network-mac"
          />
          <Menu.Item
            name="fiber node"
            as={NavLink}
            to="/databrowser/network-fiber"
          />
          <Menu.Item
            name="CMTS interface"
            as={NavLink}
            to="/databrowser/network-cface"
          />
          <Menu.Item
            name="modem"
            as={NavLink}
            to="/databrowser/network-modem"
          />
          <Menu.Item
            name="modem interface"
            as={NavLink}
            to="/databrowser/network-mface"
          />
          {/* <Menu.Menu position="right">
            <Menu.Item
              name="logout"
              active={activeItem === "logout"}
              onClick={this.handleItemClick}
            />
          </Menu.Menu>*/}
        </Menu>
      </div>
    );
  }
}
