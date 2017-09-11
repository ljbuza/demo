import React, { Component } from 'react';
import { Form, Modal, Menu, Label, Button } from 'semantic-ui-react';
import Picker from './Picker';
import { observer } from 'mobx-react';

const SideMenuEquip = observer(
  class SideMenuEquip extends Component {
    constructor(props) {
      super(props);
      this.rawData = [...this.props.store.data];
      // this.handleSubmit = this.handleSubmit.bind(this);
    }

    render() {
      let cmtsLabel, modemLabel, mtaLabel;

      if (Object.keys(this.props.store.filters).length) {
        let cmtsCount = 0;
        let modemCount = 0;
        let mtaCount = 0;
        Object.keys(this.props.store.filters).map(key => {
          if (key.startsWith('cmts') && this.props.store.filters[key].length) {
            cmtsCount += 1;
          } else if (
            key.startsWith('modem') &&
            this.props.store.filters[key].length
          ) {
            modemCount += 1;
          } else if (
            key.startsWith('mta') &&
            this.props.store.filters[key].length
          ) {
            mtaCount += 1;
          }
          return undefined;
        });
        if (cmtsCount) {
          cmtsLabel = cmtsCount
            ? <Label color="blue">{cmtsCount}</Label>
            : <div />;
        }
        if (modemCount) {
          modemLabel = modemCount
            ? <Label color="blue">{modemCount}</Label>
            : <div />;
        }
        if (mtaCount) {
          mtaLabel = mtaCount
            ? <Label color="blue">{mtaCount}</Label>
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
                        section="equipCmts"
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
                        name="cmts-ip address"
                        label="IP Address"
                        multiple
                        value={this.props.store.filters['cmts-ip address']}
                        onChange={this.props.store.addFilter}
                        options={this.props.store.options.cmts['ip address']}
                        placeholder="IP Address"
                      />
                      <Form.Select
                        name="cmts-model"
                        label="cmts-model"
                        multiple
                        value={this.props.store.filters['cmts-model']}
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
                      <FilterLabel
                        section="equipModem"
                        filters={this.props.store.filters}
                      />
                      {modemLabel}
                      Modem
                    </Menu.Item>
                  }
                >
                  <Modal.Header>Modem Filters</Modal.Header>
                  <Modal.Content>
                    <Form>
                      <Form.Select
                        name="modem-modem"
                        label="Modem"
                        multiple
                        value={this.props.store.filters['modem-modem']}
                        onChange={this.props.store.addFilter}
                        options={this.props.store.options.modem.modem}
                        placeholder="Modem"
                      />
                      <Form.Select
                        name="modem-mac"
                        label="MAC"
                        multiple
                        value={this.props.store.filters['modem-mac']}
                        onChange={this.props.store.addFilter}
                        options={this.props.store.options.modem.mac}
                        placeholder="MAC"
                      />
                      <Form.Select
                        name="modem-model"
                        label="Model"
                        multiple
                        onChange={this.props.store.addFilter}
                        value={this.props.store.filters['modem-model']}
                        options={this.props.store.options.modem.model}
                        placeholder="Model"
                      />

                      <Form.Select
                        name="modem-vendor"
                        label="Vendor"
                        multiple
                        onChange={this.props.store.addFilter}
                        value={this.props.store.filters['modem-vendor']}
                        options={this.props.store.options.modem.vendor}
                        placeholder="Vendor"
                      />
                      <Form.Select
                        name="modem-software version"
                        label="Software Version"
                        multiple
                        onChange={this.props.store.addFilter}
                        value={
                          this.props.store.filters['modem-software version']
                        }
                        options={
                          this.props.store.options.modem['software version']
                        }
                        placeholder="Software Version"
                      />
                      <Form.Select
                        name="modem-ip address"
                        label="IP Address"
                        multiple
                        onChange={this.props.store.addFilter}
                        value={this.props.store.filters['modem-ip address']}
                        options={this.props.store.options.modem['ip address']}
                        placeholder="IP Address"
                      />
                      <Form.Select
                        name="modem-configuration"
                        label="Configuration"
                        multiple
                        onChange={this.props.store.addFilter}
                        value={this.props.store.filters['modem-configuration']}
                        options={
                          this.props.store.options.modem['configuration']
                        }
                        placeholder="Configuration"
                      />
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

                <Modal
                  dimmer="blurring"
                  trigger={
                    <Menu.Item name="MTA">
                      <FilterLabel
                        section="equipMta"
                        filters={this.props.store.filters}
                      />
                      {mtaLabel}
                      MTA
                    </Menu.Item>
                  }
                >
                  <Modal.Header>MTA Filters</Modal.Header>
                  <Modal.Content>
                    <Form>
                      <Form.Select
                        name="mta-name"
                        label="Name"
                        multiple
                        onChange={this.props.store.addFilter}
                        value={this.props.store.filters['mta-name']}
                        options={this.props.store.options.mta['name']}
                        placeholder="CMTS Name"
                      />
                      <Form.Select
                        name="mta-ip address"
                        label="IP Address"
                        multiple
                        onChange={this.props.store.addFilter}
                        value={this.props.store.filters['mta-ip address']}
                        options={this.props.store.options.mta['ip address']}
                        placeholder="IP Address"
                      />
                      <Form.Select
                        name="mta-model"
                        label="Model"
                        multiple
                        onChange={this.props.store.addFilter}
                        value={this.props.store.filters['mta-model']}
                        options={this.props.store.options.mta['model']}
                        placeholder="Model"
                      />

                      <Form.Select
                        name="mta-software version"
                        label="Software Version"
                        multiple
                        onChange={this.props.store.addFilter}
                        value={this.props.store.filters['mta-software version']}
                        options={
                          this.props.store.options.mta['software version']
                        }
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
);
export default SideMenuEquip;

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
