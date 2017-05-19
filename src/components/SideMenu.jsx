import React, { Component } from 'react';
import {
  Form,
  Modal,
  Input,
  Menu,
  Label,
  Button,
  Dropdown,
} from 'semantic-ui-react';
import Picker from './Picker';

export default class SideMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: true,
    };
  }

  render() {
    return (
      <div className="ui basic segment">
        <Menu compact text vertical>
          <Menu.Item>
            <Menu.Header>View Filters</Menu.Header>
            <Menu.Menu>
              <Modal
                dimmer="blurring"
                trigger={
                  <Menu.Item name="cmts">
                    <Label color="blue">1</Label>CMTS
                  </Menu.Item>
                }
              >
                <Modal.Header>CMTS Filters</Modal.Header>
                <Modal.Content>
                  <Form>
                    <Form.Select
                      label="CMTS Name"
                      multiple
                      options={[
                        { key: 'cmts-1', text: 'CMTS-1', value: 'cmts-1' },
                        { key: 'cmts-2', text: 'CMTS-2', value: 'cmts-2' },
                        { key: 'cmts-3', text: 'CMTS-3', value: 'cmts-3' },
                        { key: 'cmts-4', text: 'CMTS-4', value: 'cmts-4' },
                      ]}
                      placeholder="CMTS Name"
                    />
                    <Form.Select
                      label="Model"
                      multiple
                      options={[
                        { key: 'alcatel', text: 'Alcatel', value: 'alcatel' },
                        { key: 'arris', text: 'Arris', value: 'arris' },
                      ]}
                      placeholder="Model"
                    />
                    <Form.Select
                      label="Software Version"
                      multiple
                      options={[
                        { key: '1.0', text: '1.0', value: '1.0' },
                        { key: '2.0', text: '2.0', value: '2.0' },
                      ]}
                      placeholder="Software Version"
                    />
                    <label>CPU</label>
                    <Picker />
                    <label>Memory</label>
                    <Picker />
                    <label>Temp</label>
                    <Picker />
                    <label>Uptime</label>
                    <Picker />
                  </Form>
                </Modal.Content>
                <Modal.Actions>
                  <Button color="black" size="small" onClick={this.close}>
                    Cancel
                  </Button>
                  <Button
                    positive
                    size="small"
                    icon="checkmark"
                    labelPosition="right"
                    content="Apply"
                    onClick={this.close}
                  />
                </Modal.Actions>
              </Modal>

              <Modal
                dimmer="blurring"
                trigger={
                  <Menu.Item name="mac-domain">
                    MAC Domain
                  </Menu.Item>
                }
              >
                <Modal.Header>CMTS Filters</Modal.Header>
                <Modal.Content>
                  <Form>
                    <Form.Select
                      label="MD Name"
                      multiple
                      options={[
                        { key: 'md-1', text: 'MD-1', value: 'md-1' },
                        { key: 'md-2', text: 'MD-2', value: 'md-2' },
                        { key: 'md-3', text: 'MD-3', value: 'md-3' },
                        { key: 'md-4', text: 'MD-4', value: 'md-4' },
                      ]}
                      placeholder="MD Name"
                    />
                    <Form.Select
                      label="CMTS Name"
                      multiple
                      options={[
                        { key: 'cmts-1', text: 'CMTS-1', value: 'cmts-1' },
                        { key: 'cmts-2', text: 'CMTS-2', value: 'cmts-2' },
                        { key: 'cmts-3', text: 'CMTS-3', value: 'cmts-3' },
                        { key: 'cmts-4', text: 'CMTS-4', value: 'cmts-4' },
                      ]}
                      placeholder="CMTS Name"
                    />
                    <Form.Select
                      label="Alias"
                      multiple
                      options={[
                        { key: 'alcatel', text: 'Alcatel', value: 'alcatel' },
                        { key: 'arris', text: 'Arris', value: 'arris' },
                      ]}
                      placeholder="Alias"
                    />
                    <label>Fiber Nodes</label>
                    <Picker />
                    <label>Modems Online</label>
                    <Picker />
                    <label>Modems Offline</label>
                    <Picker />
                    <label>Upstream Interfaces</label>
                    <Picker />
                    <label>Downstream Interfaces</label>
                    <Picker />
                  </Form>
                </Modal.Content>
                <Modal.Actions>
                  <Button color="black" size="small" onClick={this.close}>
                    Cancel
                  </Button>
                  <Button
                    positive
                    size="small"
                    icon="checkmark"
                    labelPosition="right"
                    content="Apply"
                    onClick={this.close}
                  />
                </Modal.Actions>
              </Modal>

              <Modal
                dimmer="blurring"
                trigger={
                  <Menu.Item name="fiber-node">
                    <Label color="blue">2</Label>Fiber Node
                  </Menu.Item>
                }
              >
                <Modal.Header>Fiber Node Filters</Modal.Header>
                <Modal.Content>
                  <Form>
                    <Form.Select
                      label="Fiber Node"
                      multiple
                      options={[
                        { key: 'fiber-1', text: 'Fiber-1', value: 'fiber-1' },
                        { key: 'fiber-2', text: 'Fiber-2', value: 'fiber-2' },
                        { key: 'fiber-3', text: 'Fiber-3', value: 'fiber-3' },
                        { key: 'fiber-4', text: 'Fiber-4', value: 'fiber-4' },
                      ]}
                      placeholder="Fiber Node"
                    />
                    <Form.Select
                      label="MD Name"
                      multiple
                      options={[
                        { key: 'md-1', text: 'MD-1', value: 'md-1' },
                        { key: 'md-2', text: 'MD-2', value: 'md-2' },
                        { key: 'md-3', text: 'MD-3', value: 'md-3' },
                        { key: 'md-4', text: 'MD-4', value: 'md-4' },
                      ]}
                      placeholder="MD Name"
                    />
                    <Form.Select
                      label="CMTS Name"
                      multiple
                      options={[
                        { key: 'cmts-1', text: 'CMTS-1', value: 'cmts-1' },
                        { key: 'cmts-2', text: 'CMTS-2', value: 'cmts-2' },
                        { key: 'cmts-3', text: 'CMTS-3', value: 'cmts-3' },
                        { key: 'cmts-4', text: 'CMTS-4', value: 'cmts-4' },
                      ]}
                      placeholder="CMTS Name"
                    />
                    <Form.Select
                      label="Alias"
                      multiple
                      options={[
                        { key: 'alcatel', text: 'Alcatel', value: 'alcatel' },
                        { key: 'arris', text: 'Arris', value: 'arris' },
                      ]}
                      placeholder="Alias"
                    />
                    <label>Modems Online</label>
                    <Picker />
                    <label>Modems Offline</label>
                    <Picker />
                    <label>Upstream Interfaces</label>
                    <Picker />
                    <label>Downstream Interfaces</label>
                    <Picker />
                  </Form>
                </Modal.Content>
                <Modal.Actions>
                  <Button color="black" size="small" onClick={this.close}>
                    Cancel
                  </Button>
                  <Button
                    positive
                    size="small"
                    icon="checkmark"
                    labelPosition="right"
                    content="Apply"
                    onClick={this.close}
                  />
                </Modal.Actions>
              </Modal>

              <Modal
                dimmer="blurring"
                trigger={
                  <Menu.Item name="cmts-interface">
                    CMTS Interface
                  </Menu.Item>
                }
              >
                <Modal.Header>CMTS Interface Filters</Modal.Header>
                <Modal.Content>
                  <Form>
                    <Form.Select
                      label="US/DS"
                      multiple
                      options={[
                        {
                          key: 'upstream',
                          text: 'Upstream',
                          value: 'upstream',
                        },
                        {
                          key: 'downstream',
                          text: 'Downstream',
                          value: 'downstream',
                        },
                      ]}
                      placeholder="US/DS"
                    />
                    <Form.Select
                      label="Name"
                      multiple
                      options={[
                        {
                          key: 'interface-1',
                          text: 'Interface-1',
                          value: 'interface-1',
                        },
                        {
                          key: 'interface-2',
                          text: 'Interface-2',
                          value: 'interface-2',
                        },
                        {
                          key: 'interface-3',
                          text: 'Interface-3',
                          value: 'interface-3',
                        },
                        {
                          key: 'interface-4',
                          text: 'Interface-4',
                          value: 'interface-4',
                        },
                      ]}
                      placeholder="Name"
                    />
                    <Form.Select
                      label="CMTS Name"
                      multiple
                      options={[
                        { key: 'cmts-1', text: 'CMTS-1', value: 'cmts-1' },
                        { key: 'cmts-2', text: 'CMTS-2', value: 'cmts-2' },
                        { key: 'cmts-3', text: 'CMTS-3', value: 'cmts-3' },
                        { key: 'cmts-4', text: 'CMTS-4', value: 'cmts-4' },
                      ]}
                      placeholder="CMTS Name"
                    />
                    <label>SNR</label>
                    <Picker />
                    <label>Micro-Reflections</label>
                    <Picker />
                    <label>% Uncorrected</label>
                    <Picker />
                  </Form>
                </Modal.Content>
                <Modal.Actions>
                  <Button color="black" size="small" onClick={this.close}>
                    Cancel
                  </Button>
                  <Button
                    positive
                    size="small"
                    icon="checkmark"
                    labelPosition="right"
                    content="Apply"
                    onClick={this.close}
                  />
                </Modal.Actions>
              </Modal>

              <Modal
                dimmer="blurring"
                trigger={
                  <Menu.Item name="modem">
                    Modem
                  </Menu.Item>
                }
              >
                <Modal.Header>Modem Filters</Modal.Header>
                <Modal.Content>
                  <Form>
                    <Form.Select
                      label="Modem"
                      multiple
                      options={[
                        { key: 'modem-1', text: 'Modem-1', value: 'modem-1' },
                        { key: 'modem-2', text: 'Modem-2', value: 'modem-2' },
                        { key: 'modem-3', text: 'Modem-3', value: 'modem-3' },
                        { key: 'modem-4', text: 'Modem-4', value: 'modem-4' },
                        { key: 'modem-5', text: 'Modem-5', value: 'modem-5' },
                      ]}
                      placeholder="Modem"
                    />

                    <Form.Select
                      label="Fiber Node"
                      multiple
                      options={[
                        { key: 'fiber-1', text: 'Fiber-1', value: 'fiber-1' },
                        { key: 'fiber-2', text: 'Fiber-2', value: 'fiber-2' },
                        { key: 'fiber-3', text: 'Fiber-3', value: 'fiber-3' },
                        { key: 'fiber-4', text: 'Fiber-4', value: 'fiber-4' },
                      ]}
                      placeholder="Fiber Node"
                    />
                    <Form.Select
                      label="MD Name"
                      multiple
                      options={[
                        { key: 'md-1', text: 'MD-1', value: 'md-1' },
                        { key: 'md-2', text: 'MD-2', value: 'md-2' },
                        { key: 'md-3', text: 'MD-3', value: 'md-3' },
                        { key: 'md-4', text: 'MD-4', value: 'md-4' },
                      ]}
                      placeholder="MD Name"
                    />
                    <Form.Select
                      label="CMTS Name"
                      multiple
                      options={[
                        { key: 'cmts-1', text: 'CMTS-1', value: 'cmts-1' },
                        { key: 'cmts-2', text: 'CMTS-2', value: 'cmts-2' },
                        { key: 'cmts-3', text: 'CMTS-3', value: 'cmts-3' },
                        { key: 'cmts-4', text: 'CMTS-4', value: 'cmts-4' },
                      ]}
                      placeholder="CMTS Name"
                    />
                    <Form.Select
                      label="Status"
                      multiple
                      options={[
                        { key: 'online', text: 'Online', value: 'online' },
                        { key: 'offline', text: 'Offline', value: 'offline' },
                      ]}
                      placeholder="Status"
                    />
                    <label>Upstream Interfaces</label>
                    <Picker />
                    <label>Downstream Interfaces</label>
                    <Picker />
                  </Form>
                </Modal.Content>
                <Modal.Actions>
                  <Button color="black" size="small" onClick={this.close}>
                    Cancel
                  </Button>
                  <Button
                    positive
                    size="small"
                    icon="checkmark"
                    labelPosition="right"
                    content="Apply"
                    onClick={this.close}
                  />
                </Modal.Actions>
              </Modal>

              <Modal
                dimmer="blurring"
                trigger={
                  <Menu.Item name="modem-interface">
                    Modem Interface
                  </Menu.Item>
                }
              >
                <Modal.Header>Modem Interface Filters</Modal.Header>
                <Modal.Content>
                  <Form>
                    <Form.Select
                      label="US/DS"
                      multiple
                      options={[
                        {
                          key: 'upstream',
                          text: 'Upstream',
                          value: 'upstream',
                        },
                        {
                          key: 'downstream',
                          text: 'Downstream',
                          value: 'downstream',
                        },
                      ]}
                      placeholder="US/DS"
                    />
                    <Form.Select
                      label="Name"
                      multiple
                      options={[
                        {
                          key: 'interface-1',
                          text: 'Interface-1',
                          value: 'interface-1',
                        },
                        {
                          key: 'interface-2',
                          text: 'Interface-2',
                          value: 'interface-2',
                        },
                        {
                          key: 'interface-3',
                          text: 'Interface-3',
                          value: 'interface-3',
                        },
                        {
                          key: 'interface-4',
                          text: 'Interface-4',
                          value: 'interface-4',
                        },
                      ]}
                      placeholder="Name"
                    />
                    <Form.Select
                      label="Modem"
                      multiple
                      options={[
                        { key: 'modem-1', text: 'Modem-1', value: 'modem-1' },
                        { key: 'modem-2', text: 'Modem-2', value: 'modem-2' },
                        { key: 'modem-3', text: 'Modem-3', value: 'modem-3' },
                        { key: 'modem-4', text: 'Modem-4', value: 'modem-4' },
                      ]}
                      placeholder="Modem"
                    />
                    <label>SNR</label>
                    <Picker />
                    <label>Down Power</label>
                    <Picker />
                    <label>Tx Power</label>
                    <Picker />
                    <label>% Uncorrected</label>
                    <Picker />
                  </Form>
                </Modal.Content>
                <Modal.Actions>
                  <Button
                    positive
                    size="small"
                    icon="checkmark"
                    labelPosition="right"
                    content="Apply"
                    onClick={this.close}
                  />
                </Modal.Actions>
              </Modal>
            </Menu.Menu>
          </Menu.Item>
          <Menu.Item>
            <Menu.Header>Favorite Filters</Menu.Header>
            <Menu.Menu>
              <Menu.Item name="offline report" />
              <Menu.Item name="bend cable modems" />
              <Menu.Item name="max power" />
            </Menu.Menu>
          </Menu.Item>
          <Menu.Item>
            <Menu.Header>Shared Filters</Menu.Header>
            <Menu.Menu>
              <Menu.Item name="high SNR" />
              <Menu.Item name="high flaps" />
              <Menu.Item name="un-provisioned subscriber" />
              <Menu.Item icon="add circle" name="add more" />
            </Menu.Menu>
          </Menu.Item>
        </Menu>
      </div>
    );
  }
}
