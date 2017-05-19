import React, { Component } from "react";
import { Link, browserHistory } from "react-router-dom";
import { Menu } from "semantic-ui-react";

export default class MapSecMenu extends Component {
  state = { activeItem: "map" };

  handleItemClick = (e, { name }) => {
    this.setState({ activeItem: name });
    browserHistory.push({ pathname: "/map" });
  };

  render() {
    const { activeItem } = this.state;
    return (
      <div>
        <Menu pointing secondary>
          <Menu.Item
            name="map"
            as={Link}
            to="/map"
            active={activeItem === "map"}
            onClick={this.handleItemClick}
          />
        </Menu>
      </div>
    );
  }
}
