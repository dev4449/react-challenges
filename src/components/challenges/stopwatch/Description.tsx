import { Light as SyntaxHighlighter } from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/esm/styles/hljs";
import Stopwatch from "./Stopwatch";

const Description = () => {
  return (
    <div className="flex flex-wrap lg:flex-nowrap gap-x-14 gap-y-5">
      <div className="lg:w-1/3">
        <h2 className="text-3xl">Stopwatch / Timer</h2>
        <h3 className="text-2xl mt-4">Challenge Description</h3>

        <p>
          Create a component called Stopwatch that has the ability to view and
          track time in hours/minutes/seconds and also the ability to
          start/stop/reset the tracking.
        </p>
        <h3 className="text-2xl mt-4">See It In Action</h3>
        <Stopwatch />
      </div>
      <div className="w-full lg:w-2/3 rounded-xl border-[1px] border-primary p-5">
        <h2 className="text-3xl">My Solution</h2>
        <p className="mt-4">We will first define the component's structure:</p>
        <SyntaxHighlighter language="typescript" style={dracula}>
          {`
const Stopwatch = () => {
    return <div></div>;
};
`.trim()}
        </SyntaxHighlighter>

        <p>Then, we define the markup returned by the component:</p>
        <SyntaxHighlighter language="typescript" style={dracula}>
          {`
const Stopwatch = () => {
    return (
        <div className="text-center border-[1px] border-primary rounded-xl p-4">
        <p className="text-2xl">{convertTimeToString()}</p>
        <div className="mt-4 text-white text-lg flex flex-nowrap gap-x-2">
            <button
            className="w-1/3 h-[50px] rounded-lg bg-secondary"
            onClick={handleStart}
            >
            START
            </button>
            <button
            className="w-1/3 h-[50px] rounded-lg bg-secondary"
            onClick={handleStop}
            >
            STOP
            </button>
            <button
            className="w-1/3 h-[50px] rounded-lg bg-secondary"
            onClick={handleReset}
            >
            RESET
            </button>
        </div>
        </div>
    );
};

`.trim()}
        </SyntaxHighlighter>

        <p>
          The state can be a simple variable which is of type `number` that
          holds the amount of time passed in seconds. Therefore, in the
          component body, we need to first define this state:
        </p>

        <SyntaxHighlighter language="typescript" style={dracula}>
          {`
const Stopwatch = () => {
    const [time, setTime] = useState<number>(0);
    return (
        <div className="text-center border-[1px] border-primary rounded-xl p-4">
        <p className="text-2xl">{time}S Passed</p>
        <div className="mt-4 text-white text-lg flex flex-nowrap gap-x-2">
            <button
            className="w-1/3 h-[50px] rounded-lg bg-secondary"
            onClick={handleStart}
            >
            START
            </button>
            <button
            className="w-1/3 h-[50px] rounded-lg bg-secondary"
            onClick={handleStop}
            >
            STOP
            </button>
            <button
            className="w-1/3 h-[50px] rounded-lg bg-secondary"
            onClick={handleReset}
            >
            RESET
            </button>
        </div>
        </div>
    );
};
        `.trim()}
        </SyntaxHighlighter>

        <p>
          We can use the <code>setInterval</code> function to track the time. So
          we will use an interval that runs every 1 second and increments the{" "}
          <code>time</code> numerical state variable by 1. We will also use{" "}
          <code>useRef</code> to keep track of the interval id returned by{" "}
          <code>setInterval</code>. Because we need this id to clear the
          interval upon user's request for stopping/resetting the stopwatch.
        </p>

        <SyntaxHighlighter language="typescript" style={dracula}>
          {`
const Stopwatch = () => {
    const [time, setTime] = useState(0);
    const intervalId = useRef<number>(0);

    const handleStart = () => {
        if (intervalId.current !== 0) return;
        intervalId.current = setInterval(() => {
        setTime((prev) => prev + 1);
        }, 1000);
    };

    const handleStop = () => {
        clearInterval(intervalId.current);
        intervalId.current = 0;
    };

    const handleReset = () => {
        clearInterval(intervalId.current);
        intervalId.current = 0;
        setTime(0);
    };

    const convertTimeToString = () => {
        const hours = Math.floor(time / 3600);
        const minutes = Math.floor((time % 3600) / 60);
        const seconds = time % 60;

        return \`\${hours}:\${minutes}:\${seconds}\`;
    };
    return (
        <div className="text-center border-[1px] border-primary rounded-xl p-4">
        <p className="text-2xl">{convertTimeToString()}</p>
        <div className="mt-4 text-white text-lg flex flex-nowrap gap-x-2">
            <button
            className="w-1/3 h-[50px] rounded-lg bg-secondary"
            onClick={handleStart}
            >
            START
            </button>
            <button
            className="w-1/3 h-[50px] rounded-lg bg-secondary"
            onClick={handleStop}
            >
            STOP
            </button>
            <button
            className="w-1/3 h-[50px] rounded-lg bg-secondary"
            onClick={handleReset}
            >
            RESET
            </button>
        </div>
        </div>
    );
};
        `}
        </SyntaxHighlighter>
      </div>
    </div>
  );
};
export default Description;
