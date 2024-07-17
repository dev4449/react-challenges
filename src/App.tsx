import "./App.css";
import "@fontsource/ubuntu/300.css";
import "@fontsource/ubuntu/400.css";
import "@fontsource/ubuntu/500.css";
import "@fontsource/ubuntu/700.css";
import MobileNavbar from "./components/mobile-navbar/MobileNavbar";
import DesktopNavbar from "./components/DesktopNavbar";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import ChallengePage from "./components/pages/ChallengePage";

function App() {
  return (
    <BrowserRouter>
      <div className="text-primary">
        <MobileNavbar />
        <DesktopNavbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/challenges/:challengeId" element={<ChallengePage />} />
          <Route path="*" element={<div>404 Not Found</div>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
