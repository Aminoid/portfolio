import React, { Component } from 'react';
import { Grid } from 'semantic-ui-react';

import Sidebar from '../components/Sidebar';

class Main extends Component {
  render() {
    return (
      <div>
        <Grid>
          <Grid.Row>
            <Grid.Column width={4} className="sidebar" stretched>
              <Sidebar />
            </Grid.Column>
            <Grid.Column width={12} className="content">
              {this.props.children}
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    )
  }
}

export default Main;
