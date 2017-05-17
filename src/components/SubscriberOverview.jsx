import React, { Component } from 'react';
import { Accordion } from 'semantic-ui-react';
import DataTable from './DataTable';
import tableData from '../data/SubscrOverviewData.js';

const panels = [
  {
    key: '1',
    title: 'Equipment',
    content: <DataTable data={tableData.tableData.equipment} />,
  },
  {
    key: '2',
    title: 'Orders',
    content: <DataTable data={tableData.tableData.orders} />,
  },
];

export default class SubscriberOverview extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: tableData.tableData,
    };
  }

  render() {
    return (
      <div>
        <h1>Hello {this.props.match.params.id}</h1>
        <Accordion panels={panels} fluid styled exclusive={false} />;
      </div>
    );
  }
}
