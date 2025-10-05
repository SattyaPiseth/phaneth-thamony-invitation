import React from "react";
import useCustomerByUuid from "../../hook/useCustomerByUuid";
import CustomerNameInline from "../customer/CustomerNameInline";

const cn = (...parts) => parts.filter(Boolean).join(" ");

export default function CoverSection({
  isStoryPlaying = false,
  onStart = () => {},
  customer,
}) {
  const customerFromHook = useCustomerByUuid();
  const person = customer ?? customerFromHook;
  const showPersonalized = !!person?.guestName;

  if (isStoryPlaying) return null;

  return (
    <section
      className={cn(
        "flex flex-col items-center justify-center",
        "text-[var(--gold)] tracking-wide",
        "px-4 sm:px-6 lg:px-8"
      )}
      aria-labelledby="cover-section-title"
      data-aos="zoom-in"
    >
      <h2 id="cover-section-title" className="sr-only">
        ការអញ្ជើញចូលរួមពិធីអាពាហ៍ពិពាហ៍
      </h2>

      <div className="flex flex-col items-center">
        <img
          src="/images/cover-page/name-cover.png"
          alt=""
          className={cn(
            "block mx-auto h-auto aspect-[2/1]",
            "w-[min(80vw,340px)] sm:w-[min(72vw,380px)] md:w-[min(64vw,420px)] lg:w-[min(56vw,440px)] xl:w-[460px] 2xl:w-[480px]",
            "-translate-y-[clamp(6rem,12vw,12rem)]"
          )}
          loading="lazy"
          aria-hidden="true"
        />

        <div className="flex flex-col items-center gap-y-[clamp(1.5rem,2vw,2rem)]">
          {showPersonalized && (
            <p
              className={cn(
                "koulen-regular text-center tracking-[0.01em]",
                "leading-normal lg:leading-snug",
                "text-xl sm:text-2xl lg:text-3xl xl:text-[2rem] 2xl:text-[2.125rem]",
                "animate-[fade-up_700ms_ease-out_both] [animation-delay:160ms] motion-reduce:animate-none",
                "-mt-[clamp(5vh,10vh,15vh)]"  
                
              )}
            >
              សូមគោរពអញ្ជើញ
            </p>
          )}

          {showPersonalized ? (
            <p
              className={cn(
                "koulen-regular text-center",
                "text-xl sm:text-2xl lg:text-3xl",
                "animate-[fade-up_700ms_ease-out_both] [animation-delay:360ms] motion-reduce:animate-none"
              )}
            >
              {person.guestName}
            </p>
          ) : (
            <CustomerNameInline />
          )}

          <button
            type="button"
            onClick={onStart}
            className={cn(
              "px-6 py-2 sm:px-7 sm:py-2.5 2xl:px-8 2xl:py-3",
              "rounded-xl font-semibold koulen-regular",
              "text-[var(--gold)]",
              "bg-white/5 hover:bg-white/10",
              "backdrop-blur-sm",
              "border border-[var(--gold)]/60",
              "shadow-md shadow-black/20",
              "transition duration-300",
              "focus:outline-none focus:ring-2 focus:ring-[var(--gold)]/40",
              "text-sm sm:text-base lg:text-lg 2xl:text-xl",
              "animate-[fade-up_700ms_ease-out_both] [animation-delay:560ms] motion-reduce:animate-none"
            )}
          >
            សូមចុចបើកធៀប
          </button>
        </div>
      </div>
    </section>
  );
}
