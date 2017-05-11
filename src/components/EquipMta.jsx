import React, { Component } from 'react';
import { Table, Menu, Icon } from 'semantic-ui-react';
import PickerFilterModal from './PickerFilterModal';
import SelectFilterModal from './SelectFilterModal';

export default class EquipMta extends Component {
  render() {
    return (
      <Table striped selectable sortable size="small" compact>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Name<SelectFilterModal /></Table.HeaderCell>
            <Table.HeaderCell>IP Address<PickerFilterModal /></Table.HeaderCell>
            <Table.HeaderCell>Model</Table.HeaderCell>
            <Table.HeaderCell>Software Version</Table.HeaderCell>
            <Table.HeaderCell>CPU</Table.HeaderCell>
            <Table.HeaderCell>Memory</Table.HeaderCell>
            <Table.HeaderCell>Temp</Table.HeaderCell>
            <Table.HeaderCell>Uptime</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          <Table.Row>
            <Table.Cell>CMTS-1</Table.Cell>
            <Table.Cell>12.32.54.658</Table.Cell>
            <Table.Cell>Alcatel</Table.Cell>
            <Table.Cell>2.0</Table.Cell>
            <Table.Cell>80%</Table.Cell>
            <Table.Cell>70%</Table.Cell>
            <Table.Cell>50</Table.Cell>
            <Table.Cell>50</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>CMTS-2</Table.Cell>
            <Table.Cell>12.32.54.658</Table.Cell>
            <Table.Cell>Alcatel</Table.Cell>
            <Table.Cell>2.0</Table.Cell>
            <Table.Cell>80%</Table.Cell>
            <Table.Cell>70%</Table.Cell>
            <Table.Cell>50</Table.Cell>
            <Table.Cell>50</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>CMTS-3</Table.Cell>
            <Table.Cell>12.32.54.658</Table.Cell>
            <Table.Cell>Alcatel</Table.Cell>
            <Table.Cell>2.0</Table.Cell>
            <Table.Cell>80%</Table.Cell>
            <Table.Cell>70%</Table.Cell>
            <Table.Cell>50</Table.Cell>
            <Table.Cell>50</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>CMTS-4</Table.Cell>
            <Table.Cell>12.32.54.658</Table.Cell>
            <Table.Cell>Alcatel</Table.Cell>
            <Table.Cell>2.0</Table.Cell>
            <Table.Cell>80%</Table.Cell>
            <Table.Cell>70%</Table.Cell>
            <Table.Cell>50</Table.Cell>
            <Table.Cell>50</Table.Cell>
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
