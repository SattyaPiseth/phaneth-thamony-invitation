import React from "react";

const cn = (...parts) => parts.filter(Boolean).join(" ");

export default function Heading({
  isStoryPlaying = false,
  className = "",
  src = "https://phaneth-thamony-wedding-invitation.memora-shine.shop/images/cover-page/heading-cover-page-01.avif",
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
          alt="Cover page heading"
          width={414}
          height={207}
          className={cn(
            "block mx-auto h-auto select-none",
            "aspect-[414/207]",

            // 🔻 Default (<480px)
            "w-[min(68vw,300px)] translate-y-[clamp(1rem,4vw,2rem)]",
            "[@media(max-width:340px)]:-translate-y-[clamp(0.75rem,3.5vw,1.75rem)]",

            // ✅ XS (≥480px)
            "xs:w-[min(66vw,300px)]  xs:-translate-y-[clamp(2.25rem,6.5vw,3.75rem)] xs:mt-[3rem]",

            // ✅ SM (≥640px)
            "sm:w-[min(58vw,340px)] sm:-translate-y-[clamp(3rem,7vw,4rem)] sm:m-auto",

            // ✅ MD → Increased more (~44vw / 440px)
            "md:w-[min(44vw,440px)] md:-translate-y-[clamp(2.25rem,6vw,3.5rem)] md:m-auto",

            // ✅ Higher breakpoints unchanged
            "lg:w-[min(24vw,360px)] lg:translate-y-[clamp(2rem,3.5vw,3rem)] lg:m-auto",
            "xl:w-[min(20vw,400px)] xl:translate-y-[clamp(1.75rem,3vw,2.75rem)] xl:m-auto",
            "2xl:w-[min(20vw,480px)] 2xl:translate-y-[clamp(2.25rem,4vw,3.25rem)] 2xl:m-auto",
            "3xl:w-[min(18vw,400px)] 3xl:translate-y-[clamp(1.75rem,3vw,3.25rem)] 3xl:m-auto",

            "transform-gpu [will-change:transform]"
          )}
          sizes="
            (min-width:1920px) 21.6vw,
            (min-width:1536px) 20vw,
            (min-width:1280px) 20vw,
            (min-width:1024px) 24vw,
            (min-width:768px) 44vw,
            (min-width:640px) 58vw,
            (min-width:480px) 66vw,
            68vw
          "
          // fetchPriority="high"
          decoding="async"
          draggable={false}
          title="Cover page heading"
        />
      )}
    </header>
  );
}
