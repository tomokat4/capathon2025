import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import { Navbar, Nav, Container, Form } from "react-bootstrap";
import HomepageComponent from "./components/HomepageComponent";
import OmComponent from "./components/OmComponent";
import KalenderComponent from "./components/KalenderComponent";
import FooterComponent from "./components/FooterComponent";

function App() {
  const [showDarkMode, setShowDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setShowDarkMode((prevMode) => !prevMode);
  };

  return (
    <Router>
      <div className={showDarkMode ? "dark bg-dark text-light" : "bg-light text-dark"}>
        {/* Navbar */}
        <Navbar expand="lg" className={showDarkMode ? "bg-dark navbar-dark" : "bg-light navbar-light shadow-sm"}>
          <Container>
            <Navbar.Brand as={Link} to="/Homepage">Min Nettside</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link as={Link} to="/Homepage">Hjem</Nav.Link>
                <Nav.Link as={Link} to="/Kalender">Kalender</Nav.Link>
                <Nav.Link as={Link} to="/Om">Om Oss</Nav.Link>
              </Nav>
              <Form.Check 
                type="switch" 
                id="dark-mode-switch" 
                onChange={toggleDarkMode} 
                checked={showDarkMode} 
                label="Dark Mode" 
                className="text-light" 
              />
            </Navbar.Collapse>
          </Container>
        </Navbar>

        {/* Main Content */}
        <main className="min-vh-100 p-4">
          <Container>
            <Routes>
              <Route path="/Homepage" element={<HomepageComponent />} />
              <Route path="/Kalender" element={<KalenderComponent />} />
              <Route path="/Om" element={<OmComponent />} />
            </Routes>
          </Container>
        </main>

        {/* Footer */}
        <FooterComponent />
      </div>
    </Router>
  );
}

export default App;
