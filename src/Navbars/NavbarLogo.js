import React, { Component } from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';

export class NavbarLogo extends Component {
  render() {
    return (
      <div>
        <Navbar color="faded" light>
          <NavbarBrand href="../../logo.svg" className="mr-auto">Test</NavbarBrand>
        </Navbar>
      </div>
    )
  }
}