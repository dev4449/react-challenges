import "./App.css";
import "@fontsource/ubuntu/300.css";
import "@fontsource/ubuntu/400.css";
import "@fontsource/ubuntu/500.css";
import "@fontsource/ubuntu/700.css";
import MobileNavbar from "./components/mobile-navbar/MobileNavbar";
import DesktopNavbar from "./components/desktop-navbar/DesktopNavbar";
import Introduction from "./components/introduction/Introduction";
import Challenge from "./components/challenge/Challenge";
import stopwatchImage from "./assets/img/challenges/stopwatch.jpg";
import Stopwatch from "./components/challenges/stopwatch/Stopwatch";

function App() {
  return (
    <div className="text-primary">
      <MobileNavbar />
      <DesktopNavbar />
      <section className="flex justify-center mx-4 mt-6">
        <Introduction />
      </section>

      <section className="flex justify-center mx-4 mt-6 gap-y-8 gap-x-8 flex-wrap">
        <Challenge
          name="Challenge #1: Stop Watch / Timer"
          description=" A stop watch or timer that tracks time in seconds. Has the ability to
        start, stop, and reset."
          img={stopwatchImage}
          imgAlt="An image of the stopwatch challenge."
        />
        <Challenge
          name="Challenge #1: Stop Watch / Timer"
          description=" A stop watch or timer that tracks time in seconds. Has the ability to
        start, stop, and reset."
          img={stopwatchImage}
          imgAlt="An image of the stopwatch challenge."
        />
        <Challenge
          name="Challenge #1: Stop Watch / Timer"
          description=" A stop watch or timer that tracks time in seconds. Has the ability to
        start, stop, and reset."
          img={stopwatchImage}
          imgAlt="An image of the stopwatch challenge."
        />
        <Challenge
          name="Challenge #1: Stop Watch / Timer"
          description=" A stop watch or timer that tracks time in seconds. Has the ability to
        start, stop, and reset."
          img={stopwatchImage}
          imgAlt="An image of the stopwatch challenge."
        />
        <Challenge
          name="Challenge #1: Stop Watch / Timer"
          description=" A stop watch or timer that tracks time in seconds. Has the ability to
        start, stop, and reset."
          img={stopwatchImage}
          imgAlt="An image of the stopwatch challenge."
        />
        <Challenge
          name="Challenge #1: Stop Watch / Timer"
          description=" A stop watch or timer that tracks time in seconds. Has the ability to
        start, stop, and reset."
          img={stopwatchImage}
          imgAlt="An image of the stopwatch challenge."
        />
      </section>

      <section className="mx-4 mt-6 lg:w-1/3 lg:mx-auto">
        <Stopwatch />
      </section>
    </div>
  );
}

export default App;
