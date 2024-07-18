import { useRef, useState } from "react";

/*
The stopwatch component uses a numerical state variable to keep track of the time elapsed in seconds.
It basically uses the setInterval function to run an interval that runs every second.
When the interval runs, it increments the numerical state variable by 1, meaning 1 second has passed.
*/
const Stopwatch = () => {
  // Numerical state variable to keep track of the time elapsed in seconds
  const [time, setTime] = useState(0);

  // We use a ref to keep track of the interval id. Because we need the interval id to clear
  // the interval when the user clicks stop or reset.
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

    return `${hours}:${minutes}:${seconds}`;
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

export default Stopwatch;
