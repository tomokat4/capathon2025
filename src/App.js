import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HeaderComponent from "./components/HeaderComponent";
import HomepageComponent from "./components/HomepageComponent";
import OmComponent from "./components/OmComponent";
import KalenderComponent from "./components/KalenderComponent";
import FooterComponent from "./components/FooterComponent";

function App() {
  const [showDarkMode, setShowDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setShowDarkMode(!showDarkMode);
  };

  return (
    <div>
      <Router>
        <HeaderComponent
          showDarkMode={showDarkMode}
          toggleDarkMode={toggleDarkMode}
        />
        <Routes>
          <Route
                      path="/Homepage"
                      element={<HomepageComponent showDarkMode={showDarkMode} />}
                    />
                    <Route
                      path="/Kalender"
                      element={<AktivitetsloggComponent showDarkMode={showDarkMode} />}
          />
          <Route
            path="/Om"
            element={<OmComponent />}
            showDarkMode={showDarkMode}
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
