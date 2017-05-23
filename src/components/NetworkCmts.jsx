import _ from "lodash";
import React, { Component } from "react";
import { Table, Menu, Icon } from "semantic-ui-react";
import PickerFilterModal from "./PickerFilterModal";
import tableData from "../data/networkData.js";
import SelectFilterModal from "./SelectFilterModal";

export default class NetworkCmts extends Component {
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
            <Table.HeaderCell
              sorted={column === "name" && direction}
              onClick={this.handleSort("name")}
            >
              Name
            </Table.HeaderCell>
            <Table.HeaderCell
              sorted={column === "ip" && direction}
              onClick={this.handleSort("ip")}
            >
              IP Address
            </Table.HeaderCell>
            <Table.HeaderCell
              sorted={column === "model" && direction}
              onClick={this.handleSort("model")}
            >
              Model
            </Table.HeaderCell>
            <Table.HeaderCell
              sorted={column === "software" && direction}
              onClick={this.handleSort("software")}
            >
              Software Version
            </Table.HeaderCell>
            <Table.HeaderCell
              sorted={column === "cpu" && direction}
              onClick={this.handleSort("cpu")}
            >
              CPU
            </Table.HeaderCell>
            <Table.HeaderCell
              sorted={column === "memory" && direction}
              onClick={this.handleSort("memory")}
            >
              Memory
            </Table.HeaderCell>
            <Table.HeaderCell
              sorted={column === "temp" && direction}
              onClick={this.handleSort("temp")}
            >
              Temp
            </Table.HeaderCell>
            <Table.HeaderCell
              sorted={column === "uptime" && direction}
              onClick={this.handleSort("uptime")}
            >
              Uptime
            </Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {_.map(
            data,
            ({ name, ip, model, software, cpu, memory, temp, uptime }) => (
              <Table.Row key={ip}>
                <Table.Cell>{name}</Table.Cell>
                <Table.Cell>{ip}</Table.Cell>
                <Table.Cell>{model}</Table.Cell>
                <Table.Cell>{software}</Table.Cell>
                <Table.Cell>{cpu}</Table.Cell>
                <Table.Cell>{memory}</Table.Cell>
                <Table.Cell>{temp}</Table.Cell>
                <Table.Cell>{uptime}</Table.Cell>
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
