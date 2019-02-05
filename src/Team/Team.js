import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Button, Col, Row } from 'reactstrap';

export class Team extends Component {
  render() {
    return (
      <Row>
        <Col sm="4">
          <Card>
            <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" />
            <CardBody>
              <CardTitle>Yulong Tan</CardTitle>
              <CardSubtitle>Developer</CardSubtitle>
              <hr />
              <CardText><em>When he's not goofing around, he's skating. When he's not skating, he's actually being productive...or just procrastinating.</em></CardText>
              <Button>Button</Button>
            </CardBody>
          </Card>
        </Col>
      </Row>
    )
  }
}