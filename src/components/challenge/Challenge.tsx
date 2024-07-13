interface ChallengeProps {
  name: string;
  description: string;
  img: string;
  imgAlt: string;
}

export default function Challenge(props: ChallengeProps) {
  const { name, description, img, imgAlt } = props;
  return (
    <div className="w-full lg:w-1/4 h-[350px] rounded-xl bg-primary text-white p-3">
      <h2 className="text-2xl">{name}</h2>
      <p className="mt-2">{description}</p>
      <img className="mt-4 rounded-xl" src={`${img}`} alt={`${imgAlt}`} />
      <button className="block mx-auto mt-4 bg-secondary text-white p-2 rounded-lg">
        View Challenge
      </button>
    </div>
  );
}
