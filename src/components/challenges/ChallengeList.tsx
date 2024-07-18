import ChallengeItem from "./ChallengeItem";
import { Information as StopwatchInformation } from "./Stopwatch/Information";
import { Information as ProgressbarInformation } from "./Progressbar/Information";
const ChallengeList = () => {
  return (
    <div className="flex flex-wrap gap-5">
      <ChallengeItem information={StopwatchInformation} />
      <ChallengeItem information={ProgressbarInformation} />
    </div>
  );
};

export default ChallengeList;
