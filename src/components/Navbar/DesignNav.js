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
          <LinkContainer to="/contact">
            <Nav.Link>Contact</Nav.Link>
          </LinkContainer>
            <NavDropdown title="Portfolio" id="basic-nav-dropdown">
              <LinkContainer to="/portfolio/hotel">
                <NavDropdown.Item>Hotel</NavDropdown.Item>
              </LinkContainer>
              <LinkContainer to="/portfolio/restaurant">
                <NavDropdown.Item>Restaurant</NavDropdown.Item>
              </LinkContainer>
              <LinkContainer to="/portfolio/residential">
                <NavDropdown.Item>Residential</NavDropdown.Item>
              </LinkContainer>
              <LinkContainer to="/portfolio/carousel">
                <NavDropdown.Item>Carousel</NavDropdown.Item>
              </LinkContainer>
              <LinkContainer to="/portfolio/restaurant2">
                <NavDropdown.Item>Restaurant2</NavDropdown.Item>
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