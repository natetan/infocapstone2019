import React, { Component } from 'react';
import { Header } from '../Header/Header';
import { Team } from '../Team/Team';

import './LandingPage.css';

const strings = require('../resources/Strings.json');

export class LandingPage extends Component {
  render() {
    return (
      <div>
        <Header title={strings.teamName} subtitle={`${strings.problemStatement} ${strings.problemSolution}`} />
        <div className="container">
          <h1>The Team</h1>
          <Team />
        </div>
      </div>
    )
  }
}