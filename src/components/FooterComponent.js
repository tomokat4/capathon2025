import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const FooterComponent = () => {
  return (
    <footer className="bg-dark text-light text-center py-4 mt-5">
      <Container>
        <Row>
          <Col>
            <p>&copy; {new Date().getFullYear()} Min Nettside. Alle rettigheter forbeholdt.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default FooterComponent;
