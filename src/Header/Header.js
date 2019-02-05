import React, { Component } from 'react';
import { Jumbotron, Container, Row, Col } from 'reactstrap';
import './Header.css';

const logo = require('../resources/images/blood-pact-logo.png');

export class Header extends Component {
  render() {
    return (
      <div>
        <Jumbotron className="bg-dark text-white" fluid>
          <Container fluid>
            <Row>
              <Col sm="2">
                <img src={logo} />
              </Col>
              <Col sm="10">
                <h1 className="display-3">{this.props.title}</h1>
                <p className="lead">{this.props.subtitle}</p>
              </Col>
            </Row>
          </Container>
        </Jumbotron>
      </div>
    )
  }
}