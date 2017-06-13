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
    evt.preventDefault();
    // const { usds, name, modem } = this.state;
    this.setState({
      submittedUsds: this.state.miUsds,
      submittedName: this.state.miName,
      submittedModem: this.state.miModem
    });
  };

  getOptions = field => {
    var [section, ...fieldName] = field.split("-");
    fieldName = fieldName.join(" ");
    let options = [];
    this.props.data[section].map(row => {
      options.push({
        key: row[fieldName].toLowerCase(),
        text: row[fieldName],
        value: row[fieldName].toLowerCase()
      });
    });
    return options;
  };

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

    let cmtsLabel = <div />;
    if (Object.keys(this.props.filters).length) {
      let labelCount = 0;
      Object.keys(this.props.filters).map(key => {
        if (key.startsWith("networkcmts") && this.props.filters[key].length) {
          labelCount = labelCount + 1;
        }
      });
      if (labelCount) {
        cmtsLabel = <Label color="blue">{labelCount}</Label>;
      }
    }

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
                    {cmtsLabel}CMTS
                  </Menu.Item>
                }
              >
                <Modal.Header>CMTS Filters</Modal.Header>
                <Modal.Content>
                  <Form onSubmit={this.handleSubmit} error={Boolean(err)}>
                    <Form.Select
                      name="networkcmts-Name"
                      label="CMTS Name"
                      multiple
                      value={this.props.filters["networkcmts-Name"]}
                      onChange={this.props.handleChange}
                      options={this.getOptions("networkCmts-Name")}
                      placeholder="CMTS Name"
                    />
                    <Form.Select
                      name="networkcmts-Model"
                      label="Model"
                      value={this.props.filters["networkcmts-Model"]}
                      multiple
                      onChange={this.props.handleChange}
                      options={this.getOptions("networkCmts-Model")}
                      placeholder="Model"
                    />
                    <Form.Select
                      name="networkcmts-Software-Version"
                      label="Software Version"
                      multiple
                      value={this.props.filters["networkcmts-Software-Version"]}
                      onChange={this.props.handleChange}
                      options={this.getOptions("networkCmts-Software-Version")}
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
                  <Button
                    color="black"
                    size="small"
                    content="Close"
                    onClick={this.close}
                  />
                  <Button
                    positive
                    size="small"
                    icon="undo"
                    labelPosition="right"
                    content="Clear Filters"
                    onClick={this.props.handleClearForm}
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
