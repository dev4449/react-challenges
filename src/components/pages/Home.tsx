import Introduction from "../Introduction";
import Challenge from "../challenge/Challenge";
import stopwatchImage from "../challenges/Stopwatch/Stopwatch.jpg";
import Stopwatch from "../challenges/Stopwatch/Stopwatch";
import Progressbar from "../challenges/Progressbar/Progressbar";

const Home = () => {
  return (
    <>
      <section className="flex justify-center mx-4 mt-6">
        <Introduction />
      </section>

      <section className="flex justify-center mx-4 mt-6 gap-y-8 gap-x-8 flex-wrap">
        <Challenge
          name="Challenge #1: Stop Watch / Timer"
          description="Create a component called Stopwatch that has the ability to view and track time in hours/minutes/seconds and also the ability to start/stop/reset the tracking."
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

      <section className="mx-4 mt-6 lg:w-1/3 lg:mx-auto">
        <Progressbar />
      </section>
    </>
  );
};

export default Home;
