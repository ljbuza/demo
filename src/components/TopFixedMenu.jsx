import React, { Component } from "react";
import { Link } from "react-router";
import { Menu, Dropdown, Image, Input, Icon } from "semantic-ui-react";

const searchOptions = [
  { key: "All", text: "All", value: "All" },
  { key: "Name", text: "Name", value: "Name" },
  { key: "Address", text: "Address", value: "Address" },
  { key: "Order", text: "Order", value: "Order" }
];
// export const TopFixedMenu = () => (
export default class TopFixedMenu extends Component {
  constructor() {
    super();
    this.state = {
      isLoading: false,
      results: [],
      value: ""
    };
    // this.handleSearchChange = this.handleSearchChange.bind(this);
  }

  handleItemClick = (evt, { name }) => {
    // evt.preventDefault();
    // history.pushState(null, '', this.props.to);
    history.pushState(null, "", evt.currentTarget.href);
  };

  componentWillMount() {
    this.resetComponent();
  }

  resetComponent = () =>
    this.setState({ isLoading: false, results: [], value: "" });

  render() {
    // const { isLoading, value, results } = this.state;
    return (
      <Menu fixed="top" inverted>
        {/*<Menu.Item name="CMTS" as={Link} to="/equip-cmts">*/}
        <Menu.Item>
          <Image
            width="25px"
            src="img/BxE Logo.png"
            as={Link}
            href="/dashboard"
          />
        </Menu.Item>
        <Menu.Item>
          <Dropdown item text="Sections">
            <Dropdown.Menu>
              <Dropdown.Item as={Link} to="/dashboard" text="Dashboard" />
              <Dropdown.Divider />
              <Dropdown.Header>Data Browser</Dropdown.Header>
              <Dropdown.Item as={Link} to="/network-cmts" text="Network" />
              <Dropdown.Item as={Link} to="/equip-cmts" text="Equipment" />
              <Dropdown.Item as={Link} to="/subscriber" text="Subscribers" />
              <Dropdown.Item as={Link} to="/orders" text="Orders" />
              <Dropdown.Item as={Link} to="/alerts" text="Alerts" />
            </Dropdown.Menu>
          </Dropdown>
          <Input
            icon
            size="small"
            placeholder="Search..."
            label={<Dropdown defaultValue="All" options={searchOptions} />}
          />
        </Menu.Item>

        <div className="right item">
          <div className="ui right pointing label">
            Logged in as mabworthy
          </div>
          <a href="#">
            <h3><i className="user icon" /></h3>
          </a>
        </div>

      </Menu>
    );
  }
}
// BookRow.propTypes = {
//   title: React.PropTypes.string.isRequired,
//   author: React.PropTypes.string.isRequired,
// }
