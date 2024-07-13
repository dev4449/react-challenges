import "./App.css";
import "@fontsource/ubuntu/300.css";
import "@fontsource/ubuntu/400.css";
import "@fontsource/ubuntu/500.css";
import "@fontsource/ubuntu/700.css";
import MobileNavbar from "./components/mobile-navbar/MobileNavbar";
import DesktopNavbar from "./components/desktop-navbar/DesktopNavbar";
import Introduction from "./components/introduction/Introduction";
function App() {
  return (
    <div className="text-primary">
      <MobileNavbar />
      <DesktopNavbar />
      <section className="flex justify-center mx-4 mt-6">
        <Introduction />
      </section>
    </div>
  );
}

export default App;
