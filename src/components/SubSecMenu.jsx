import React, { Component } from "react";
import { Link, browserHistory } from "react-router";
import { Menu } from "semantic-ui-react";

export default class SubSecMenu extends Component {
  state = { activeItem: "subscribers" };

  handleItemClick = (e, { name }) => {
    this.setState({ activeItem: name });
    browserHistory.push({ pathname: "/subscriber" });
  };

  render() {
    const { activeItem } = this.state;
    return (
      <div>
        <Menu pointing secondary>
          <Menu.Item
            name="subscribers"
            as={Link}
            to="/subscribers"
            active={activeItem === "subscribers"}
            onClick={this.handleItemClick}
          />
        </Menu>
      </div>
    );
  }
}
