import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";

const OmComponent = () => {
  return (
    <Container className="py-5">
      <h1 className="text-center mb-4">Om Oss</h1>
      <Row>
        <Col md={6}>
          <Card className="shadow-sm mb-4">
            <Card.Body>
              <Card.Title>Vår Misjon</Card.Title>
              <Card.Text>
                Vi er dedikert til å gi deg den beste opplevelsen gjennom våre tjenester og arrangementer.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6}>
          <Card className="shadow-sm mb-4">
            <Card.Body>
              <Card.Title>Vårt Team</Card.Title>
              <Card.Text>
                Vi er et team av profesjonelle som jobber for å sikre at du får de beste opplevelsene.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default OmComponent;
