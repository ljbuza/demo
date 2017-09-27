import React, { Component } from 'react';
import { Form, Modal, Menu, Label, Button } from 'semantic-ui-react';
import Picker from './Picker';
import { observer } from 'mobx-react';

const SideMenu = observer(
  class SideMenu extends Component {
    constructor(props) {
      super(props);
      this.rawData = [...this.props.store.data];
      this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit = evt => {
      evt.preventDefault();
      // const { usds, name, modem } = this.state;
      this.setState({
        submittedUsds: this.state.miUsds,
        submittedName: this.state.miName,
        submittedModem: this.state.miModem,
      });
    };

    render() {
      let cmtsLabel, mdLabel, fnLabel, mdiLabel, fniLabel;

      if (Object.keys(this.props.store.filters).length) {
        let cmtsCount = 0;
        let fnCount = 0;
        let mdCount = 0;
        let fniCount = 0;
        let mdiCount = 0;
        Object.keys(this.props.store.filters).map(key => {
          if (key.startsWith('cmts') && this.props.store.filters[key].length) {
            cmtsCount += 1;
          } else if (
            key.startsWith('fiber nodes') &&
            this.props.store.filters[key].length
          ) {
            fnCount += 1;
          } else if (
            key.startsWith('mac domains') &&
            this.props.store.filters[key].length
          ) {
            mdCount += 1;
          } else if (
            key.startsWith('fn interfaces') &&
            this.props.store.filters[key].length
          ) {
            fniCount += 1;
          } else if (
            key.startsWith('cmts interfaces') &&
            this.props.store.filters[key].length
          ) {
            mdiCount += 1;
          }
          return undefined;
        });
        if (cmtsCount) {
          cmtsLabel = cmtsCount
            ? <Label color="blue">{cmtsCount}</Label>
            : <div />;
        }
        if (mdCount) {
          mdLabel = mdCount ? <Label color="blue">{mdCount}</Label> : <div />;
        }
        if (fnCount) {
          fnLabel = fnCount ? <Label color="blue">{fnCount}</Label> : <div />;
        }
        if (mdiCount) {
          mdiLabel = mdiCount
            ? <Label color="blue">{mdiCount}</Label>
            : <div />;
        }
        if (fniCount) {
          fniLabel = fniCount
            ? <Label color="blue">{fniCount}</Label>
            : <div />;
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
                      <FilterLabel
                        section="networkCmts"
                        filters={this.props.store.filters}
                      />
                      {cmtsLabel}
                      CMTS
                    </Menu.Item>
                  }
                >
                  <Modal.Header>CMTS Filters</Modal.Header>
                  <Modal.Content>
                    <Form onSubmit={this.handleSubmit}>
                      <Form.Select
                        name="cmts-name"
                        label="CMTS Name"
                        multiple
                        value={this.props.store.filters['cmts-name']}
                        onChange={this.props.store.addFilter}
                        options={this.props.store.options.cmts.name}
                        placeholder="CMTS Name"
                      />
                      <Form.Select
                        name="cmts-model"
                        label="Model"
                        value={this.props.store.filters['cmts-model']}
                        multiple
                        onChange={this.props.store.addFilter}
                        options={this.props.store.options.cmts.model}
                        placeholder="Model"
                      />
                      <Form.Select
                        name="cmts-software version"
                        label="Software Version"
                        multiple
                        value={
                          this.props.store.filters['cmts-software version']
                        }
                        onChange={this.props.store.addFilter}
                        options={
                          this.props.store.options.cmts['software version']
                        }
                        placeholder="Software Version"
                      />
                      <label>CPU</label>
                      <Form.Input />
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
                    <Menu.Item name="mac domains">
                      <FilterLabel
                        section="mac domains"
                        filters={this.props.store.filters}
                      />
                      {mdLabel}
                      MAC Domains{' '}
                    </Menu.Item>
                  }
                >
                  <Modal.Header>MAC Domain Filters</Modal.Header>
                  <Modal.Content>
                    <Form onSubmit={this.handleSubmit}>
                      <Form.Select
                        name="mac domains-name"
                        label="MAC Domain"
                        value={this.props.store.filters['mac domains-name']}
                        multiple
                        onChange={this.props.store.addFilter}
                        options={
                          this.props.store.options['mac domains']['name']
                        }
                        placeholder="MAC Domain"
                      />
                      <Form.Select
                        name="mac domains-alias"
                        label="Alias"
                        value={this.props.store.filters['mac domains-alias']}
                        multiple
                        onChange={this.props.store.addFilter}
                        options={
                          this.props.store.options['mac domains']['alias']
                        }
                        placeholder="Alias"
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
                    <Menu.Item name="fiber nodes">
                      <FilterLabel
                        section="fiber nodes"
                        filters={this.props.store.filters['fiber nodes']}
                      />
                      {fnLabel}
                      Fiber Node
                    </Menu.Item>
                  }
                >
                  <Modal.Header>Fiber Node Filters</Modal.Header>
                  <Modal.Content>
                    <Form onSubmit={this.handleSubmit}>
                      <Form.Select
                        label="Fiber Node"
                        name="fiber nodes-name"
                        value={this.props.store.filters['fiber nodes-name']}
                        multiple
                        onChange={this.props.store.addFilter}
                        options={
                          this.props.store.options['fiber nodes']['name']
                        }
                        placeholder="Fiber Node"
                      />
                      <Form.Select
                        name="fiber nodes-alias"
                        label="Alias"
                        value={this.props.store.filters['fiber nodes-alias']}
                        multiple
                        onChange={this.props.store.addFilter}
                        options={
                          this.props.store.options['fiber nodes']['alias']
                        }
                        placeholder="Alias"
                      />
                      <label>Modems Online</label>
                      <Picker />
                      <label>Modems Offline</label>
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
                    <Menu.Item name="cmts interfaces">
                      <FilterLabel
                        section="cmts interfaces"
                        filters={this.props.store.filters['cmts interfaces']}
                      />
                      CMTS Interfaces
                      {mdiLabel}
                    </Menu.Item>
                  }
                >
                  <Modal.Header>CMTS Interfaces Filters</Modal.Header>
                  <Modal.Content>
                    <Form onSubmit={this.handleSubmit}>
                      <Form.Select
                        label="MAC Domain Interface"
                        name="cmts interfaces-name"
                        value={this.props.store.filters['cmts interfaces-name']}
                        multiple
                        onChange={this.props.store.addFilter}
                        options={
                          this.props.store.options['cmts interfaces']['name']
                        }
                        placeholder="MAC Domain Interface"
                      />
                      <label>Frequency</label>
                      <Picker />
                      <label>Direction</label>
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
                    <Menu.Item name="fn interfaces">
                      <FilterLabel
                        section="fn interfaces"
                        filters={this.props.store.filters['fn interfaces']}
                      />
                      Fiber Node Interfaces
                      {fniLabel}
                    </Menu.Item>
                  }
                >
                  <Modal.Header>Fiber Node Interfaces Filters</Modal.Header>
                  <Modal.Content>
                    <Form onSubmit={this.handleSubmit}>
                      <Form.Select
                        label="Fiber Node Interface"
                        name="fn interfaces-name"
                        value={this.props.store.filters['fn interfaces-name']}
                        multiple
                        onChange={this.props.store.addFilter}
                        options={
                          this.props.store.options['fn interfaces']['name']
                        }
                        placeholder="Fiber Node Interface"
                      />
                      <label>Frequency</label>
                      <Picker />
                      <label>Direction</label>
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

                {/* <Modal
                  dimmer="blurring"
                  trigger={
                    <Menu.Item name="modem">
                      Modem
                    </Menu.Item>
                  }
                >
                  <Modal.Header>Modem Filters</Modal.Header>
                  <Modal.Content>
                    <Form onSubmit={this.handleSubmit}>
                      <Form.Select
                        label="Modem"
                        name="networkModem-Name"
                        value={this.props.store.filters["networkModem-Name"]}
                        multiple
                        onChange={this.props.store.addFilter}
                        options={this.props.store.options.networkModem["Name"]}
                        placeholder="Modem"
                      />
                      <Form.Select
                        label="Fiber Node"
                        name="networkModem-Fiber"
                        value={this.props.store.filters["networkModem-Fiber"]}
                        multiple
                        onChange={this.props.store.addFilter}
                        options={this.props.store.options.networkModem["Fiber"]}
                        placeholder="Fiber Node"
                      />
                      <Form.Select
                        label="MD Name"
                        name="networkModem-MAC Domain"
                        value={
                          this.props.store.filters["networkModem-MAC Domain"]
                        }
                        multiple
                        onChange={this.props.store.addFilter}
                        options={
                          this.props.store.options.networkModem["MAC Domain"]
                        }
                        placeholder="MD Name"
                      />
                      <Form.Select
                        label="CMTS Name"
                        name="networkModem-CMTS"
                        value={this.props.store.filters["networkModem-CMTS"]}
                        multiple
                        onChange={this.props.store.addFilter}
                        options={this.props.store.options.networkModem["CMTS"]}
                        placeholder="CMTS Name"
                      />
                      <Form.Select
                        label="Status"
                        name="networkModem-Status"
                        value={this.props.store.filters["networkModem-Status"]}
                        multiple
                        onChange={this.props.store.addFilter}
                        options={
                          this.props.store.options.networkModem["Status"]
                        }
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
 */}
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
  },
  // }
);
export default SideMenu;

const FilterLabel = observer(
  class FilterLabel extends React.Component {
    // const FilterLabel = ({ section, filters }) => {
    render() {
      let labelCount = 0;
      const filters = this.props.filters;
      const section = this.props.section;

      if (filters && Object.keys(filters).length) {
        Object.keys(filters).map(key => {
          if (key.startsWith(section) && filters[key].length) {
            labelCount += 1;
          }
          return undefined;
        });
      }

      return (
        <div>
          {labelCount > 0 ? <Label color="blue">{labelCount}</Label> : ''}
        </div>
      );
    }
  },
);
