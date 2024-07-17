import { lazy, Suspense } from "react";
import { useParams } from "react-router-dom";

const ChallengePage = () => {
  const { challengeId } = useParams();
  const DescriptionComponent = lazy(
    () => import(/* @vite-ignore */ `../challenges/${challengeId}/Description`)
  );

  return (
    <section className="mx-4 lg:mx-24 mt-6">
      <Suspense fallback={<div>Loading...</div>}>
        <DescriptionComponent />
      </Suspense>
    </section>
  );
};
export default ChallengePage;
