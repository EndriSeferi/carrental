import React from "react";
import { Navbar, Nav , Container } from "react-bootstrap";
function MyNavbar() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" fixed="top" variant="dark">
      <Container>
        <Navbar.Brand href="#home">Elite Car Rental</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse className="justify-content-end" id="responsive-navbar-nav">
          <Nav>
            <Nav.Link href="#deets">Home</Nav.Link>
            <Nav.Link href="#deets">About Us</Nav.Link>
            <Nav.Link href="#deets">Our Policy</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MyNavbar;
