import React from "react";
import { Container, Card, Row, Col, Button } from "react-bootstrap";

const KalenderComponent = () => {
  return (
    <Container className="py-5">
      <h1 className="text-center mb-4">Kalender</h1>
      <Row>
        <Col md={4}>
          <Card className="shadow-sm mb-4">
            <Card.Body>
              <Card.Title>Event 1</Card.Title>
              <Card.Text>Beskrivelse av første event.</Card.Text>
              <Button variant="outline-primary">Detaljer</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="shadow-sm mb-4">
            <Card.Body>
              <Card.Title>Event 2</Card.Title>
              <Card.Text>Beskrivelse av andre event.</Card.Text>
              <Button variant="outline-primary">Detaljer</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="shadow-sm mb-4">
            <Card.Body>
              <Card.Title>Event 3</Card.Title>
              <Card.Text>Beskrivelse av tredje event.</Card.Text>
              <Button variant="outline-primary">Detaljer</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default KalenderComponent;
