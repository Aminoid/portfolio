import React, { Component } from 'react';
import {
  Grid,
  Segment,
  Image,
  Menu,
  Header,
  Button
} from 'semantic-ui-react';
import { Link } from 'react-router-dom';

import Profile from '../assets/profile.jpg';
import Resume from '../assets/amitkanwar_resume.pdf';

class Sidebar extends Component {
  handleButton(value) {
    let url = null;
    switch(value) {
      case 0:
        url = "https://www.facebook.com/aminoid92"
        break;
      case 1:
        url = "https://linkedin.com/in/kanwaramit"
        break;
      default:
        url = "https://github.com/aminoid"
        break;
    }
    window.open(url, '_blank');
  }
  render() {
    return (
      <Segment className="sidebar-segment">
        <Grid className="sidebar-grid" divided="vertically" centered>
          <Grid.Row>
            <Grid.Column>
              <Image src={Profile} className="profile-image" centered />
              <Header as='h3' textAlign="center">
                Amit Kanwar
                <Header.Subheader>
                  MS in Computer Science, NC State University
                  Google Summer of Code 2017
                </Header.Subheader>
              </Header>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row verticalAlign="top">
            <Grid.Column>
              <Menu pointing secondary vertical size="huge" fluid className="sidebar-menu" borderless>
                <Menu.Item name='home' as={Link} to="/" header />
                <Menu.Item name='projects' as={Link} to="/projects" header/>
                <Menu.Item name='resume' onClick={() => window.open(Resume, '_blank')} header/>
              </Menu>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row verticalAlign="bottom">
            <Button circular color='facebook' icon='facebook' onClick={() => this.handleButton(0)}/>
            <Button circular color='linkedin' icon='linkedin' onClick={() => this.handleButton(1)}/>
            <Button circular color='black' icon='github' onClick={() => this.handleButton(2)}/>
          </Grid.Row>
        </Grid>

      </Segment>
    )
  }
}

export default Sidebar;
