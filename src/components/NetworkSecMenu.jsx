import React, { Component } from "react";
import { Link, browserHistory } from "react-router-dom";
import { Menu } from "semantic-ui-react";

export default class NetworkSecMenu extends Component {
  state = { activeItem: "CMTS" };

  handleItemClick = (e, { name }) => {
    this.setState({ activeItem: name });
    // browserHistory.push({ pathname: "/databrowser/network-mac" });
  };

  render() {
    const { activeItem } = this.state;
    // const section = this.props.section;
    return (
      <div>
        <Menu pointing secondary>
          <Menu.Item
            name="CMTS"
            as={Link}
            to="/databrowser/network-cmts"
            active={activeItem === "CMTS"}
            onClick={this.handleItemClick}
          />
          <Menu.Item
            name="MAC domain"
            as={Link}
            to="/databrowser/network-mac"
            active={activeItem === "MAC domain"}
            onClick={this.handleItemClick}
          />
          <Menu.Item
            name="fiber node"
            as={Link}
            to="/databrowser/network-fiber"
            active={activeItem === "fiber node"}
            onClick={this.handleItemClick}
          />
          <Menu.Item
            name="CMTS interface"
            as={Link}
            to="/databrowser/network-cface"
            active={activeItem === "CMTS interface"}
            onClick={this.handleItemClick}
          />
          <Menu.Item
            name="modem"
            as={Link}
            to="/databrowser/network-modem"
            active={activeItem === "modem"}
            onClick={this.handleItemClick}
          />
          <Menu.Item
            name="modem interface"
            as={Link}
            to="/databrowser/network-mface"
            active={activeItem === "modem interface"}
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
