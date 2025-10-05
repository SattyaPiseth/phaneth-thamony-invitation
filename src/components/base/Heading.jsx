import React from "react";

const cn = (...parts) => parts.filter(Boolean).join(" ");

export default function Heading({ isStoryPlaying = false, className = "" }) {
  return (
    <header
      className={cn(
        "flex items-center justify-center tracking-wide text-[var(--gold)]",
        "p-4",
        "pt-[calc(var(--safe-top)+var(--pad-top-dynamic)+var(--pad-top-extra))]",
        "[media_(max-width:340px)]:pt-[calc(var(--safe-top)+var(--pad-top-dynamic)+0.25rem)]",
        className
      )}
      data-aos="fade-down"
      data-aos-easing="linear"
      data-aos-duration="400"
    >
      <h1 className="sr-only">សិរីមង្គលអាពាហ៍ពិពាហ៍</h1>

      {!isStoryPlaying && (
        <img
          src="/images/cover-page/heading-cover-page.png"
          alt=""
          width={218}
          height={218}
          className={cn(
            "block mx-auto h-auto select-none aspect-square",
            "w-[min(60vw,260px)] sm:w-[min(64vw,300px)] md:w-[min(56vw,340px)] lg:w-[min(48vw,380px)] xl:w-[400px]",
            "-translate-y-[clamp(1rem,5vw,4rem)]",
            "[media_(max-width:340px)]:-translate-y-[clamp(0.25rem,2vw,1rem)]",
            "translate-z-0 will-change-transform"
          )}
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
