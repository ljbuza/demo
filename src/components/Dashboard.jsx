import React, { Component } from 'react';
import { Card } from 'semantic-ui-react';
import Header from './Header';
import tableData from '../data/DashboardData.js';
import DataTable from './DataTable';

export default class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: tableData.tableData,
    };
  }

  // this should be done in css, ideally
  // componentDidMount() {
  //   document.body.classList.add('tds-blue');
  //   document.body.id = '';
  // }
  // componentWillUnmount() {
  //   document.body.classList.remove('tds-blue');
  //   document.body.id = 'body';
  // }

  render() {
    const { data } = this.state;
    return (
      <div>
        <Header title="Dashboard" subtitle="May 16, 2017" />
        <div id="dashboard" className="ui grid">
          <div className="row">
            <div className="column">
              <div id="dash-container" className="ui grid container">
                <div className="six wide column">

                  <Card fluid>
                    <Card.Content>
                      <div className="ui header small">Top Users</div>
                    </Card.Content>
                    <Card.Content
                      description={<DataTable data={data.topUsers} />}
                    />
                  </Card>

                  <Card fluid>
                    <Card.Content>
                      <div className="ui header small">Top CMTS Usage</div>
                    </Card.Content>
                    <Card.Content
                      description={<DataTable data={data.topCmtsUsage} />}
                    />
                  </Card>
                </div>

                <div className="ten wide column">

                  <Card fluid>
                    <Card.Content>
                      <div className="ui header small">Pending Orders</div>
                    </Card.Content>
                    <Card.Content
                      description={<DataTable data={data.pendingOrders} />}
                    />
                  </Card>
                  <Card fluid>
                    <Card.Content>
                      <div className="ui header small">Completed Orders</div>
                    </Card.Content>
                    <Card.Content
                      description={<DataTable data={data.completedOrders} />}
                    />
                  </Card>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
