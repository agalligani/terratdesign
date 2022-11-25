import React from "react";
import {Container, Nav, Navbar, NavDropdown} from 'react-bootstrap';
import {LinkContainer} from 'react-router-bootstrap';
import SmallLogo from "../Logos/SmallLogo";

function DesignNav() {
  return (
    <Navbar bg="light" expand="lg" className="bg-white">
      <Container>
        <Navbar.Brand href="/"><SmallLogo /></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
          <LinkContainer to="/portfolio/hotel">
              <Nav.Link><span className="redred">HOT</span>EL</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/portfolio/restaurant">
              <Nav.Link><span className="redred">REST</span>AURANT</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/portfolio/residential">
              <Nav.Link><span className="redred">RESI</span>DENTIAL</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/about">
            <Nav.Link>About</Nav.Link>
          </LinkContainer>
          {/* <LinkContainer to="/contact">
            <Nav.Link>Contact</Nav.Link>
          </LinkContainer> */}
            <NavDropdown title="Portfolio" id="basic-nav-dropdown">
              <LinkContainer to="/portfolio/hotel1">
                <NavDropdown.Item>Hotel1</NavDropdown.Item>
              </LinkContainer>
              <LinkContainer to="/portfolio/hotel2">
                <NavDropdown.Item>Hotel2</NavDropdown.Item>
              </LinkContainer>
              <LinkContainer to="/portfolio/hotel3">
                <NavDropdown.Item>Hotel3</NavDropdown.Item>
              </LinkContainer>
              <LinkContainer to="/portfolio/restaurant2">
                <NavDropdown.Item>Restaurant2</NavDropdown.Item>
              </LinkContainer>
              <LinkContainer to="/portfolio/residential">
                <NavDropdown.Item>Residential</NavDropdown.Item>
              </LinkContainer>
              <LinkContainer to="/portfolio/residential2">
                <NavDropdown.Item>Residential2</NavDropdown.Item>
              </LinkContainer>
              <LinkContainer to="/portfolio/residential3">
                <NavDropdown.Item>Residential3</NavDropdown.Item>
              </LinkContainer>
              <LinkContainer to="/portfolio/residential4">
                <NavDropdown.Item>Residential4</NavDropdown.Item>
              </LinkContainer>
              <LinkContainer to="/portfolio/residential5">
                <NavDropdown.Item>Residential5</NavDropdown.Item>
              </LinkContainer>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default DesignNav;