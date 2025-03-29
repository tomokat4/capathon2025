import React from "react";
import { Link } from "react-router";
import Nav from "react-bootstrap/Nav";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const HeaderComponent = (props) => {
  const headerClass = props.showDarkMode ? "bg-dark text-light" : "bg-light";

  return (
    <Container fluid className={headerClass}>
      <Container>
        <Row>
          <Col>
            <Nav defaultActiveKey="/Homepage">
              <Nav.Item>
                <Nav.Link as={Link} to="/Homepage">
                  Hjemmeside
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link as={Link} to="/Kalender">
                  Kalender
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link as={Link} to="/Om">
                  Info
                </Nav.Link>
              </Nav.Item>
            </Nav>
          </Col>
          <Col className="d-flex justify-content-end align-items-center">
            <Form.Check
              type="switch"
              id="custom-switch"
              onChange={props.toggleDarkMode}
              checked={props.showDarkMode}
              label="Dark Mode"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default HeaderComponent;
