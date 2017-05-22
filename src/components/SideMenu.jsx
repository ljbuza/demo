import React, { Component } from "react";
import { Form, Modal, Menu, Label, Button, Message } from "semantic-ui-react";
import Picker from "./Picker";

export default class SideMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: true,
      cmtsName: [],
      cmtsModel: [],
      cmtsSwVersion: [],
      mdName: [],
      mdCmtsName: [],
      mdAlias: [],
      fiberNode: [],
      fiberMdName: [],
      fiberCmtsName: [],
      fiberAlias: [],
      cmtsIntUsds: [],
      cmtsIntName: [],
      cmtsIntCmts: [],
      modemName: [],
      modemFiber: [],
      modemMd: [],
      modemCmts: [],
      modemValue: [],
      miUsds: [],
      miName: [],
      miModem: [],
      submittedUsds: [],
      submittedName: [],
      submittedModem: []
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  // state = {
  //   visible: true,
  //   usds: "",
  //   submittedUsds: "",
  //   name: [],
  //   submittedName: [],
  //   modem: "",
  //   submittedModem: ""
  // };

  handleSubmit = evt => {
    11;
    evt.preventDefault();
    // const { usds, name, modem } = this.state;
    this.setState({
      submittedUsds: this.state.miUsds,
      submittedName: this.state.miName,
      submittedModem: this.state.miModem
    });
  };

  handleChange = (evt, { name, value }) => this.setState({ [name]: value });

  render() {
    const {
      err,
      cmtsName,
      cmtsModel,
      cmtsSwVersion,
      mdName,
      mdCmtsName,
      mdAlias,
      fiberNode,
      fiberMdName,
      fiberCmtsName,
      fiberAlias,
      cmtsIntUsds,
      cmtsIntName,
      cmtsIntCmts,
      modemName,
      modemFiber,
      modemMd,
      modemCmts,
      modemValue,
      miUsds,
      miName,
      miModem,
      submittedUsds,
      submittedName,
      submittedModem
    } = this.state;

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
                  <Form onSubmit={this.handleSubmit} error={Boolean(err)}>
                    <Form.Select
                      name="cmts-name"
                      label="CMTS Name"
                      multiple
                      value={cmtsName}
                      onChange={this.handleChange}
                      options={[
                        { key: "cmts-1", text: "CMTS-1", value: "cmts-1" },
                        { key: "cmts-2", text: "CMTS-2", value: "cmts-2" },
                        { key: "cmts-3", text: "CMTS-3", value: "cmts-3" },
                        { key: "cmts-4", text: "CMTS-4", value: "cmts-4" }
                      ]}
                      placeholder="CMTS Name"
                    />
                    <Form.Select
                      name="cmts-model"
                      label="Model"
                      multiple
                      value={cmtsModel}
                      onChange={this.handleChange}
                      options={[
                        { key: "alcatel", text: "Alcatel", value: "alcatel" },
                        { key: "arris", text: "Arris", value: "arris" }
                      ]}
                      placeholder="Model"
                    />
                    <Form.Select
                      name="cmts-sw-version"
                      label="Software Version"
                      multiple
                      value={cmtsSwVersion}
                      onChange={this.handleChange}
                      options={[
                        { key: "1.0", text: "1.0", value: "1.0" },
                        { key: "2.0", text: "2.0", value: "2.0" }
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
                <Modal.Header>MAC Domain Filters</Modal.Header>
                <Modal.Content>
                  <Form onSubmit={this.handleSubmit} error={Boolean(err)}>
                    <Form.Select
                      name="md-name"
                      label="MD Name"
                      multiple
                      value={mdName}
                      onChange={this.handleChange}
                      options={[
                        { key: "md-1", text: "MD-1", value: "md-1" },
                        { key: "md-2", text: "MD-2", value: "md-2" },
                        { key: "md-3", text: "MD-3", value: "md-3" },
                        { key: "md-4", text: "MD-4", value: "md-4" }
                      ]}
                      placeholder="MD Name"
                    />
                    <Form.Select
                      name="md-cmts-name"
                      label="CMTS Name"
                      multiple
                      value={mdCmtsName}
                      onChange={this.handleChange}
                      options={[
                        { key: "cmts-1", text: "CMTS-1", value: "cmts-1" },
                        { key: "cmts-2", text: "CMTS-2", value: "cmts-2" },
                        { key: "cmts-3", text: "CMTS-3", value: "cmts-3" },
                        { key: "cmts-4", text: "CMTS-4", value: "cmts-4" }
                      ]}
                      placeholder="CMTS Name"
                    />
                    <Form.Select
                      label="Alias"
                      name="md-alias"
                      multiple
                      value={mdAlias}
                      onChange={this.handleChange}
                      options={[
                        { key: "alcatel", text: "Alcatel", value: "alcatel" },
                        { key: "arris", text: "Arris", value: "arris" }
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
                  <Form onSubmit={this.handleSubmit} error={Boolean(err)}>
                    <Form.Select
                      label="Fiber Node"
                      name="fiber-node"
                      multiple
                      value={fiberNode}
                      onChange={this.handleChange}
                      options={[
                        { key: "fiber-1", text: "Fiber-1", value: "fiber-1" },
                        { key: "fiber-2", text: "Fiber-2", value: "fiber-2" },
                        { key: "fiber-3", text: "Fiber-3", value: "fiber-3" },
                        { key: "fiber-4", text: "Fiber-4", value: "fiber-4" }
                      ]}
                      placeholder="Fiber Node"
                    />
                    <Form.Select
                      label="MD Name"
                      name="fiber-md-name"
                      multiple
                      value={fiberMdName}
                      onChange={this.handleChange}
                      options={[
                        { key: "md-1", text: "MD-1", value: "md-1" },
                        { key: "md-2", text: "MD-2", value: "md-2" },
                        { key: "md-3", text: "MD-3", value: "md-3" },
                        { key: "md-4", text: "MD-4", value: "md-4" }
                      ]}
                      placeholder="MD Name"
                    />
                    <Form.Select
                      label="CMTS Name"
                      name="fiber-cmts-name"
                      multiple
                      value={fiberCmtsName}
                      onChange={this.handleChange}
                      options={[
                        { key: "cmts-1", text: "CMTS-1", value: "cmts-1" },
                        { key: "cmts-2", text: "CMTS-2", value: "cmts-2" },
                        { key: "cmts-3", text: "CMTS-3", value: "cmts-3" },
                        { key: "cmts-4", text: "CMTS-4", value: "cmts-4" }
                      ]}
                      placeholder="CMTS Name"
                    />
                    <Form.Select
                      label="Alias"
                      name="fiber-alias"
                      multiple
                      value={fiberAlias}
                      onChange={this.handleChange}
                      options={[
                        { key: "alcatel", text: "Alcatel", value: "alcatel" },
                        { key: "arris", text: "Arris", value: "arris" }
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
                  <Form onSubmit={this.handleSubmit} error={Boolean(err)}>
                    <Form.Select
                      label="US/DS"
                      name="cmts-int-usds"
                      multiple
                      value={cmtsIntUsds}
                      onChange={this.handleChange}
                      options={[
                        {
                          key: "upstream",
                          text: "Upstream",
                          value: "upstream"
                        },
                        {
                          key: "downstream",
                          text: "Downstream",
                          value: "downstream"
                        }
                      ]}
                      placeholder="US/DS"
                    />
                    <Form.Select
                      label="Name"
                      name="cmts-int-name"
                      multiple
                      value={cmtsIntName}
                      onChange={this.handleChange}
                      options={[
                        {
                          key: "interface-1",
                          text: "Interface-1",
                          value: "interface-1"
                        },
                        {
                          key: "interface-2",
                          text: "Interface-2",
                          value: "interface-2"
                        },
                        {
                          key: "interface-3",
                          text: "Interface-3",
                          value: "interface-3"
                        },
                        {
                          key: "interface-4",
                          text: "Interface-4",
                          value: "interface-4"
                        }
                      ]}
                      placeholder="Name"
                    />
                    <Form.Select
                      label="CMTS Name"
                      name="cmts-int-cmts"
                      multiple
                      value={cmtsIntCmts}
                      onChange={this.handleChange}
                      options={[
                        { key: "cmts-1", text: "CMTS-1", value: "cmts-1" },
                        { key: "cmts-2", text: "CMTS-2", value: "cmts-2" },
                        { key: "cmts-3", text: "CMTS-3", value: "cmts-3" },
                        { key: "cmts-4", text: "CMTS-4", value: "cmts-4" }
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
                  <Form onSubmit={this.handleSubmit} error={Boolean(err)}>
                    <Form.Select
                      label="Modem"
                      name="modem-name"
                      multiple
                      value={modemName}
                      onChange={this.handleChange}
                      options={[
                        { key: "modem-1", text: "Modem-1", value: "modem-1" },
                        { key: "modem-2", text: "Modem-2", value: "modem-2" },
                        { key: "modem-3", text: "Modem-3", value: "modem-3" },
                        { key: "modem-4", text: "Modem-4", value: "modem-4" },
                        { key: "modem-5", text: "Modem-5", value: "modem-5" }
                      ]}
                      placeholder="Modem"
                    />

                    <Form.Select
                      label="Fiber Node"
                      name="modem-fiber"
                      multiple
                      value={modemFiber}
                      onChange={this.handleChange}
                      options={[
                        { key: "fiber-1", text: "Fiber-1", value: "fiber-1" },
                        { key: "fiber-2", text: "Fiber-2", value: "fiber-2" },
                        { key: "fiber-3", text: "Fiber-3", value: "fiber-3" },
                        { key: "fiber-4", text: "Fiber-4", value: "fiber-4" }
                      ]}
                      placeholder="Fiber Node"
                    />
                    <Form.Select
                      label="MD Name"
                      name="modem-md"
                      multiple
                      value={modemMd}
                      onChange={this.handleChange}
                      options={[
                        { key: "md-1", text: "MD-1", value: "md-1" },
                        { key: "md-2", text: "MD-2", value: "md-2" },
                        { key: "md-3", text: "MD-3", value: "md-3" },
                        { key: "md-4", text: "MD-4", value: "md-4" }
                      ]}
                      placeholder="MD Name"
                    />
                    <Form.Select
                      label="CMTS Name"
                      name="modem-cmts"
                      multiple
                      value={modemCmts}
                      onChange={this.handleChange}
                      options={[
                        { key: "cmts-1", text: "CMTS-1", value: "cmts-1" },
                        { key: "cmts-2", text: "CMTS-2", value: "cmts-2" },
                        { key: "cmts-3", text: "CMTS-3", value: "cmts-3" },
                        { key: "cmts-4", text: "CMTS-4", value: "cmts-4" }
                      ]}
                      placeholder="CMTS Name"
                    />
                    <Form.Select
                      label="Status"
                      name="modem-status"
                      multiple
                      value={modemValue}
                      onChange={this.handleChange}
                      options={[
                        { key: "online", text: "Online", value: "online" },
                        { key: "offline", text: "Offline", value: "offline" }
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
                  <Form onSubmit={this.handleSubmit} error={Boolean(err)}>
                    <Form.Select
                      label="US/DS"
                      name="mi-usds"
                      multiple
                      value={miUsds}
                      onChange={this.handleChange}
                      options={[
                        {
                          key: "upstream",
                          text: "Upstream",
                          value: "upstream"
                        },
                        {
                          key: "downstream",
                          text: "Downstream",
                          value: "downstream"
                        }
                      ]}
                      placeholder="US/DS"
                    />
                    <Form.Select
                      name="mi-name"
                      label="Interface"
                      multiple
                      value={miName}
                      onChange={this.handleChange}
                      options={[
                        {
                          key: "interface-1",
                          text: "Interface-1",
                          value: "interface-1"
                        },
                        {
                          key: "interface-2",
                          text: "Interface-2",
                          value: "interface-2"
                        },
                        {
                          key: "interface-3",
                          text: "Interface-3",
                          value: "interface-3"
                        },
                        {
                          key: "interface-4",
                          text: "Interface-4",
                          value: "interface-4"
                        }
                      ]}
                      placeholder="Interface"
                    />
                    <Form.Select
                      name="mi-modem"
                      label="Modem"
                      value={miModem}
                      onChange={this.handleChange}
                      options={[
                        { key: "modem-1", text: "Modem-1", value: "modem-1" },
                        { key: "modem-2", text: "Modem-2", value: "modem-2" },
                        { key: "modem-3", text: "Modem-3", value: "modem-3" },
                        { key: "modem-4", text: "Modem-4", value: "modem-4" }
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
                    {err &&
                      <Message header="Error" content={err.message} error />}
                    <Button type="submit" primary>Set Filters</Button>
                  </Form>
                  <strong>onChange:</strong>
                  <pre>
                    {JSON.stringify({ miName, miModem, miUsds }, null, 2)}
                  </pre>
                  <strong>onSubmit:</strong>
                  <pre>
                    {JSON.stringify(
                      { submittedName, submittedModem, submittedUsds },
                      null,
                      2
                    )}
                  </pre>
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
