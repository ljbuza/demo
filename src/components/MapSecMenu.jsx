import React, { Component } from 'react';
import { NavLink, browserHistory } from 'react-router-dom';
import { Menu } from 'semantic-ui-react';

export default class MapSecMenu extends Component {
  render() {
    return (
      <div>
        <Menu pointing secondary>
          <Menu.Item name="location" as={NavLink} to="/databrowser/map" />
          <Menu.Item
            name="network"
            as={NavLink}
            to="/databrowser/map-network"
          />
        </Menu>
      </div>
    );
  }
}
