import React from "react";

const cn = (...parts) => parts.filter(Boolean).join(" ");

export default function Heading({
  isStoryPlaying = false,
  className = "",
  src = "/images/cover-page/heading-cover-page-01.png",
}) {
  return (
    <header
      className={cn(
        "flex items-center justify-center tracking-wide text-[var(--gold)]",
        "p-4",
        "pt-[calc(var(--safe-top)+var(--pad-top-dynamic)+var(--pad-top-extra))]",
        
        className
      )}
      data-aos="fade-down"
      data-aos-easing="linear"
      data-aos-duration="400"
    >
      <h1 className="sr-only">សិរីមង្គលអាពាហ៍ពិពាហ៍</h1>

      {!isStoryPlaying && (
        <img
          src={src}
          alt=""
          width={414}
          height={207}
          className={cn(
            "block mx-auto h-auto select-none",
            "aspect-[414/207]",

            // Wide-banner responsive widths
            "w-[min(70vw,360px)] sm:w-[min(68vw,420px)] md:w-[min(60vw,400px)] lg:w-[min(52vw,350px)] xl:w-[min(70vw,360px)]",

            // Gentle vertical lift for 2:1 art
            "translate-y-[clamp(0.5rem,2.5vw,2rem)]",
            "[@media(max-width:340px)]:-translate-y-[clamp(0.25rem,1.5vw,0.75rem)]",

            // Perf hints (v4-correct)
            "transform-gpu",
            "[will-change:transform]"
          )}
          sizes="(min-width:1280px) 560px,
                 (min-width:1024px) 52vw,
                 (min-width:768px) 60vw,
                 (min-width:640px) 68vw,
                 70vw"
          loading="eager"
          fetchPriority="high"
          decoding="async"
          draggable={false}
          aria-hidden="true"
        />
      )}
    </header>
  );
}
