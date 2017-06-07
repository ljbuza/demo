import _ from "lodash";
import React, { Component } from "react";
import { Table, Menu, Icon } from "semantic-ui-react";
import tableData from "../data/databrowserData.json";

export default class DbTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // data: tableData[props.view],
      data: props.data,
      column: null,
      direction: null
    };
  }

  componentDidMount() {
    // loadJson(this.props.view).then(data => this.setState({ data }));
  }
  // getOptions = field => {
  //   return Object.assign(
  //     this.state.data.map(d => ({
  //       key: d[field],
  //       text: d[field],
  //       value: d[field]
  //     }))
  //   );
  // };

  handleSort = clickedColumn => () => {
    const { column, data, direction } = this.state;
    if (column !== clickedColumn.cellname) {
      this.setState({
        column: clickedColumn.cellname,
        data: _.sortBy(data, [clickedColumn.cellname]),
        direction: "ascending"
      });
      return;
    }
    this.setState({
      data: data.reverse(),
      direction: direction === "ascending" ? "decending" : "ascending"
    });
  };

  // tableRows = () => {
  //   this.state.data.map((rows, index) => {
  //     let row = Object.values(rows).map(cell => (
  //       <Table.Cell>{cell}</Table.Cell>
  //     ));
  //     return <Table.Row key={index}>{row}</Table.Row>;
  //   });
  // };

  render() {
    const { column, data, direction } = this.state;
    const rowNames = Object.keys(data[0]);
    const filteredRows = [...data];
    if (this.props.filters) {
      rowNames.forEach((rowname) => {
        rowname = rowname.replace(' ', '-');
        if (this.props.filters[`${this.props.view}-${rowname}`]) {
          let colfilters = this.props.filters[`${this.props.view}-${rowname}`];
          if (colfilters.length > 0) {
            data.forEach((row) => {
              if (!colfilters.includes(row[rowname.replace('-', ' ')].toLowerCase())) {
                if (filteredRows.indexOf(row) > -1) {
                  filteredRows.splice(filteredRows.indexOf(row), 1)
                }
              }
            })
          }
        }
      })
    }

    return (
      <Table striped selectable sortable size="small" compact>
        <Table.Header>
          <Table.Row>
            {Object.keys(data[0]).map((cellname, index) => (
              <Table.HeaderCell
                key={index}
                sorted={column === { cellname } && direction}
                onClick={this.handleSort({ cellname })}
              >
                {cellname}
              </Table.HeaderCell>
            ))}
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {filteredRows.map((rows, index) => (
            <Table.Row key={index}>
              {Object.values(rows).map((cell, index) => (
                <Table.Cell key={index}>{cell}</Table.Cell>
              ))}
            </Table.Row>
          ))}
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
