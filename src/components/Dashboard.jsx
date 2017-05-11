import React, { Component } from 'react';
import { Table, Menu, Icon } from 'semantic-ui-react';

export default class Dashboard extends Component {
  componentDidMount() {
    document.body.classList.add('tds-blue');
    document.body.id = '';
  }
  componentWillUnmount() {
    document.body.classList.remove('tds-blue');
    document.body.id = 'body';
  }

  render() {
    return (
      <div id="dashboard" className="ui grid">
        <div className="row">
          <div className="column">
            <div id="dash-container" className="ui grid container">
              <div className="six wide column">
                <div className="ui fluid card">
                  <div className="content">
                    <div className="ui header">Top Users</div>
                  </div>
                  <div className="content">

                    <table className="ui striped compact table">
                      <thead>
                        <tr>
                          <th>Subscriber</th>
                          <th>Usage</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td><a href="index_sm_jon.html">Jon Wallace</a></td>
                          <td>20gb</td>
                        </tr>
                        <tr>
                          <td><a href="index_sm.html">Noal Miles</a></td>
                          <td>15gb</td>
                        </tr>
                        <tr>
                          <td><a href="index_sm_demo.html">Spike Souza</a></td>
                          <td>10gb</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
                <div className="ui fluid card">
                  <div className="content">
                    <div className="ui header">Top CMTS Usage</div>
                  </div>
                  <div className="content">

                    <table className="ui striped compact table">
                      <thead>
                        <tr>
                          <th>CMTS</th>
                          <th>Usage</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td><a href="Filters/filter_cmts.html">CMTS1</a></td>
                          <td>80%</td>
                        </tr>
                        <tr>
                          <td><a href="Filters/filter_cmts.html">CMTS2</a></td>
                          <td>75%</td>
                        </tr>
                        <tr>
                          <td><a href="Filters/filter_cmts.html">CMTS3</a></td>
                          <td>70%</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

              </div>

              <div className="ten wide column">
                <div className="ui fluid card">
                  <div className="content">
                    <div className="ui header">Pending Orders</div>
                  </div>
                  <div className="content">
                    <table className="ui striped compact table">
                      <thead>
                        <tr>
                          <th>BxE Order</th>
                          <th>External Order</th>
                          <th>Subscriber</th>
                          <th>Created</th>
                          <th>Last Updated</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td><a href="Filters/filter_order.html">1234</a></td>
                          <td>696686</td>
                          <td>John Addams</td>
                          <td>Jun 1, 2016 09:57 AM CST</td>
                          <td>Jun 6, 2016 11:24 AM CST</td>
                        </tr>
                        <tr>
                          <td><a href="Filters/filter_order.html">3456</a></td>
                          <td>696686</td>
                          <td>Henry Knox</td>
                          <td>Jun 1, 2016 09:57 AM CST</td>
                          <td>Jun 6, 2016 11:24 AM CST</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
                <div className="ui fluid card">
                  <div className="content">
                    <div className="ui header">Completed Orders</div>
                  </div>
                  <div className="content">
                    <table className="ui striped compact table">
                      <thead>
                        <tr className="bottom aligned">
                          <th>BxE Order</th>
                          <th>External Order</th>
                          <th>Subscriber</th>
                          <th>Created</th>
                          <th>Last Updated</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td><a href="Filters/filter_order.html">1234</a></td>
                          <td>696686</td>
                          <td>Nathaniel Hawthorne</td>
                          <td>Jun 1, 2016 09:57 AM CST</td>
                          <td>Jun 6, 2016 11:24 AM CST</td>
                        </tr>
                        <tr>
                          <td><a href="Filters/filter_order.html">3456</a></td>
                          <td>696686</td>
                          <td>Herman Melville</td>
                          <td>Jun 1, 2016 09:57 AM CST</td>
                          <td>Jun 6, 2016 11:24 AM CST</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
