import React, { useEffect, useState } from "react";
import useCustomerByUuid from "../../hook/useCustomerByUuid";
import CustomerNameInline from "../customer/CustomerNameInline";
import AnimatedActionButton from "../button/AnimatedActionButton";
import { renderNameWithFonts } from "../../utils/scriptRuns";


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

// ============ Invisible-but-clickable button logic ============
const VISIBLE_DELAY_MS = 2000; // show visually after 3s
const [isVisible, setIsVisible] = useState(false);
const [isPreclick, setIsPreclick] = useState(false);

useEffect(() => {
  setIsPreclick(true);                      // clickable immediately
  const t = setTimeout(() => setIsVisible(true), VISIBLE_DELAY_MS); // visible after 3s
  return () => clearTimeout(t);
}, []);
// =============================================================


  // ---- Idle-gate the decorative image so it can't win LCP ----
  const [showArt, setShowArt] = useState(false);
  useEffect(() => {
    const rIC = window.requestIdleCallback || ((cb) => setTimeout(cb, 400));
    const id = rIC(() => setShowArt(true));

    // Also reveal on first interaction (whichever comes first)
    const onFirstInteract = () => setShowArt(true);
    window.addEventListener("pointerdown", onFirstInteract, { once: true, passive: true });
    window.addEventListener("keydown", onFirstInteract, { once: true });

    return () => {
      window.removeEventListener("pointerdown", onFirstInteract);
      window.removeEventListener("keydown", onFirstInteract);
    };
  }, []);

  if (isStoryPlaying) return null;

  return (
    <section
      className={cn(
        "-mt-[2vh]",
        "flex flex-col items-center justify-center",
        "px-4 sm:px-6 lg:px-8",
        "py-[var(--ry)] sm:py-[calc(var(--ry)*1.25)] lg:py-[calc(var(--ry)*1.5)]",
        "text-[var(--text)] tracking-wide"
      )}
      aria-labelledby="cover-section-title"
      /* Keep AOS off the very first fold if you want max perf; otherwise leave it: */
      // data-aos="zoom-in"
      style={{
        "--ry": "clamp(1.25rem, 4.5vw, 3rem)",
        "--lift": "clamp(0.5rem, 2.5vw, 3rem)",
        "--gap-above-text": "clamp(1.5rem, 5vw, 3rem)",
      }}
    >
      <h2 id="cover-section-title" className="sr-only">
        ការអញ្ជើញចូលរួមពិធីអាពាហ៍ពិពាហ៍
      </h2>

      <div className="flex w/full max-w-[clamp(440px,92vw,56rem)] flex-col items-center xl:-translate-y-[calc(var(--ry)*0.5)] 2xl:-translate-y-[calc(var(--ry)*0.4)] transform-gpu">

        {/* CLS-safe art block: spacer always in flow, image overlays later */}
        <div className="relative flex flex-col items-center"
            style={{ "--art-w": "min(54vw, 240px)" }}>
          {/* 1) Spacer reserves space immediately (prevents layout shift) */}
          <div
            aria-hidden="true"
            style={{
              width: "var(--art-w)",
              aspectRatio: "2016 / 1453",
              transform: "translateY(calc(var(--lift) * -0.85))",
            }}
          />

          {/* 2) Real image overlays when allowed to load */}
          {showArt && (
            <figure
              className="pointer-events-none absolute inset-0 flex flex-col items-center"
              aria-labelledby="invite-caption"
              style={{ containIntrinsicSize: "2016px 1453px", contentVisibility: "auto" }}
            >
              <img
                src={src}
                alt=""
                width={2016}
                height={1453}
                className="block mx-auto h-auto select-none aspect-[2016/1453]"
                style={{
                  width: "var(--art-w)",
                }}
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
                loading="lazy"
                fetchPriority="low"
                srcSet="
                  /images/cover-page/name-cover-01-320.avif 320w,
                  /images/cover-page/name-cover-01-480.avif 480w,
                  /images/cover-page/name-cover-01-640.avif 640w,
                  /images/cover-page/name-cover-01-768.avif 768w,
                  /images/cover-page/name-cover-01-1024.avif 1024w,
                  /images/cover-page/name-cover-01-1280.avif 1280w,
                  /images/cover-page/name-cover-01-1536.avif 1536w,
                  /images/cover-page/name-cover-01-2016.avif 2016w
                "
                decoding="async"
                draggable={false}
                aria-hidden="true"
              />
              <figcaption className="sr-only" id="invite-caption">
                ការអញ្ជើញពិសេសសម្រាប់ភ្ញៀវកិត្តិយស
              </figcaption>
            </figure>
          )}
        </div>


        <div
          className={cn(
            "flex flex-col items-center",
            "gap-y-[calc(var(--ry)*0.8)] sm:gap-y-[var(--ry)] lg:gap-y-[calc(var(--ry)*0.5)] xl:gap-y-[calc(var(--ry)*0.3)] 2xl:gap-y-[calc(var(--ry)*0.5)] 3xl:gap-y-[calc(var(--ry)*0.6)]",
            "mt-[var(--gap-above-text)] xl:-translate-y-[calc(var(--ry)*0.3)] 2xl:-translate-y-[calc(var(--ry)*0.3)] 3xl:-translate-y-[calc(var(--ry)*0)] transform-gpu [will-change:transform]"
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
              {/* {person.guestName} */}
              {renderNameWithFonts(person.guestName)}
            </p>
          ) : (
            <CustomerNameInline />
          )}

          {/* <div className="mt-[calc(var(--ry)*1.25)] lg:mt-[calc(var(--ry)*0.3)] xl:mt-[calc(var(--ry)*0.25)] 2xl:mt-[calc(var(--ry)*0.30)]">
            <AnimatedActionButton
              onStart={onStart}
              src="/images/border-styles/border-button.avif"
              variant="bare"
              withShine
              withRipple
            />
          </div> */}

          <div
            className={cn(
              "mt-[calc(var(--ry)*1.25)] lg:mt-[calc(var(--ry)*0.3)] xl:mt-[calc(var(--ry)*0.25)] 2xl:mt-[calc(var(--ry)*0.30)]",
              "transition-opacity duration-700",
              isVisible ? "opacity-100" : "opacity-0"   // hidden visually until delay
            )}
            style={{ pointerEvents: isPreclick ? "auto" : "none" }} // clickable even when hidden
          >
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
