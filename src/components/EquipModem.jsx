import React, { Component } from 'react';
import { Table, Menu, Icon } from 'semantic-ui-react';
import PickerFilterModal from './PickerFilterModal';
import SelectFilterModal from './SelectFilterModal';

export default class EquipModem extends Component {
  render() {
    return (
      <Table striped selectable sortable size="small" compact>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Name<SelectFilterModal /></Table.HeaderCell>
            <Table.HeaderCell>MAC<PickerFilterModal /></Table.HeaderCell>
            <Table.HeaderCell>Model</Table.HeaderCell>
            <Table.HeaderCell>Vendor</Table.HeaderCell>
            <Table.HeaderCell>Software Version</Table.HeaderCell>
            <Table.HeaderCell>IP Address</Table.HeaderCell>
            <Table.HeaderCell>Configuration</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          <Table.Row>
            <Table.Cell>Modem-1</Table.Cell>
            <Table.Cell>MAC-1</Table.Cell>
            <Table.Cell>Surfboard</Table.Cell>
            <Table.Cell>Alcatel</Table.Cell>
            <Table.Cell>2.0</Table.Cell>
            <Table.Cell>12.32.54.658</Table.Cell>
            <Table.Cell>xyz</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>Modem-2</Table.Cell>
            <Table.Cell>MAC-1</Table.Cell>
            <Table.Cell>Surfboard</Table.Cell>
            <Table.Cell>Alcatel</Table.Cell>
            <Table.Cell>2.0</Table.Cell>
            <Table.Cell>12.32.54.658</Table.Cell>
            <Table.Cell>xyz</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>Modem-3</Table.Cell>
            <Table.Cell>MAC-1</Table.Cell>
            <Table.Cell>Surfboard</Table.Cell>
            <Table.Cell>Alcatel</Table.Cell>
            <Table.Cell>2.0</Table.Cell>
            <Table.Cell>12.32.54.658</Table.Cell>
            <Table.Cell>xyz</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>Modem-4</Table.Cell>
            <Table.Cell>MAC-1</Table.Cell>
            <Table.Cell>Surfboard</Table.Cell>
            <Table.Cell>Alcatel</Table.Cell>
            <Table.Cell>2.0</Table.Cell>
            <Table.Cell>12.32.54.658</Table.Cell>
            <Table.Cell>xyz</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>Modem-5</Table.Cell>
            <Table.Cell>MAC-1</Table.Cell>
            <Table.Cell>Surfboard</Table.Cell>
            <Table.Cell>Alcatel</Table.Cell>
            <Table.Cell>2.0</Table.Cell>
            <Table.Cell>12.32.54.658</Table.Cell>
            <Table.Cell>xyz</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>Modem-6</Table.Cell>
            <Table.Cell>MAC-1</Table.Cell>
            <Table.Cell>Surfboard</Table.Cell>
            <Table.Cell>Alcatel</Table.Cell>
            <Table.Cell>2.0</Table.Cell>
            <Table.Cell>12.32.54.658</Table.Cell>
            <Table.Cell>xyz</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>Modem-7</Table.Cell>
            <Table.Cell>MAC-1</Table.Cell>
            <Table.Cell>Surfboard</Table.Cell>
            <Table.Cell>Alcatel</Table.Cell>
            <Table.Cell>2.0</Table.Cell>
            <Table.Cell>12.32.54.658</Table.Cell>
            <Table.Cell>xyz</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>Modem-8</Table.Cell>
            <Table.Cell>MAC-1</Table.Cell>
            <Table.Cell>Surfboard</Table.Cell>
            <Table.Cell>Alcatel</Table.Cell>
            <Table.Cell>2.0</Table.Cell>
            <Table.Cell>12.32.54.658</Table.Cell>
            <Table.Cell>xyz</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>Modem-9</Table.Cell>
            <Table.Cell>MAC-1</Table.Cell>
            <Table.Cell>Surfboard</Table.Cell>
            <Table.Cell>Alcatel</Table.Cell>
            <Table.Cell>2.0</Table.Cell>
            <Table.Cell>12.32.54.658</Table.Cell>
            <Table.Cell>xyz</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>Modem-10</Table.Cell>
            <Table.Cell>MAC-1</Table.Cell>
            <Table.Cell>Surfboard</Table.Cell>
            <Table.Cell>Alcatel</Table.Cell>
            <Table.Cell>2.0</Table.Cell>
            <Table.Cell>12.32.54.658</Table.Cell>
            <Table.Cell>xyz</Table.Cell>
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
