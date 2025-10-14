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

      <header className="-mt-[25px]">
        {!isStoryPlaying && (
          <>
          <img className="
          m-auto max-w-[250px] w-full h-auto translate-y-12 min-[480px]:translate-y-0 
          min-[320px]:mt-[5vh] 
          min-[360px]:mt-[10vh] 
          min-[375px]:mt-[8vh] min-[375px]:max-w-[250px] 
          min-[384px]:mt-[11vh] 
          min-[390px]:mt-[10vh] min-[390px]:max-w-[260px] 
          min-[412px]:mt-[11vh] min-[412px]:max-w-[280px]  
          min-[414px]:mt-[10vh] min-[414px]:max-w-[280px] 
          min-[425px]:-mt-[8vh] 
          min-[428px]:mt-[10vh] 
          min-[480px]:mt-[15vh]  
          min-[768px]:max-w-[370px] 
          min-[768px]:mt-[8vh] 
          min-[800px]:mt-[15vh] min-[800px]:max-w-[350px] 
          min-[810px]:mt-[8vh] 
          min-[820px]:mt-[10vh]  min-[820px]:max-w-[380px]  
          min-[1024px]:max-w-[220px] 
          min-[1280px]:mt-[15vh] min-[1280px]:max-w-[350px] 
          min-[1366px]:mt-[15vh] min-[1366px]:max-w-[260px] 
          min-[1440px]:max-w-[260px] 
          min-[1536px]:max-w-[450px] min-[1536px]:mt-[16vh]
          min-[1920px]:max-w-[350px]
          min-[2560px]:max-w-[450px]

          [@media(min-width:1360px)_and_(max-height:768px)]:max-w-[20%]
          [@media(min-width:1280px)_and_(max-height:720px)]:!max-w-[20%]
          [@media(min-width:1280px)_and_(max-height:800px)]:max-w-[20%]
          [@media(min-width:1280px)_and_(max-height:850px)]:max-w-[22.5%]
          [@media(min-width:1440px)_and_(max-height:900px)]:max-w-[22.5%]
          [@media(min-width:1536px)_and_(max-height:864px)]:max-w-[20%]
          " 
          src="/images/cover-page/heading-cover-page-01.avif" alt="heading" />
          <img 
            width={2016}
            height={1453} 
            className="
            m-auto max-w-[50%] w-full mt-[8vh] mb-[3vh] 
            min-[480px]:mt-[0vh]
            min-[480px]:mb-[1.5vh] 
            min-[768px]:max-w-[40%] min-[768px]:mt-[3vh] 
            min-[800px]:mt-[5vh] 
            min-[810px]:mt-[5vh] 
            min-[1280px]:max-w-[20%] 
            min-[1280px]:mt-[2.5vh] 
            min-[1366px]:max-w-[15%]
            min-[1440px]:max-w-[17.5%]
            min-[1536px]:mt-[2.5vh] 
            min-[1920px]:max-w-[15%]
            [@media(min-width:1280px)_and_(max-height:720px)]:max-w-[15%]
            [@media(min-width:1280px)_and_(max-height:800px)]:max-w-[17.5%]
            [@media(min-width:1366px)_and_(max-height:768px)]:max-w-[15%]
            " 
            src="/images/cover-page/name-cover-01.avif" 
            alt="hero section" />
          </>
        )}
      </header>
      <main>
        <CoverSection
          isStoryPlaying={isStoryPlaying}
          onStart={startStory}
          customer={customer}
        />
      </main>

      {/* ====================== MAIN WRAPPER ====================== */}
      {/* <div
        className={`
          relative z-10 mx-auto flex flex-col
          w-full min-h-dvh overflow-hidden 
          max-w-[clamp(440px,92vw,56rem)]

        
          px-[clamp(0.75rem,3.5vw,1.5rem)]
          xs:px-[clamp(0.9rem,3.75vw,1.75rem)]
          sm:px-[clamp(1.25rem,4vw,2.5rem)]
          md:px-[clamp(1.5rem,5vw,3rem)]
          lg:px-[clamp(2rem,6vw,4rem)]
          xl:px-[clamp(3rem,8vw,5rem)]
          2xl:px-[clamp(4rem,10vw,6rem)]
          3xl:px-[clamp(6rem,12vw,8rem)]

          
          gap-y-[clamp(1rem,3.25vw,1.5rem)]
          xs:gap-y-[clamp(1.1rem,3.5vw,1.75rem)]
          sm:gap-y-[clamp(1.25rem,3.5vw,2rem)]
          md:gap-y-[clamp(1rem,3vw,1.75rem)]
          lg:gap-y-[clamp(0.75rem,2vw,1.5rem)]
          xl:gap-y-[clamp(0.5rem,1.5vw,1.25rem)]
          2xl:gap-y-[clamp(0.5rem,1vw,1rem)]
          3xl:gap-y-[clamp(0.25rem,0.8vw,0.75rem)]
        `}
      >
        <Heading isStoryPlaying={isStoryPlaying} />
        <CoverSection
          isStoryPlaying={isStoryPlaying}
          onStart={startStory}
          customer={customer}
        />
      </div> */}

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
