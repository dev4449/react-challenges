import ChallengeList from "../challenges/ChallengeList";
import Introduction from "../Introduction";

const Home = () => {
  return (
    <>
      <section className="flex justify-center mx-4 mt-6">
        <Introduction />
      </section>
      <section className="mx-4 mt-6">
        <ChallengeList />
      </section>
    </>
  );
};

export default Home;
