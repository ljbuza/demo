import React, { Component } from 'react';
import PickerFilterModal from './PickerFilterModal';
import SelectFilterModal from './SelectFilterModal';

// const filterOptions = [{key: 'A', value: 'A', text:'Apple'}, {key: 'B', value: 'B', text:'Beta'}]
export default class Network extends Component {
  render() {
    return (
      <table className="ui striped selectable sortable small compact table">
        <thead>
          <tr>
            <th>Name<SelectFilterModal /></th>
            <th>Total Modems <PickerFilterModal /></th>
            <th>% Modems Online</th>
            <th>% Modems Offline</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <div className="ui pointing dropdown link item">
                CMTS-1
                <i className="dropdown icon" />
                <div className="menu">
                  <a className="item mac_domine_cmts">View Mac Domain</a>
                  <a
                    className="item"
                    href="../Network_Details/Network_view.html"
                  >
                    Network View
                  </a>
                  <a className="item" href="../Network_Details/Map_view.html">
                    Map View
                  </a>
                </div>
              </div>
            </td>
            <td>12</td>
            <td>10</td>
            <td>2</td>
          </tr>
          <tr>
            <td>
              <div className="ui pointing dropdown link item">
                CMTS-2
                <i className="dropdown icon" />
                <div className="menu">
                  <a className="item mac_domine_cmts">View Mac Domain</a>
                  <a
                    className="item"
                    href="../Network_Details/Network_view.html"
                  >
                    Network View
                  </a>
                  <a className="item" href="../Network_Details/Map_view.html">
                    Map View
                  </a>
                </div>
              </div>
            </td>
            <td>12</td>
            <td>10</td>
            <td>2</td>
          </tr>
          <tr>
            <td>
              <div className="ui pointing dropdown link item">
                CMTS-3
                <i className="dropdown icon" />
                <div className="menu">
                  <a className="item mac_domine_cmts">View Mac Domain</a>
                  <a
                    className="item"
                    href="../Network_Details/Network_view.html"
                  >
                    Network View
                  </a>
                  <a className="item" href="../Network_Details/Map_view.html">
                    Map View
                  </a>
                </div>
              </div>
            </td>
            <td>12</td>
            <td>10</td>
            <td>2</td>
          </tr>
          <tr>
            <td>
              <div className="ui pointing dropdown link item">
                CMTS-4
                <i className="dropdown icon" />
                <div className="menu">
                  <a className="item mac_domine_cmts">View Mac Domain</a>
                  <a
                    className="item"
                    href="../Network_Details/Network_view.html"
                  >
                    Network View
                  </a>
                  <a className="item" href="../Network_Details/Map_view.html">
                    Map View
                  </a>
                </div>
              </div>
            </td>
            <td>12</td>
            <td>10</td>
            <td>2</td>
          </tr>
          <tr>
            <td>
              <div className="ui pointing dropdown link item">
                CMTS-5
                <i className="dropdown icon" />
                <div className="menu">
                  <a className="item mac_domine_cmts">View Mac Domain</a>
                  <a
                    className="item"
                    href="../Network_Details/Network_view.html"
                  >
                    Network View
                  </a>
                  <a className="item" href="../Network_Details/Map_view.html">
                    Map View
                  </a>
                </div>
              </div>
            </td>
            <td>12</td>
            <td>10</td>
            <td>2</td>
          </tr>

        </tbody>
        <tfoot>
          <tr>
            <th colSpan="10">
              <div className="ui right floated mini pagination menu">
                <a className="icon item">
                  <i className="left chevron icon" />
                </a>
                <a className="active item">1</a>
                <a className="item">2</a>
                <a className="item">3</a>
                <a className="icon item">
                  <i className="right chevron icon" />
                </a>
              </div>
            </th>
          </tr>
        </tfoot>

      </table>
    );
  }
}
