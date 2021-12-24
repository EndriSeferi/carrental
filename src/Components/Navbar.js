import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
function MyNavbar() {
  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      style={{ backgroundColor: "#1c1c1c" }}
      fixed="top"
      variant="dark"
    >
      <Container>
        <Navbar.Brand href="/">Elite Car Rental</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse
          className="justify-content-end"
          id="responsive-navbar-nav"
        >
          <Nav>
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/about">About Us</Nav.Link>
            <Nav.Link href="/policy">Our Policy</Nav.Link>
            <Nav.Link href="/admin">Admin</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MyNavbar;
