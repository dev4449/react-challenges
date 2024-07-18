import { Link } from "react-router-dom";
import ChallengeInformationType from "./ChallengeInformationType";

const ChallengeItem = (props: { information: ChallengeInformationType }) => {
  const { information } = props;

  return (
    <div className="h-[420px] lg:w-1/4 rounded-xl bg-primary text-white p-[20px]">
      <h2 className="text-2xl h-[40px]">{information.name}</h2>
      <p className="h-[125px]">{information.description}</p>
      <img
        className="mx-auto h-[150px] object-contain object-top"
        src={information.img}
        alt={information.imgAlt}
      />
      <Link
        to={`/challenges/${information.name}/`}
        className="mt-[20px] text-center w-2/3 h-[45px]  block mx-auto bg-secondary text-white px-2 leading-[45px] rounded-lg"
      >
        View Challenge
      </Link>
    </div>
  );
};
export default ChallengeItem;
