import React, { Component } from 'react';

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
        <div className="ui vertical text menu">
          <div className="item">
            <div className="ui small header">Favorite Filters</div>
            <div className="menu">
              <a className="item" target="_top" href=" ">Offline Report</a>
              <a className="item" target="_top" href=" ">Bend Cable Modems</a>
              <a className="item" target="_top" href=" ">Max Power</a>
            </div>
          </div>
          <div className="item">
            <div className="ui small header">Shared Filters</div>
            <div className="menu">
              <a className="item" target="_top">High SNR</a>
              <a className="item" target="_top" href=" ">High Flaps</a>
              <a className="item" target="_top" href=" ">
                Un-Provisioned Subscriber
              </a>
              <a className="item" target="_top" href="shared_filters.html">
                <i className="add circle icon" />Add more
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
