import React from "react";
import { Container, Button, Row, Col } from "react-bootstrap";

const HomepageComponent = () => {
  return (
    <Container className="py-5 text-center">
      <h1 className="display-3 font-weight-bold mb-4">Velkommen til Hjemmesiden</h1>
      <p className="lead text-muted mb-4">Her finner du informasjon om våre tjenester og kommende arrangementer.</p>
      <Row className="justify-content-center">
        <Col md={6}>
          <Button variant="primary" size="lg" href="/Kalender">Se Kalender</Button>
        </Col>
      </Row>
    </Container>
  );
};

export default HomepageComponent;
