import React from "react";
import useCustomerByUuid from "../../hook/useCustomerByUuid";
import CustomerNameInline from "../customer/CustomerNameInline";
import AnimatedActionButton from "../button/AnimatedActionButton";

const cn = (...parts) => parts.filter(Boolean).join(" ");

export default function CoverSection({
  isStoryPlaying = false,
  onStart = () => {},
  customer,
  src = "/images/cover-page/name-cover-01.avif",
}) {
  const customerFromHook = useCustomerByUuid();
  const person = customer ?? customerFromHook;
  const showPersonalized = !!person?.guestName;

  if (isStoryPlaying) return null;

  return (
    <section
      className={cn(
        "flex flex-col items-center justify-center",
        "px-4 sm:px-6 lg:px-8",
        "py-[var(--ry)] sm:py-[calc(var(--ry)*1.25)] lg:py-[calc(var(--ry)*1.5)]",
        "text-[var(--text)] tracking-wide"
      )}
      aria-labelledby="cover-section-title"
      data-aos="zoom-in"
      style={{
        "--ry": "clamp(1.25rem, 4.5vw, 3rem)",
        "--lift": "clamp(0.5rem, 2.5vw, 3rem)",
        "--gap-above-text": "clamp(1.5rem, 5vw, 3rem)",
      }}
    >
      <h2 id="cover-section-title" className="sr-only">
        ការអញ្ជើញចូលរួមពិធីអាពាហ៍ពិពាហ៍
      </h2>

      <div className="flex w-full max-w-[clamp(440px,92vw,56rem)] flex-col items-center">
        <figure className="flex flex-col items-center" aria-labelledby="invite-caption">
<img
  src={src}
  alt=""
  width={2016}
  height={1453}
  className={cn(
    "block mx-auto h-auto select-none",
    "aspect-[2016/1453]",

    // Monotonic responsive widths
    "w-[min(54vw,240px)]",                // default (<480px)
    "xs:w-[min(58vw,260px)]",             // ≥480px
    "sm:w-[min(58vw,340px)]",             // ≥640px
    "md:w-[min(28vw,280px)]",             // ≥768px
    "lg:w-[min(22vw,300px)]",             // ≥1024px
    "xl:w-[min(18vw,300px)]",             // ≥1280px — ✅ smaller refined scale
    "2xl:w-[min(16vw,320px)]",            // ≥1536px
    "3xl:w-[min(15vw,315px)]",            // ≥1792px

    // Lift control
    "-translate-y-[calc(var(--lift)*0.85)]",
    "xs:-translate-y-[calc(var(--lift)*0.9)]",
    "md:-translate-y-[calc(var(--lift)*0.6)]",
    "lg:-translate-y-[calc(var(--lift)*0.55)]",
    "xl:-translate-y-[calc(var(--lift)*0.45)]",   // ✅ smoother, lower
    "2xl:-translate-y-[calc(var(--lift)*0.35)]",
    "3xl:-translate-y-[calc(var(--lift)*0.3)]",

    "max-[360px]:-translate-y-[clamp(0.25rem,2vw,1rem)]",
    "transform-gpu [will-change:transform]"
  )}
  sizes="
    (min-width:1792px) 15vw,
    (min-width:1536px) 16vw,
    (min-width:1280px) 18vw,
    (min-width:1024px) 22vw,
    (min-width:768px) 28vw,
    (min-width:640px) 58vw,
    (min-width:480px) 58vw,
    54vw
  "
  loading="eager"
  fetchPriority="high"
  decoding="async"
  draggable={false}
  aria-hidden="true"
/>







          <figcaption className="sr-only" id="invite-caption">
            ការអញ្ជើញពិសេសសម្រាប់ភ្ញៀវកិត្តិយស
          </figcaption>
        </figure>

        <div
          className={cn(
            "flex flex-col items-center",
            // keep your gap rhythm; slightly denser on lg like Heading
            "gap-y-[calc(var(--ry)*0.8)] sm:gap-y-[var(--ry)] lg:gap-y-[calc(var(--ry)*0.5)] xl:gap-y-[calc(var(--ry)*0.6)]",
            "mt-[var(--gap-above-text)]"
          )}
        >
          {showPersonalized && (
            <p
              className={cn(
                "moul-regular text-center tracking-[0.01em]",
                "leading-[1.25] lg:leading-[1.2]",
                "text-xl sm:text-3xl lg:text-2xl xl:text-2xl 2xl:text-3xl",
                "text-[var(--secondary)]",
                "animate-[fade-up_700ms_ease-out_both] [animation-delay:160ms] motion-reduce:animate-none",
                "max-[340px]:text-xl"
              )}
            >
              សូមគោរពអញ្ជើញ
            </p>
          )}

          {showPersonalized ? (
            <p
              className={cn(
                "mt-[calc(var(--ry)*0.5)]",
                "moul-regular text-center tracking-[0.01em] leading-[1.2]",
                "text-lg sm:text-3xl lg:text-2xl xl:text-2xl",
                "text-[var(--accent)]",
                "animate-[fade-up_700ms_ease-out_both] [animation-delay:360ms] motion-reduce:animate-none",
                "max-[340px]:text-xl"
              )}
            >
              {person.guestName}
            </p>
          ) : (
            <CustomerNameInline />
          )}

          <div className="mt-[calc(var(--ry)*1.25)] lg:mt-[calc(var(--ry)*0.3)] xl:mt-[calc(var(--ry)*0.5)] 2xl:mt-[calc(var(--ry)*0)]">
            <AnimatedActionButton
              onStart={onStart}
              src="/images/border-styles/border-button.avif"
              variant="bare"
              withShine
              withRipple
            />
          </div>
        </div>
      </div>
    </section>
  );
}
