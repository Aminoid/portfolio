import React, { Component } from 'react';
import {
  Grid,
  Card,
  Label,
  Divider
} from 'semantic-ui-react';

class Pane extends Component {
  render() {
    let list = this.props.list;
    return (
      <Grid stackable columns={2} padded textAlign="left">
        {
          list && list[0] && list.map((value, index) =>
            <Grid.Column key={index}>
              <Card fluid raised style={{ height: "200px"}} href={value.link}>
                <Card.Content style={{overflow: "hidden"}}>
                  <Card.Header>
                    {value.name ? value.name: null}
                  </Card.Header>
                  <Card.Meta>
                    {value.organisation ? value.organisation: "NC State University"}
                  </Card.Meta>
                  <Card.Description>
                    {value.description ? value.description: null}
                    <Divider clearing />
                    <Label.Group>
                      {
                        value.technologies && value.technologies[0] && value.technologies.map(tech => <Label key={tech} content={tech} />)
                      }
                    </Label.Group>
                  </Card.Description>
                </Card.Content>

              </Card>
            </Grid.Column>
          )
        }

      </Grid>
    )
  }
}

export default Pane;
