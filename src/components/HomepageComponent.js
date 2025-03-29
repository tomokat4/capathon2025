// HomepageComponent.js
import React from "react";
import { Container } from "react-bootstrap";
import KarusellComponent from "./KarusellComponent"; // Adjust the import path

const HomepageComponent = () => {
  return (
    <Container className="py-5 text-center">
      {/* Add the controlled carousel here */}
      <KarusellComponent />
    </Container>
  );
};

export default HomepageComponent;
