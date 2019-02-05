import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, CardLink, Button, Col, Row } from 'reactstrap';

const test = require('../resources/images/skate-mario.jpg');
const team = require('./Team.json');

export class Team extends Component {
  render() {
    let teamCards = team.map((member) => {
      return (
        <Col sm="3">
          <Card key={member.firstName}>
            <CardImg top width="100%" src={member.image} alt={`${member.firstName} ${member.lastName}`} />
            <CardBody>
              <CardTitle>{member.firstName} {member.lastName}</CardTitle>
              <CardSubtitle>Role: {member.role}</CardSubtitle>
              <CardSubtitle>Email: {member.email}</CardSubtitle>
              <CardSubtitle>Phone: {member.phone}</CardSubtitle>
              <hr />
              <CardText><em>{member.bio}</em></CardText>
              <Button className="bg-success">
                <CardLink className="text-white" target="_blanK" href={member.githubUrl}>More Info</CardLink>
              </Button>
            </CardBody>
          </Card>
        </Col>
      )
    })
    return (
      <Row>
        {teamCards}
      </Row>
    )
  }
}