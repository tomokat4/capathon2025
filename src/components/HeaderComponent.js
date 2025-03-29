import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav, Container, Form, NavDropdown } from "react-bootstrap";

const HeaderComponent = (props) => {
  const headerClass = props.showDarkMode ? "bg-dark navbar-dark" : "bg-light navbar-light";

  return (
    <Navbar expand="lg" className={headerClass}>
      <Container>
        <Navbar.Brand as={Link} to="/Homepage">Aktivio</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/Homepage">Hjem</Nav.Link>
            <Nav.Link as={Link} to="/Kalender">Kalender</Nav.Link>
            <Nav.Link as={Link} to="/Om">Om Oss</Nav.Link>
            {/* Optional Dropdown */}
            <NavDropdown title="Tjenester" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something else</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Form.Check 
            type="switch" 
            id="dark-mode-switch" 
            onChange={props.toggleDarkMode} 
            checked={props.showDarkMode} 
            label="Mørk Modus" 
            className="text-light" 
          />
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default HeaderComponent;
