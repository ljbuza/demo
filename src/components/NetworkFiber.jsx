import React, { Component } from 'react';
import { Table, Menu, Icon } from 'semantic-ui-react';
import PickerFilterModal from './PickerFilterModal';
import SelectFilterModal from './SelectFilterModal';

export default class NetworkFiber extends Component {
  render() {
    return (
      <Table striped selectable sortable size="small" compact>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Name</Table.HeaderCell>
            <Table.HeaderCell>MAC Domain</Table.HeaderCell>
            <Table.HeaderCell>CMTS</Table.HeaderCell>
            <Table.HeaderCell>Alias</Table.HeaderCell>
            <Table.HeaderCell>Modems Online</Table.HeaderCell>
            <Table.HeaderCell>Modems Offline</Table.HeaderCell>
            <Table.HeaderCell>Upstream Interfaces</Table.HeaderCell>
            <Table.HeaderCell>Downstream Interfaces</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          <Table.Row>
            <Table.Cell>Fiber-1</Table.Cell>
            <Table.Cell>MAC-1</Table.Cell>
            <Table.Cell>CMTS-1</Table.Cell>
            <Table.Cell>foo</Table.Cell>
            <Table.Cell>1000</Table.Cell>
            <Table.Cell>200</Table.Cell>
            <Table.Cell>16</Table.Cell>
            <Table.Cell>3</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>Fiber-2</Table.Cell>
            <Table.Cell>MAC-2</Table.Cell>
            <Table.Cell>CMTS-1</Table.Cell>
            <Table.Cell>16</Table.Cell>
            <Table.Cell>1000</Table.Cell>
            <Table.Cell>200</Table.Cell>
            <Table.Cell>16</Table.Cell>
            <Table.Cell>3</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>Fiber-3</Table.Cell>
            <Table.Cell>MAC-3</Table.Cell>
            <Table.Cell>CMTS-2</Table.Cell>
            <Table.Cell>16</Table.Cell>
            <Table.Cell>1000</Table.Cell>
            <Table.Cell>200</Table.Cell>
            <Table.Cell>16</Table.Cell>
            <Table.Cell>3</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>Fiber-4</Table.Cell>
            <Table.Cell>CMTS-2</Table.Cell>
            <Table.Cell>CMTS-3</Table.Cell>
            <Table.Cell>16</Table.Cell>
            <Table.Cell>1000</Table.Cell>
            <Table.Cell>200</Table.Cell>
            <Table.Cell>16</Table.Cell>
            <Table.Cell>3</Table.Cell>
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
