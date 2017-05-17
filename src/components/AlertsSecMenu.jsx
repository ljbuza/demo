import React, { Component } from "react";
import { Link, browserHistory } from "react-router-dom";
import { Menu } from "semantic-ui-react";

export default class AlertsSecMenu extends Component {
  state = { activeItem: "alerts" };

  handleItemClick = (e, { name }) => {
    this.setState({ activeItem: name });
    browserHistory.push({ pathname: "/alerts" });
  };

  render() {
    const { activeItem } = this.state;
    return (
      <div>
        <Menu pointing secondary>
          <Menu.Item
            name="alerts"
            as={Link}
            to="/alerts"
            active={activeItem === "alerts"}
            onClick={this.handleItemClick}
          />
        </Menu>
      </div>
    );
  }
}
