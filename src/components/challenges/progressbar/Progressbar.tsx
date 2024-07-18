import { useEffect, useState } from "react";

/*
The progress bar component uses a numerical state variable to keep track of the amount of progress to display.
We use two divs. The outer one is the container for the progress bar, and the inner one is the actual progress amount. 
*/
const Progressbar = () => {
  // Numerical state variable to keep track of the progress amount
  const [progressAmount, setProgressAmount] = useState<number>(0);

  // Function that gets called when the user enters a new progress amount
  const handleProgressAmountChange = () => {
    const progressAmountInput = document.getElementById(
      "progressAmount"
    ) as HTMLInputElement;

    if (progressAmountInput) {
      const amount = Number(progressAmountInput.value);
      // We update our state variable only if the entered amount is between 0 and 100.
      if (amount >= 0 && amount <= 100) {
        setProgressAmount(amount);
      }
    }
  };

  // We use this hook to update the progress bar width whenever the progress amount changes.
  useEffect(() => {
    const progressBar = document.querySelector(
      "#progressAmountDiv"
    ) as HTMLDivElement;
    if (progressBar) {
      progressBar.style.width = `${progressAmount}%`;
    }
  }, [progressAmount]);
  
  return (
    <div className="border-[1px] border-primary flex justify-center flex-wrap gap-y-5 py-10 rounded-xl">
      <div className="mx-7 w-full h-[50px] p-[4px] border-primary border-[1px] rounded-2xl relative">
        <div
          id="progressAmountDiv"
          className="h-[42px] bg-secondary rounded-2xl"
        ></div>
        <span
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 
        -translate-y-1/2 text-xl bg-primary/50 rounded-lg p-[1px]  text-white"
        >
          %{progressAmount}
        </span>
      </div>
      <div className="flex items-center gap-x-2">
        <label className="text-2xl" htmlFor="progressAmount">
          Amount in %
        </label>
        <input
          id="progressAmount"
          type="number"
          value={progressAmount}
          className="w-[80px] h-[40px] rounded-lg border-[1px] border-primary text-center p-2 text-xl"
          onChange={handleProgressAmountChange}
        ></input>
      </div>
    </div>
  );
};

export default Progressbar;
