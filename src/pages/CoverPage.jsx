import { useLoaderData, useOutletContext } from "react-router-dom";
import Seo19 from "../components/Seo19.jsx";
import Heading from "../components/base/Heading.jsx";
import CoverSection from "../components/base/CoverSection.jsx";

export default function CoverPage() {
  // Context and data
  const outlet = useOutletContext() ?? {};
  const mode = outlet.mode ?? "background";
  const startStory = outlet.startStory ?? (() => {});
  const isStoryPlaying = mode === "story";

  const data = useLoaderData() ?? {};
  const { indexable = true, seo = {}, customer = null } = data;

  return (
    <>
      <Seo19
        {...seo}
        noindex={!indexable}
        noarchive={!indexable}
        googleBot={!indexable ? "noindex, nofollow, noarchive" : undefined}
        bingBot={!indexable ? "noindex, nofollow, noarchive" : undefined}
      />

      {/* ====================== MAIN WRAPPER ====================== */}
      <div
        className={`
          relative z-10 mx-auto flex flex-col
          w-full min-h-dvh overflow-hidden
          max-w-[clamp(440px,92vw,56rem)]

          /* Fluid inner padding */
          px-[clamp(1rem,4vw,2rem)]
          sm:px-[clamp(1.25rem,4vw,2.5rem)]
          md:px-[clamp(1.5rem,5vw,3rem)]
          lg:px-[clamp(2rem,6vw,4rem)]
          xl:px-[clamp(3rem,8vw,5rem)]
          2xl:px-[clamp(4rem,10vw,6rem)]
          3xl:px-[clamp(6rem,12vw,8rem)]

          /* Vertical spacing between sections */
          gap-y-[clamp(1.25rem,4vw,2.25rem)]
          sm:gap-y-[clamp(1.25rem,3.5vw,2rem)]
          md:gap-y-[clamp(1rem,3vw,1.75rem)]
          lg:gap-y-[clamp(0.75rem,2vw,1.5rem)]
          xl:gap-y-[clamp(0.5rem,1.5vw,1.25rem)]
          2xl:gap-y-[clamp(0.5rem,1vw,1rem)]
          3xl:gap-y-[clamp(0.25rem,0.8vw,0.75rem)]
        `}
        data-aos="zoom-in"
      >
        <Heading isStoryPlaying={isStoryPlaying} />
        <CoverSection
          isStoryPlaying={isStoryPlaying}
          onStart={startStory}
          customer={customer}
        />
      </div>

      {/* ====================== COLOR BAND FOR TEST ====================== */}
      {/* <div
        className={`
          w-full h-screen
          bg-red-300
          xs:bg-black
          sm:bg-orange-300
          md:bg-yellow-300
          lg:bg-green-300
          xl:bg-blue-300
          2xl:bg-purple-300
          3xl:bg-gray-400
        `}
      >
        <p className="text-center text-xl font-semibold pt-10 text-white">
          Resize window → background color changes (responsive test)
        </p>
      </div> */}
    </>
  );
}
