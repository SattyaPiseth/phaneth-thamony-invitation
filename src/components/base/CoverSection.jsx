import React from "react";
import useCustomerByUuid from "../../hook/useCustomerByUuid";
import CustomerNameInline from "../customer/CustomerNameInline";
import AnimatedActionButton from "../button/AnimatedActionButton";

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
              "w-[min(68vw,200px)] sm:w-[min(62vw,360px)] md:w-[min(56vw,300px)] lg:w-[min(48vw,250px)] xl:w-[min(68vw,250px)] 2xl:w-[min(62vw,300px)]",
              "-translate-y-[var(--lift)]",
              "max-[360px]:-translate-y-[clamp(0.25rem,2vw,1rem)]",
              "transform-gpu [will-change:transform]"
            )}
            sizes="(min-width:1536px) 40vw,(min-width:1280px) 44vw,(min-width:1024px) 48vw,(min-width:768px) 56vw,(min-width:640px) 62vw,68vw"
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
              src="/images/border-styles/border-button.png"
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
