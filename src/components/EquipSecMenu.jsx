import React, { Component } from "react";
import { Link } from "react-router";
import { Menu } from "semantic-ui-react";

export default class NetworkSecMenu extends Component {
  state = { activeItem: "CMTS" };

  handleItemClick = (e, { name }) => {
    this.setState({ activeItem: name });
    // browserHistory.push({ pathname: "/network-cmts" });
  };

  render() {
    const { activeItem } = this.state;
    return (
      <div>
        <Menu pointing secondary>
          <Menu.Item
            name="CMTS"
            as={Link}
            to="/equip-cmts"
            active={activeItem === "CMTS"}
            onClick={this.handleItemClick}
          />
          <Menu.Item
            name="modem"
            as={Link}
            to="/equip-modem"
            active={activeItem === "modem"}
            onClick={this.handleItemClick}
          />
          {/*<div className="ui circular tiny label"  id="tab_cmts">2</div>*/}
          <Menu.Item
            name="MTA"
            as={Link}
            to="/equip-mta"
            active={activeItem === "MTA"}
            onClick={this.handleItemClick}
          />
          {/*<Menu.Menu position="right">
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
