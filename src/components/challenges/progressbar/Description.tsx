import { Light as SyntaxHighlighter } from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/esm/styles/hljs";
import Progressbar from "./Progressbar";

const Description = () => {
  return (
    <div className="flex flex-wrap lg:flex-nowrap gap-x-14 gap-y-5">
      <div className="lg:w-1/3">
        <h2 className="text-3xl">Progress Bar</h2>
        <h3 className="text-2xl mt-4">Challenge Description</h3>

        <p>
          Create a component that views a progress bar that gets filled based on
          the amount the user specifies.
        </p>
        <h3 className="text-2xl mt-4">See It In Action</h3>
        <Progressbar />
      </div>
      <div className="lg:w-2/3 rounded-xl border-[1px] border-primary p-5">
        <h2 className="text-3xl">My Solution</h2>
        <p className="mt-4">We will first define the component.</p>
        <SyntaxHighlighter language="typescript" style={dracula}>
          {`
const Progressbar = () => {
  return <div></div>;
};
`.trim()}
        </SyntaxHighlighter>

        <p>
          Then, we will define the general markup returned by the component.
        </p>
        <SyntaxHighlighter language="typescript" style={dracula}>
          {`
const Progressbar = () => {
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
`.trim()}
        </SyntaxHighlighter>

        <p>
          As you see, the progress amount is display using an inner div. The
          progress amount, which is always a number between 0 inclusive and 100
          inclusive, is used as the width of the mentioned inner div. The
          complete solution:
        </p>

        <SyntaxHighlighter language="typescript" style={dracula}>
          {`
const Progressbar = () => {
  const [progressAmount, setProgressAmount] = useState<number>(0);
  const handleProgressAmountChange = () => {
    const progressAmountInput = document.getElementById(
      "progressAmount"
    ) as HTMLInputElement;

    if (progressAmountInput) {
      const amount = Number(progressAmountInput.value);
      if (amount >= 0 && amount <= 100) {
        setProgressAmount(amount);
      }
    }
  };

  useEffect(() => {
    const progressBar = document.querySelector(
      "#progressAmountDiv"
    ) as HTMLDivElement;
    if (progressBar) {
      progressBar.style.width = \`\${progressAmount}%\`;
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

        `.trim()}
        </SyntaxHighlighter>
      </div>
    </div>
  );
};
export default Description;
