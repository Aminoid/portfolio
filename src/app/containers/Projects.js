import React, { Component } from 'react';
import {
  Tab,
  Grid
} from "semantic-ui-react";

import { projects } from '../config/projects';
import Pane from '../components/Pane';

class Projects extends Component {
  render() {
    const panes = projects.map(project => {
      return {
        "menuItem": project.key,
        "render": () => <Pane list={project.list} />
      }
    });
    return (
        <Grid padded className="project-container" centered>
          <Tab menu={{ secondary: true, pointing: true }} panes={panes}  />
        </Grid>

    )
  }
}

export default Projects;
