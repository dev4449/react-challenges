# Stopwatch / Timer

## Challenge Description

Create a component called Stopwatch that has the ability to view and track time in hours/minutes/seconds and also the ability to start/stop/reset the tracking.

## My Solution

We will first define the component's structure:

```ts
const Stopwatch = () => {
  return <div></div>;
};
```

Then, we define the markup returned by the component:

```ts
const Stopwatch = () => {
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
```

The state can be a simple variable which is of type `number` that holds the amount of time passed in seconds.

Therefore, in the component body, we need to first define this state:

```ts
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
```

We can use the `setInterval` function to track the time. So we will use an interval that runs every 1 second and increments the `time` numerical state variable by 1. We will also use `useRef` to keep track of the interval id returned by `setInterval`. Because we need this id to clear the interval upon user's request for stopping/resetting the stopwatch.

```ts
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
```
