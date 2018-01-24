import React, { Component } from 'react';
import {
  Container,
  Header,
  Label
} from 'semantic-ui-react';

class Home extends Component {
  render() {
    return (
      <Container className="home-container">
      <Container text textAlign="left">
        <Header as='h2'>Hi, I'm Amit</Header>
        <p>
          I’m a Masters in Computer Science Graduate from North Carolina State University.
          I did my Bachelors in Computer Science from Birla Institute of Technology and Sciences, Pilani (India).
          I love to explore new technologies and build amazing applications.
          My interests include Full Stack Web and Mobile Development, Machine Learning, Cloud Computing,
          Distributed Systems and DevOps.
        </p>
        <Header as="h3">My Objective</Header>
        <p>
          Apply knowledge and experience to develop and support new technologies
          and products. I believe “Hard Work and Humility are the keys to success” and
          have applied this throughout my life.
        </p>
        <Header as="h3">Skills</Header>
        <Label.Group size="large">
          {
            ["C", "Python", "R", "Java", "JavaScript", "Ruby", "AngularJS", "ReactJS",
            "React Native", "Redux", "LAMP", "MEAN Stack", "Flask", "Ruby on Rails",
            "SQL", "AWS", "Docker"].map((value) =>
              <Label key={value} content={value} />
          )}
        </Label.Group>
        <Header as="h3">Course Work</Header>
        <Label.Group size="large">
          {
            ["Design and Analysis of Algorithms", "Operating Systems", "Database Systems",
            "Computer Networks", "Cloud Computing", "Data Intensive Computing", "Distributed Systems",
            "Foundations of Data Science", "Algorithms for Data Guided Business Intelligence"].map((value) =>
              <Label key={value} content={value} />
          )}
        </Label.Group>

      </Container>
    </Container>

    )
  }
}

export default Home;
