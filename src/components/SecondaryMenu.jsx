import React, { Component } from 'react';
import { NavLink, browserRouter } from 'react-router-dom';
import { Menu } from 'semantic-ui-react';
import MenuItems from '../data/SecMenuItems.json';

export default class SecondaryMenu extends Component {
  render(props) {
    return (
      <div>
        <Menu pointing secondary>
          {MenuItems[this.props.section].map(({ name, to }, index) => (
            <Menu.Item name={name} as={NavLink} to={to} />
          ))}
        </Menu>
      </div>
    );
  }
}
