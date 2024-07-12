import "./App.css";
import "@fontsource/ubuntu/300.css";
import "@fontsource/ubuntu/400.css";
import "@fontsource/ubuntu/500.css";
import "@fontsource/ubuntu/700.css";
import MobileNavbar from "./components/mobile-navbar/MobileNavbar";
import DesktopNavbar from "./components/desktop-navbar/DesktopNavbar";
function App() {
  return (
    <>
      <MobileNavbar />
      <DesktopNavbar />
    </>
  );
}

export default App;
