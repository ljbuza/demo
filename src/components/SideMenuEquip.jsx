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
      let cmtsLabel, 
modemLabel, 
mtaLabel;

      if (Object.keys(this.props.store.filters).length) {
        let cmtsCount = 0;
        let modemCount = 0;
        let mtaCount = 0;
        Object.keys(this.props.store.filters).map((key) => {
          if (key.startsWith('cmts') && this.props.store.filters[key].length) {
            cmtsCount += 1;
          } else if (
            key.startsWith('modems') &&
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
                        placeholder="MAC"
                      />
                      <Form.Select
                        label="Model"
                        multiple
                        options={[
                          { key: 'md-1', text: 'Surfboard', value: 'md-1' },
                          { key: 'md-2', text: 'X11', value: 'md-2' },
                        ]}
                        placeholder="Model"
                      />

                      <Form.Select
                        label="Vendor"
                        multiple
                        options={[
                          { key: 'fiber-1', text: 'Alcatel', value: 'fiber-1' },
                          { key: 'fiber-2', text: 'Cirrus', value: 'fiber-2' },
                          { key: 'fiber-3', text: 'Netgear', value: 'fiber-3' },
                        ]}
                        placeholder="Vendor"
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
                      <Form.Select
                        label="IP Address"
                        multiple
                        options={[
                          { key: '1', text: '12.32.54.658', value: 'alcatel' },
                          { key: '2', text: '123.4r.54.65', value: 'alcatel' },
                        ]}
                        placeholder="IP Address"
                      />
                      <Form.Select
                        label="Configuration"
                        multiple
                        options={[
                          { key: '1.0', text: 'xyz', value: '1.0' },
                          { key: '2.0', text: 'abc', value: '2.0' },
                        ]}
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
                        label="IP Address"
                        multiple
                        options={[
                          { key: '1', text: '12.32.54.658', value: 'alcatel' },
                          { key: '2', text: '123.4r.54.65', value: 'alcatel' },
                        ]}
                        placeholder="IP Address"
                      />
                      <Form.Select
                        label="Model"
                        multiple
                        options={[
                          { key: '1', text: 'Alcatel', value: 'alcatel' },
                          { key: '2', text: 'Cirrus', value: 'alcatel' },
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
  },
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
        Object.keys(filters).map((key) => {
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
