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
          <LinkContainer to="/">
            <Nav.Link>Home</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/about">
            <Nav.Link>About</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/contact">
            <Nav.Link>Contact</Nav.Link>
          </LinkContainer>
            <NavDropdown title="Portfolio" id="basic-nav-dropdown">
              <LinkContainer to="/portfolio/carousel">
                <NavDropdown.Item>Carousel</NavDropdown.Item>
              </LinkContainer>
              <LinkContainer to="/portfolio/hotel">
                <NavDropdown.Item>Hotel</NavDropdown.Item>
              </LinkContainer>
              <LinkContainer to="/portfolio/hotel2">
                <NavDropdown.Item>Hotel2</NavDropdown.Item>
              </LinkContainer>
              <LinkContainer to="/portfolio/hotel3">
                <NavDropdown.Item>Hotel3</NavDropdown.Item>
              </LinkContainer>
              <LinkContainer to="/portfolio/restaurant">
                <NavDropdown.Item>Restaurant</NavDropdown.Item>
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
              {/* <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item> */}
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default DesignNav;