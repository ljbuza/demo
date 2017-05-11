import _ from "lodash";
import React, { Component } from "react";
import { Table, Menu, Icon } from "semantic-ui-react";
import PickerFilterModal from "./PickerFilterModal";
import SelectFilterModal from "./SelectFilterModal";
import tableData from "../data/networkMacData.js";

export default class NetworkMac extends Component {
  state = {
    column: null,
    data: tableData.tableData,
    direction: null
  };

  getOptions = field => {
    return Object.assign(
      this.state.data.map(d => ({
        key: d[field],
        text: d[field],
        value: d[field]
      }))
    );
  };

  handleSort = clickedColumn => () => {
    const { column, data, direction } = this.state;
    if (column !== clickedColumn) {
      this.setState({
        column: clickedColumn,
        data: _.sortBy(data, [clickedColumn]),
        direction: "ascending"
      });
      return;
    }
    this.setState({
      data: data.reverse(),
      direction: direction === "ascending" ? "decending" : "ascending"
    });
  };

  render() {
    const { column, data, direction } = this.state;
    return (
      <Table striped selectable sortable size="small" compact>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Name<SelectFilterModal /></Table.HeaderCell>
            <Table.HeaderCell>CMTS<PickerFilterModal /></Table.HeaderCell>
            <Table.HeaderCell>Alias</Table.HeaderCell>
            <Table.HeaderCell>Fiber Nodes</Table.HeaderCell>
            <Table.HeaderCell>Modems Online</Table.HeaderCell>
            <Table.HeaderCell>Modems Offline</Table.HeaderCell>
            <Table.HeaderCell>Upstream Interfaces</Table.HeaderCell>
            <Table.HeaderCell>Downstream Interfaces</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {_.map(
            data,
            ({
              name,
              cmts,
              alias,
              fiber,
              modemOnline,
              modemOffline,
              upInterfaces,
              downInterfaces
            }) => (
              <Table.Row key={name}>
                <Table.Cell>{name}</Table.Cell>
                <Table.Cell>{cmts}</Table.Cell>
                <Table.Cell>{alias}</Table.Cell>
                <Table.Cell>{fiber}</Table.Cell>
                <Table.Cell>{modemOnline}</Table.Cell>
                <Table.Cell>{modemOffline}</Table.Cell>
                <Table.Cell>{upInterfaces}</Table.Cell>
                <Table.Cell>{downInterfaces}</Table.Cell>
              </Table.Row>
            )
          )}
        </Table.Body>
        <Table.Footer>
          <Table.Row>
            <Table.HeaderCell colSpan="10">
              <Menu size="mini" floated="right" pagination>
                <Menu.Item as="a" icon>
                  <Icon name="left chevron" />
                </Menu.Item>
                <Menu.Item as="a">1</Menu.Item>
                <Menu.Item as="a">2</Menu.Item>
                <Menu.Item as="a">3</Menu.Item>
                <Menu.Item as="a">4</Menu.Item>
                <Menu.Item as="a" icon>
                  <Icon name="right chevron" />
                </Menu.Item>
              </Menu>
            </Table.HeaderCell>
          </Table.Row>
        </Table.Footer>
      </Table>
    );
  }
}
