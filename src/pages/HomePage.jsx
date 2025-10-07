import { useMemo } from "react";
import Seo19 from "../components/Seo19";
import DescriptionSection  from "../components/DescriptionSection";
import  ParentsSection  from "../components/ParentsSection";
import Heading from "../components/base/Heading";

export default function HomePage() {
  // Base URL (trim trailing slash)
  const raw = import.meta.env.VITE_SITE_URL || "http://localhost:5173";
  const siteUrl = raw.replace(/\/+$/, "");
  const canonical = `${siteUrl}/`;

  // Optionally expose build time for OG:updated_time freshness
  const updatedTime = import.meta.env.VITE_BUILD_TIME || undefined;

  const jsonLd = useMemo(() => {
    const base = {
      "@context": "https://schema.org",
      name: "kim & nary wedding",
      url: canonical,
    };
    return [
      { ...base, "@type": "WebSite" },
      { ...base, "@type": "Organization", logo: `${siteUrl}/images/landscape-04.jpg` },
    ];
  }, [canonical, siteUrl]);

  return (
    <>
      <Seo19
        title="Home"
        description="Welcome to the celebration — schedule, gallery, and RSVP."
        canonical={canonical}
        ogType="website"
        updatedTime={updatedTime}
        jsonLd={jsonLd}
      />

      <div
        className="
          relative z-10 mx-auto flex flex-col
          /* Height that adapts to mobile browser UI changes */
          min-h-[100svh]   

          /* Fluid max width: never smaller than 22rem, scales with 92vw, caps at 56rem */
          max-w-[clamp(22rem,92vw,56rem)]
          w-full

          /* Fluid horizontal padding: 1rem → 1.5rem based on viewport width */
          px-[clamp(1rem,4vw,1.5rem)]
        "
        // data-aos="fade-up"
      >
        <Heading />
        <div className="-mt-[clamp(1rem,5vw,2rem)]">
        <ParentsSection />
        </div>
        <DescriptionSection />
      {/* <div
        className="
          w-full h-screen
          bg-red-300           
          sm:bg-orange-300     
          md:bg-yellow-300     
          lg:bg-green-300      
          xl:bg-blue-300      
          2xl:bg-purple-300    
        "
      >
        <p className="text-center text-xl font-semibold pt-10 text-white">
          Resize the window to see the background change
        </p>
      </div>  */}
      </div>
    </>
  );
}
