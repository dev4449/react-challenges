import { useRef, useState } from "react";

export default function Stopwatch() {
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
}
