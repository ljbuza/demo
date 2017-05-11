import React, { Component } from 'react';
import { Container, Grid } from 'semantic-ui-react';

export default class Header extends Component {
  render() {
    return (
      <div id="header">
        <Container id="header_content">
          <Grid>
            <Grid.Row columns={1}>
              <Grid.Column>
                <h2 className="ui header">
                  Data Browser
                  <div className="sub header">{this.props.subheader}</div>
                </h2>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Container>
      </div>
    );
  }
}