import React from "react";
import useCustomerByUuid from "../../hook/useCustomerByUuid";
import CustomerNameInline from "../customer/CustomerNameInline";

const cn = (...parts) => parts.filter(Boolean).join(" ");

export default function CoverSection({
  isStoryPlaying = false,
  onStart = () => {},
  customer,
  src = "/images/cover-page/name-cover-01.png",
}) {
  const customerFromHook = useCustomerByUuid();
  const person = customer ?? customerFromHook;
  const showPersonalized = !!person?.guestName;

  if (isStoryPlaying) return null;

  return (
    <section
      className={cn(
        "flex flex-col items-center justify-center",
        "tracking-wide",
        "px-4 sm:px-6 lg:px-8",
        "text-[var(--text)]"
      )}
      aria-labelledby="cover-section-title"
      data-aos="zoom-in"
    >
      <h2 id="cover-section-title" className="sr-only">
        ការអញ្ជើញចូលរួមពិធីអាពាហ៍ពិពាហ៍
      </h2>

      <div className="flex flex-col items-center">
        <figure
          className="flex flex-col items-center"
          aria-labelledby="invite-caption"
          style={{ ["--lift"]: "clamp(4.5rem,10vw,18rem)" }}
        >
          <img
            src={src}
            alt=""
            width={218}
            height={218}
            className={cn(
              "block mx-auto h-auto select-none aspect-square",
              "w-[min(70vw,220px)] sm:w-[min(64vw,260px)] md:w-[min(56vw,300px)] lg:w-[min(48vw,340px)] xl:w-[260px]",
              "-translate-y-[var(--lift)] xl:mt-[6vh] 2xl:mt-[12vh]",
              "max-[340px]:-translate-y-[clamp(7rem,12vw,14rem)]",
              "motion-safe:transform-gpu"
            )}
            sizes="(min-width:1280px) 360px,
                  (min-width:1024px) 48vw,
                  (min-width:768px) 56vw,
                  (min-width:640px) 64vw,
                  70vw"
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

        <div className="flex flex-col items-center gap-y-8 sm:gap-y-10 md:gap-y-14 lg:gap-y-16 xl:gap-y-8 2xl:gap-y-12">
          {showPersonalized && (
            <p
              className={cn(
                "moul-regular text-center tracking-[0.01em] leading-normal lg:leading-snug",
                "text-xl sm:text-3xl lg:text-4xl xl:text-2xl 2xl:text-3xl",
                // soft secondary headline
                "text-[var(--secondary)]",
                "animate-[fade-up_700ms_ease-out_both] [animation-delay:160ms] motion-reduce:animate-none",
                "-mt-[12vh] sm:-mt-[14vh] md:-mt-[8vh] lg:-mt-[18vh] xl:-mt-[22vh] 2xl:-mt-[20vh]",
                "max-[340px]:-mt-[10rem] max-[340px]:text-xl"
              )}
            >
              សូមគោរពអញ្ជើញ
            </p>
          )}

          {showPersonalized ? (
            <p
              className={cn(
                "moul-regular text-center tracking-[0.01em]",
                "text-lg sm:text-3xl lg:text-4xl xl:text-2xl",
                // highlight guest name with primary
                "text-[var(--primary)]",
                "animate-[fade-up_700ms_ease-out_both] [animation-delay:360ms] motion-reduce:animate-none",
                "max-[340px]:text-xl"
              )}
            >
              {person.guestName}
            </p>
          ) : (
            <CustomerNameInline />
          )}

          {/* <button
            type="button"
            onClick={onStart}
            className={cn(
              "px-6 py-2 sm:px-7 sm:py-2.5 2xl:px-8 2xl:py-3",
              "rounded-xl font-semibold moul-regular",
              "text-[color-mix(in_srgb,var(--primary)_92%,white)]",
              "backdrop-blur-sm",
              "border [border-color:color-mix(in_srgb,var(--primary)_55%,transparent)]",
              "shadow-md shadow-black/10",
              "transition duration-300",
              "focus:outline-none focus:ring-2 focus:ring-[color-mix(in_srgb,var(--primary)_35%,transparent)]",
              "text-base sm:text-lg lg:text-xl 2xl:text-2xl",
              "animate-[fade-up_700ms_ease-out_both] [animation-delay:560ms] motion-reduce:animate-none",
              "max-[340px]:-mt-[clamp(0.5rem,2vw,2rem)]"
            )}
            aria-label="ចូលទៅកាន់ពិសេសកម្ម"
          >
            សូមចុចបើកធៀប
          </button> */}
          <button
            type="button"
            onClick={(e) => {
              // Optional tiny haptic on supported devices
              try { window.navigator.vibrate?.(10); } catch {}
              onStart?.(e);
            }}
            className={cn(
              "group relative select-none touch-manipulation",
              "rounded-2xl overflow-hidden font-semibold moul-regular",
              "text-base sm:text-lg lg:text-xl 2xl:text-2xl tracking-wide",
              "isolation-auto will-change-transform [-webkit-tap-highlight-color:transparent]",

              // Base look (transparent until interaction)
              "text-[color-mix(in_srgb,var(--primary)_90%,white)]",

              // Motion & interaction
              "transition-all duration-300 ease-out",
              // Hover (desktop) + Active (mobile tap)
              "hover:bg-[color-mix(in_srgb,var(--primary)_22%,transparent)]",
              "active:bg-[color-mix(in_srgb,var(--primary)_30%,transparent)]",
              "hover:scale-[1.02] active:scale-[0.975]",
              "hover:shadow-[0_8px_28px_rgba(0,0,0,0.15)] active:shadow-[0_10px_36px_rgba(0,0,0,0.22)]",
              "focus:outline-none focus:ring-2 focus:ring-[color-mix(in_srgb,var(--primary)_35%,transparent)]",

              // Subtle glass on interaction (keeps perf good)
              "hover:backdrop-blur-sm active:backdrop-blur-md",

              // Entry animation you already use
              "animate-[fade-up_700ms_ease-out_both] [animation-delay:560ms] motion-reduce:animate-none",

              // Tiny offset on very small screens
              "max-[340px]:-mt-[clamp(0.5rem,2vw,2rem)]"
            )}
            aria-label="ចូលទៅកាន់ពិសេសកម្ម"
          >
            {/* Shine sweep — moves on hover (desktop) and on tap (mobile via :active) */}
            <span
              aria-hidden="true"
              className={[
                "pointer-events-none absolute inset-0 rounded-2xl",
                "after:content-[''] after:absolute after:inset-y-0 after:left-[-40%]",
                "after:w-[60%] after:rounded-[inherit]",
                "after:bg-[linear-gradient(100deg,rgba(255,255,255,0)_0%,rgba(255,255,255,0.28)_45%,rgba(255,255,255,0)_100%)]",
                "after:translate-x-[-120%] after:transition-transform after:duration-700",
                // Desktop hover sweep
                "group-hover:after:translate-x-[160%]",
                // Mobile tap sweep
                "group-active:after:translate-x-[160%]",
              ].join(" ")}
            />

            {/* Soft glass tint always present but very subtle */}
            <span
              aria-hidden="true"
              className="absolute inset-0 rounded-2xl bg-[color-mix(in_srgb,var(--primary)_10%,transparent)]"
            />

            {/* Ripple (centered) on tap — CSS only */}
            <span
              aria-hidden="true"
              className={[
                "pointer-events-none absolute inset-0 rounded-2xl",
                "before:content-[''] before:absolute before:inset-1/2 before:-translate-x-1/2 before:-translate-y-1/2",
                "before:w-0 before:h-0 before:rounded-full",
                "before:bg-[radial-gradient(closest-side,rgba(255,255,255,0.35),transparent)]",
                "before:opacity-0 before:transition-[width,height,opacity] before:duration-300",
                "active:before:w-[140%] active:before:h-[140%] active:before:opacity-100",
              ].join(" ")}
            />

            {/* Content image */}
            <img
              className="relative w-[28vh] sm:w-[30vh] mx-auto drop-shadow-[0_0_10px_rgba(255,255,255,0.25)]"
              src="/images/border-styles/border-button.png"
              alt="button image"
            />
          </button>


        </div>
      </div>
    </section>
  );
}
