import _ from "lodash";
import React, { Component } from "react";
import {
  Checkbox,
  Table,
  Form,
  Menu,
  Icon,
  Popup,
  Segment,
  Label
} from "semantic-ui-react";
import Pagination from "./Pagination";

const ColumnSelect = props => {
  return (
    <Popup trigger={<Icon name="setting" />} position="bottom right" on="click">
      <Form>
        {props.rowNames.map((name, index) => (
          <Form.Field>
            <Checkbox
              slider
              key={name}
              defaultChecked={
                props.usedColumns.indexOf(name) > -1 ? true : false
              }
              label={name}
              onChange={props.handleColumnChoice}
            />
          </Form.Field>
        ))}
      </Form>
    </Popup>
  );
};

export default class DbTable extends Component {
  constructor(props) {
    super(props);
    this.handleColumnChoice = this.handleColumnChoice.bind(this);
    this.handleSort = this.handleSort.bind(this);
    this.state = {
      // data: tableData[props.view],
      data: props.data,
      sortColumn: null,
      columns: Object.keys(props.data[0]),
      usedColumns: props.usedColumns,
      direction: null
    };
  }

  componentWillMount() {
    // loadJson(this.props.view).then(data => this.setState({ data }));
    this.setState({
      usedColumns: [...Object.keys(this.props.data[0])]
    });
  }

  handleColumnChoice = evt => {
    const { data, sortColumn, columns, usedColumns, direction } = this.state;
    const columnChosen = evt.target.innerHTML;
    if (usedColumns.indexOf(columnChosen) !== -1) {
      this.setState({
        usedColumns: usedColumns.filter(e => e !== columnChosen)
      });
    } else {
      const chosenIndex = columns.indexOf(columnChosen);
      usedColumns.splice(chosenIndex, 0, columnChosen);
      this.setState({
        usedColumns: usedColumns
      });
    }
  };

  handlePageChange = () => console.log("changed page");

  handleSort = clickedColumn => () => {
    const { data, sortColumn, columns, usedColumns, direction } = this.state;
    if (sortColumn !== clickedColumn.cellname) {
      this.setState({
        sortColumn: clickedColumn.cellname,
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

  filterData = (data, usedColumns, filters) => {
    let filteredData = [...data];
    let pulls = [];
    filteredData.map((row, index) => {
      filteredData[index] = _.pick(row, usedColumns);
    });
    usedColumns.forEach(usedCol => {
      const colname = usedCol.replace(" ", "-");
      if (filters[`${this.props.view}-${colname}`]) {
        let colfilters = filters[`${this.props.view}-${colname}`];
        if (colfilters.length > 0) {
          filteredData.forEach(row => {
            if (
              !colfilters.includes(row[colname.replace("-", " ")].toLowerCase())
            ) {
              if (filteredData.indexOf(row) > -1) {
                pulls.push(filteredData.indexOf(row));
              }
            }
          });
        }
      }
    });
    _.pullAt(filteredData, pulls);
    return filteredData;
  };

  render() {
    const { data, sortColumn, columns, usedColumns, direction } = this.state;
    // const rowNames = Object.keys(data[0]);
    const filteredData = this.filterData(data, usedColumns, this.props.filters);
    return (
      <div>
        <Table striped selectable sortable size="small" compact>
          <Table.Header>
            <Table.Row>
              {Object.keys(filteredData[0]).map((cellname, index) => (
                <Table.HeaderCell
                  key={index}
                  sorted={sortColumn === { cellname } && direction}
                  onClick={this.handleSort({ cellname })}
                >
                  {cellname}
                  {index + 1 === Object.keys(filteredData[0]).length
                    ? <Label attached="top right">
                        <ColumnSelect
                          rowNames={columns}
                          usedColumns={usedColumns}
                          handleColumnChoice={this.handleColumnChoice}
                        />
                      </Label>
                    : ""}
                </Table.HeaderCell>
              ))}
            </Table.Row>
          </Table.Header>
          <Table.Body>

            {/*<Table.Cell>
              <Input
                style={{ width: "60px" }}
                size="mini"
                placeholder="filter..."
              />
            </Table.Cell>*/}
            {filteredData.map((rows, index) => (
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
                {/*<Pagination
              items={filteredData}
              onChangePage={this.handlePageChange}
            />*/}
                <Menu size="mini" floated="right" pagination>
                  <Menu.Item as="a" icon>
                    <Icon name="left chevron" />
                  </Menu.Item>
                  {[...Array(filteredData.length)].map(
                    (x, i) =>
                      i > 0 && i % 2 === 0
                        ? <Menu.Item key={i}>{i}</Menu.Item>
                        : ""
                  )}
                  <Menu.Item as="a" icon>
                    <Icon name="right chevron" />
                  </Menu.Item>
                </Menu>
              </Table.HeaderCell>
            </Table.Row>
          </Table.Footer>
        </Table>
      </div>
    );
  }
}
