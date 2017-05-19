import React, { Component } from "react";
import {
  Accordion,
  Button,
  Card,
  Label,
  Image,
  Divider,
  Menu,
  Segment,
  Header,
  Grid
} from "semantic-ui-react";
import DataTable from "./DataTable";
import tableData from "../data/SubscrOverviewData.js";

const Alerts = () => (
  <table className="ui striped compact table">
    <thead>
      <tr>
        <th>Field</th>
        <th>Value</th>
        <th>Interface</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td />
        <td>No Alerts</td>
        <td />
      </tr>
    </tbody>
  </table>
);

const All = () => (
  <table className="ui compact striped celled definition table">
    <tbody>
      <tr>
        <th>&nbsp;</th>
        <td><a href="#openModal">P</a></td>
        <td><a href="#openModal">0</a></td>
        <td><a href="#openModal">1</a></td>
        <td><a href="#openModal">2</a></td>
        <td><a href="#openModal">3</a></td>
        <td><a href="#openModal">4</a></td>
      </tr>

      <tr>
        <th>SNR</th>
        <td><a href="#openModal">12</a></td>
        <td><a href="#openModal">2.0</a></td>
        <td><a href="#openModal">12</a></td>
        <td><a href="#openModal">12</a></td>
        <td><a href="#openModal">12</a></td>
      </tr>
      <tr>
        <th>RXMER</th>
        <td><a href="#openModal">12</a></td>
        <td><a href="#openModal">12</a></td>
        <td><a href="#openModal">12</a></td>
        <td><a href="#openModal">12</a></td>
        <td><a href="#openModal">12</a></td>
        <td><a href="#openModal">12</a></td>
      </tr>
      <tr>
        <th>DownPower</th>
        <td><a href="#openModal">12</a></td>
        <td><a href="#openModal">12</a></td>
        <td><a href="#openModal">12</a></td>
        <td><a href="#openModal">12</a></td>
        <td><a href="#openModal">12</a></td>
        <td><a href="#openModal">12</a></td>
      </tr>
      <tr>
        <th>Reflection</th>
        <td><a href="#openModal">2</a></td>
        <td><a href="#openModal">2</a></td>
        <td><a href="#openModal">2</a></td>
        <td><a href="#openModal">2</a></td>
        <td><a href="#openModal">2</a></td>
        <td><a href="#openModal">2</a></td>
      </tr>
      <tr>
        <th>FEC........</th>
        <td><a href="#openModal">2</a></td>
        <td><a href="#openModal">2</a></td>
        <td><a href="#openModal">2</a></td>
        <td><a href="#openModal">2</a></td>
        <td><a href="#openModal">2</a></td>
        <td><a href="#openModal">2</a></td>
      </tr>
      <tr>
        <th>FEC........</th>
        <td><a href="#openModal">2</a></td>
        <td><a href="#openModal">2</a></td>
        <td><a href="#openModal">2</a></td>
        <td><a href="#openModal">2</a></td>
        <td><a href="#openModal">2</a></td>
        <td><a href="#openModal">2</a></td>
      </tr>
      <tr>
        <th>FEC........</th>
        <td><a href="#openModal">2</a></td>
        <td><a href="#openModal">2</a></td>
        <td><a href="#openModal">2</a></td>
        <td><a href="#openModal">2</a></td>
        <td><a href="#openModal">2</a></td>
        <td><a href="#openModal">2</a></td>
      </tr>
    </tbody>
  </table>
);

const Power = () => (
  <table className="ui compact striped celled definition table">
    <tbody>
      <tr>
        <th>Interface</th>
        <td><a href="#openModal">P</a></td>
        <td><a href="#openModal">0</a></td>
        <td><a href="#openModal">1</a></td>
        <td><a href="#openModal">2</a></td>
        <td><a href="#openModal">3</a></td>
        <td><a href="#openModal">4</a></td>
      </tr>
      <tr>
        <th>RXMER</th>
        <td><a href="#openModal">12</a></td>
        <td><a href="#openModal">12</a></td>
        <td><a href="#openModal">12</a></td>
        <td><a href="#openModal">12</a></td>
        <td><a href="#openModal">12</a></td>
        <td><a href="#openModal">12</a></td>
      </tr>
      <tr>
        <th>DownPower</th>
        <td><a href="#openModal">12</a></td>
        <td><a href="#openModal">12</a></td>
        <td><a href="#openModal">12</a></td>
        <td><a href="#openModal">12</a></td>
        <td><a href="#openModal">12</a></td>
        <td><a href="#openModal">12</a></td>
      </tr>
    </tbody>
  </table>
);

class Info1 extends Component {
  state = { activeItem: "alert" };
  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    const { activeItem } = this.state;
    const tabContent = [<Alerts />, <Power />, <All />];
    return (
      <div className="scrolling">
        <Menu attached="top" tabular>
          <Menu.Item
            name="alert"
            active={activeItem === "alert"}
            onClick={this.handleItemClick}
          />
          <Menu.Item
            name="power"
            active={activeItem === "power"}
            onClick={this.handleItemClick}
          />
          <Menu.Item
            name="all"
            active={activeItem === "all"}
            onClick={this.handleItemClick}
          />
        </Menu>
        <Segment attached="bottom">
          {activeItem === "alert" ? tabContent[0] : ""}
          {activeItem === "power" ? tabContent[1] : ""}
          {activeItem === "all" ? tabContent[2] : ""}
        </Segment>
      </div>
    );
  }
}

class Info2 extends Component {
  state = { activeItem: "alert" };

  handleItemClick = (e, { name }) => {
    this.setState({ activeItem: name });
  };

  render() {
    const { activeItem } = this.state;
    const tabContent = [<Alerts />, <Power />, <All />];
    return (
      <div className="scrolling">
        <Menu attached="top" tabular>
          <Menu.Item
            name="alert"
            active={activeItem === "alert"}
            onClick={this.handleItemClick}
          />
          <Menu.Item
            name="power"
            active={activeItem === "power"}
            onClick={this.handleItemClick}
          />
          <Menu.Item
            name="PNM"
            active={activeItem === "PNM"}
            onClick={this.handleItemClick}
          />
          <Menu.Item
            name="all"
            active={activeItem === "all"}
            onClick={this.handleItemClick}
          />
        </Menu>
        <Segment attached="bottom">
          {activeItem === "alert" ? tabContent[0] : ""}
          {activeItem === "power" ? tabContent[1] : ""}
          {activeItem === "all" ? tabContent[2] : ""}
        </Segment>
      </div>
    );
  }
}

const CardGroups = () => (
  <Grid columns={2}>
    <Grid.Row>
      <Grid.Column>
        <Card.Group>
          <Card fluid>
            <Card.Content>
              <Image floated="right" size="mini" src="/img/cmts.jpg" />
              <Card.Header>
                CMTS Health
              </Card.Header>
              <Card.Meta>
                Last Updated : 10 Minutes ago
              </Card.Meta>
              <Card.Description>
                <table className="ui compact very basic table">
                  <tr>
                    <td className="right aligned">Port:</td>
                    <td>C/U2/7.0</td>
                  </tr>
                  <tr>
                    <td className="right aligned">Fiber Node:</td>
                    <td>3</td>
                  </tr>
                  <tr>
                    <td className="right aligned">Port Capacity:</td>
                    <td className="positive">80% </td>
                  </tr>
                  <tr>
                    <td className="right aligned">Online Percent</td>
                    <td>100%</td>
                  </tr>
                </table>
              </Card.Description>
              <Divider />
              <b>Info 1</b>
              <Info1 />
              <Divider />
              <b>Info 2</b>
              <Info2 />
            </Card.Content>
          </Card>
        </Card.Group>
      </Grid.Column>
      <Grid.Column>
        <Card.Group>
          <Card fluid>
            <Card.Content>
              <Image floated="right" size="mini" src="/img/modem.jpg" />
              <Card.Header>
                Modem-X Health
              </Card.Header>
              <Card.Meta>
                Last Updated : 8 Minutes ago
              </Card.Meta>
              <Card.Description>
                <table className="ui compact very basic table">
                  <tr>
                    <td className="right aligned">Equipment Type:</td>
                    <td>Cable Modem </td>
                  </tr>
                  <tr>
                    <td className="right aligned">Mac Address:</td>
                    <td>
                      <a href="Filters/filter_cpe.html">AA:BB:CC:DD:EE:FF</a>
                    </td>
                  </tr>
                  <tr>
                    <td className="right aligned">IP Address:</td>
                    <td>
                      <a href="Filters/filter_cpe.html">60.10.208.10 </a>
                      <a href="Filters/filter_cpe.html">
                        <div className="ui icon button" data-tooltip="History">
                          <i className="history icon" />
                        </div>
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td className="right aligned">Service:</td>
                    <td>DOCSIS</td>
                  </tr>
                  <tr>
                    <td className="right aligned">Product Name:</td>
                    <td>TDS-GOLD</td>
                  </tr>
                  <tr>
                    <td className="right aligned">Download Speed:</td>
                    <td>10 Mbps</td>
                  </tr>
                  <tr>
                    <td className="right aligned">Upload Speed:</td>
                    <td>10 Mbps</td>
                  </tr>
                  <tr>
                    <td className="right aligned">Prove Type:</td>
                    <td>100.10</td>
                  </tr>
                </table>
                <Divider />
                <b>D/S Data</b>
                <Info1 />
                <Divider />
                <b>U/S Data</b>
                <Info2 />
              </Card.Description>
            </Card.Content>
          </Card>
        </Card.Group>
      </Grid.Column>
    </Grid.Row>
  </Grid>
);

const panels = [
  {
    key: "1",
    title: "Alerts",
    content: <Alerts />
  },
  {
    key: "2",
    title: "CMTS-01",
    content: <CardGroups />
  },
  {
    key: "3",
    title: "CMTS-02",
    content: <CardGroups />
  }
];

export default class SubscriberOverview extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: tableData.tableData,
      activeIndex: [0, 1]
    };
  }

  handleTitleClick = (e, i) =>
    this.setState({
      activeIndex: this.state.activeIndex.indexOf(i) >= 0
        ? this.state.activeIndex.pop(i)
        : this.state.activeIndex.push(3)
    });

  render() {
    return (
      <div>
        {/* <h1>Hello {this.props.match.params.userid}</h1>*/}
        <Accordion panels={panels} fluid styled open exclusive={false} />
        <Header as="h5" attached="top">Orders</Header>
        <Segment attached="bottom">
          <DataTable data={tableData.tableData.orders} />
        </Segment>
        <Header as="h5" attached="top">Equipment</Header>
        <Segment attached="bottom">
          <DataTable data={tableData.tableData.equipment} />
        </Segment>
      </div>
    );
  }
}
