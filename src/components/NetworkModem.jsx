import React, { Component } from 'react';
import { Table, Menu, Icon } from 'semantic-ui-react';

export default class NetworkModem extends Component {
  render() {
    return (
      <Table striped selectable sortable size="small" compact>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Name</Table.HeaderCell>
            <Table.HeaderCell>Fiber Node</Table.HeaderCell>
            <Table.HeaderCell>MAC Domain</Table.HeaderCell>
            <Table.HeaderCell>CMTS</Table.HeaderCell>
            <Table.HeaderCell>Status</Table.HeaderCell>
            <Table.HeaderCell>Upstream Interfaces</Table.HeaderCell>
            <Table.HeaderCell>Downstream Interfaces</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          <Table.Row>
            <Table.Cell>Modem-1</Table.Cell>
            <Table.Cell>Fiber-1</Table.Cell>
            <Table.Cell>MAC-1</Table.Cell>
            <Table.Cell>CMTS-1</Table.Cell>
            <Table.Cell>Online</Table.Cell>
            <Table.Cell>16</Table.Cell>
            <Table.Cell>3</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>Modem-2</Table.Cell>
            <Table.Cell>Fiber-1</Table.Cell>
            <Table.Cell>MAC-1</Table.Cell>
            <Table.Cell>CMTS-1</Table.Cell>
            <Table.Cell>Online</Table.Cell>
            <Table.Cell>16</Table.Cell>
            <Table.Cell>3</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>Modem-3</Table.Cell>
            <Table.Cell>Fiber-1</Table.Cell>
            <Table.Cell>MAC-1</Table.Cell>
            <Table.Cell>CMTS-1</Table.Cell>
            <Table.Cell>Online</Table.Cell>
            <Table.Cell>16</Table.Cell>
            <Table.Cell>3</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>Modem-4</Table.Cell>
            <Table.Cell>Fiber-1</Table.Cell>
            <Table.Cell>MAC-1</Table.Cell>
            <Table.Cell>CMTS-1</Table.Cell>
            <Table.Cell>Online</Table.Cell>
            <Table.Cell>16</Table.Cell>
            <Table.Cell>3</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>Modem-5</Table.Cell>
            <Table.Cell>Fiber-1</Table.Cell>
            <Table.Cell>MAC-1</Table.Cell>
            <Table.Cell>CMTS-1</Table.Cell>
            <Table.Cell>Online</Table.Cell>
            <Table.Cell>16</Table.Cell>
            <Table.Cell>3</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>Modem-6</Table.Cell>
            <Table.Cell>Fiber-1</Table.Cell>
            <Table.Cell>MAC-1</Table.Cell>
            <Table.Cell>CMTS-1</Table.Cell>
            <Table.Cell>Online</Table.Cell>
            <Table.Cell>16</Table.Cell>
            <Table.Cell>3</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>Modem-7</Table.Cell>
            <Table.Cell>Fiber-1</Table.Cell>
            <Table.Cell>MAC-1</Table.Cell>
            <Table.Cell>CMTS-1</Table.Cell>
            <Table.Cell>Offline</Table.Cell>
            <Table.Cell>16</Table.Cell>
            <Table.Cell>3</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>Modem-8</Table.Cell>
            <Table.Cell>Fiber-1</Table.Cell>
            <Table.Cell>MAC-1</Table.Cell>
            <Table.Cell>CMTS-1</Table.Cell>
            <Table.Cell>Online</Table.Cell>
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
