import React, { Component } from 'react';
import { Table, Menu, Icon } from 'semantic-ui-react';
import PickerFilterModal from './PickerFilterModal';
import SelectFilterModal from './SelectFilterModal';

export default class Order extends Component {
  render() {
    return (
      <Table striped selectable sortable size="small" compact>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>BxE Order<SelectFilterModal /></Table.HeaderCell>
            <Table.HeaderCell>BSS Order<PickerFilterModal /></Table.HeaderCell>
            <Table.HeaderCell>Order Status</Table.HeaderCell>
            <Table.HeaderCell>Provisioned?</Table.HeaderCell>
            <Table.HeaderCell>Modified</Table.HeaderCell>
            <Table.HeaderCell>Created</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          <Table.Row>
            <Table.Cell>123</Table.Cell>
            <Table.Cell>ABC</Table.Cell>
            <Table.Cell>In Progress</Table.Cell>
            <Table.Cell>Yes</Table.Cell>
            <Table.Cell>12 Dec 2017</Table.Cell>
            <Table.Cell>12 Dec 2017</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>123</Table.Cell>
            <Table.Cell>ABC</Table.Cell>
            <Table.Cell positive>Complete</Table.Cell>
            <Table.Cell>Yes</Table.Cell>
            <Table.Cell>12 Dec 2017</Table.Cell>
            <Table.Cell>12 Dec 2017</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>123</Table.Cell>
            <Table.Cell>ABC</Table.Cell>
            <Table.Cell>In Progress</Table.Cell>
            <Table.Cell>Yes</Table.Cell>
            <Table.Cell>12 Dec 2017</Table.Cell>
            <Table.Cell>12 Dec 2017</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>123</Table.Cell>
            <Table.Cell>ABC</Table.Cell>
            <Table.Cell negative>Problem</Table.Cell>
            <Table.Cell>Yes</Table.Cell>
            <Table.Cell>12 Dec 2017</Table.Cell>
            <Table.Cell>12 Dec 2017</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>123</Table.Cell>
            <Table.Cell>ABC</Table.Cell>
            <Table.Cell positive>Complete</Table.Cell>
            <Table.Cell>Yes</Table.Cell>
            <Table.Cell>12 Dec 2017</Table.Cell>
            <Table.Cell>12 Dec 2017</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>123</Table.Cell>
            <Table.Cell>ABC</Table.Cell>
            <Table.Cell positive>Complete</Table.Cell>
            <Table.Cell>Yes</Table.Cell>
            <Table.Cell>12 Dec 2017</Table.Cell>
            <Table.Cell>12 Dec 2017</Table.Cell>
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
