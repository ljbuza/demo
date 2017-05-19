import React, { Component } from 'react';
import { Table, Menu, Icon } from 'semantic-ui-react';

export default class Map extends Component {
  render() {
    return (
      <Table striped selectable sortable size="small" compact>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>US/DS</Table.HeaderCell>
            <Table.HeaderCell>Name</Table.HeaderCell>
            <Table.HeaderCell>CMTS</Table.HeaderCell>
            <Table.HeaderCell>SNR</Table.HeaderCell>
            <Table.HeaderCell>Micro-Reflections</Table.HeaderCell>
            <Table.HeaderCell>% Uncorrected</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          <Table.Row>
            <Table.Cell>Upstream</Table.Cell>
            <Table.Cell>Interface-1</Table.Cell>
            <Table.Cell>CMTS-1</Table.Cell>
            <Table.Cell>10</Table.Cell>
            <Table.Cell>2</Table.Cell>
            <Table.Cell>5</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>Upstream</Table.Cell>
            <Table.Cell>Interface-2</Table.Cell>
            <Table.Cell>CMTS-1</Table.Cell>
            <Table.Cell>10</Table.Cell>
            <Table.Cell>2</Table.Cell>
            <Table.Cell>5</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>Downstream</Table.Cell>
            <Table.Cell>Interface-1</Table.Cell>
            <Table.Cell>CMTS-1</Table.Cell>
            <Table.Cell>10</Table.Cell>
            <Table.Cell>2</Table.Cell>
            <Table.Cell>5</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>Upstream</Table.Cell>
            <Table.Cell>Interface-3</Table.Cell>
            <Table.Cell>CMTS-1</Table.Cell>
            <Table.Cell>10</Table.Cell>
            <Table.Cell>2</Table.Cell>
            <Table.Cell>5</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>Downstream</Table.Cell>
            <Table.Cell>Interface-3</Table.Cell>
            <Table.Cell>CMTS-1</Table.Cell>
            <Table.Cell>10</Table.Cell>
            <Table.Cell>2</Table.Cell>
            <Table.Cell>5</Table.Cell>
          </Table.Row>
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
