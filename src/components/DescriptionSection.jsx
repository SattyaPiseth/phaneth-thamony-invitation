import { useState } from "react";
import SoftCard from "./SoftCard";
import Countdown from "./Countdown";
import { MasonryGallery } from "./gallery/MasonryGallery";
import { Lightbox } from "./modal/Lightbox";

import { GALLERY_IMAGES } from "../data/galleryImages";
import google_map_icon from "/images/google-maps.png";
import morning_event_image from "/images/home-page/agenda/agenda-01.png";
import { GratitudeSection } from "./GratitudeSection";
import { PromoteSection } from "./PromoteSection";
import Discussion from "./comment/Discussion";
import AnimatedActionButton from "./button/AnimatedActionButton";

export default function DescriptionSection({
  // Customizable props with safe defaults
  eventDateIso = import.meta.env.VITE_EVENT_DATE || "2025-11-06T17:00:00+07:00", // Cambodia +07:00
  venueName = "ភោជនីយដ្ឋាន ទន្លេបាសាក់ (ក្បាលថ្នល់) ដោយមេត្រីភាព។ សូមអរគុណ!",
  startTimeText = "និងពិសាភោជនីយអាហារដែលនឹង <br/> ប្រព្រឹត្តទៅនៅ",
  khmerDateText = "ថ្ងៃ ព្រហស្បត្តិ៍ ទី០៦ ខែវិច្ឆិកា ឆ្នាំ ២០២៥",
  khmerBoranDateText = "ត្រូវនឹងថ្ងៃ ១រោច ខែកត្តិក ឆ្នាំម្សាញ់ <br/> សប្តស័ក ព.ស ២៥៦៩ វេលាម៉ោង ៥:០០ នាទីល្ងាច​ ស្ថិតនៅ",
  mapHref = "https://maps.app.goo.gl/DKWSGcHmyNRoVdAc8",
  galleryImages = GALLERY_IMAGES,
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [idx, setIdx] = useState(0);

  const totalImages = galleryImages.length;
  const open = (i) => { setIdx(i); setIsOpen(true); };
  const close = () => setIsOpen(false);
  const prev = () => setIdx((i) => (i - 1 + totalImages) % totalImages);
  const next = () => setIdx((i) => (i + 1) % totalImages);

  // Constants (no need for useMemo)
  const countdownLabel = "Wedding Countdown";
  const mapTitle = "Lucky Bright Restaurant Map";

  return (
    <section
      lang="km"
      aria-labelledby="invite-title"
      className="w-full mx-auto max-w-[min(92vw,56rem)] py-1.5 sm:py-8 lg:px-[clamp(2rem,8vw,12rem)] xl:px-[clamp(2rem,12vw,15rem)] 2xl:px-[clamp(5rem,10vw,11rem)]"
      data-aos="fade-up"
    >
      <SoftCard>
        {/* Invite Heading */}
        <h2
          id="invite-title"
          className="moul-regular text-[var(--primary)] text-sm sm:text-lg md:text-base lg:text-base xl:text-sm tracking-wide text-center text-balance"
        >
          មានកិត្តិយសសូមគោរពអញ្ជើញ
        </h2>

        {/* Intro copy */}
        <p className="moulpali-regular text-[0.65rem] sm:text-xs md:text-sm lg:text-sm xl:text-xs tracking-wide leading-[3.5vh] lg:leading-[4vh] text-[var(--text)]/90 text-pretty">
          ឯកឧត្តម លោកឧកញ៉ា​ លោកជំទាវ {<br/>}លោក លោកស្រី អ្នកនាង កញ្ញា និងប្រិយមិត្តអញ្ជើញចូល រួមជាអធិបតីនិងជាភ្ញៀវកិត្តិយសដើម្បី ប្រសិទ្ធិពរជ័យសិរីសួស្តីជ័យមង្គលក្នុង ពិធីរៀបអាពាហ៍ពិពាហ៍
        </p>
        <p className="moulpali-regular text-[0.65rem] sm:text-xs md:text-sm lg:text-sm xl:text-sm tracking-wide leading-[3.5vh] text-[var(--text)]/90 text-pretty -mt-[2.5vh]">
        កូនប្រុស កូនស្រី របស់យើងខ្ញុំ។</p>

        {/* Couple names */}
        <section aria-labelledby="couple-title" className="mt-3">
          <h3 id="couple-title" className="sr-only">
            ឈ្មោះកូនប្រុស និងកូនស្រី
          </h3>
          <dl className="mx-auto max-w-screen-md grid grid-cols-2 gap-4 sm:gap-6">
            <div className="flex flex-col items-center gap-3">
              <dt className="moulpali-regular tracking-wide text-xs sm:text-sm md:text-base lg:text-sm xl:text-sm text-[var(--secondary)]">
                កូនប្រុសនាម
              </dt>
              <dd className="moul-regular text-base sm:text-lg md:text-base lg:text-base xl:text-base text-[var(--primary)]">
                សាវី ផានិត
              </dd>
            </div>
            <div className="flex flex-col items-center gap-3">
              <dt className="moulpali-regular tracking-wide text-xs sm:text-sm md:text-base lg:text-sm xl:text-sm text-[var(--secondary)]">
                កូនស្រីនាម
              </dt>
              <dd className="moul-regular text-base sm:text-lg md:text-base lg:text-base xl:text-base text-[var(--primary)]">
                ឆាយ ថាមនី
              </dd>
            </div>
          </dl>
        </section>

        {/* Event meta */}
        <section className="mt-4">
          <div className="mx-auto max-w-[32rem] px-3 sm:px-0 flex flex-col
                          gap-3 sm:gap-4 md:gap-5">
            {/* intro line */}
            <p className="moulpali-regular text-pretty text-center
                          text-xs leading-7 tracking-widest
                          sm:text-base sm:leading-8 lg:text-sm xl:text-sm
                          text-[var(--text)]/90">
              {/* {startTimeText} */}
            <span dangerouslySetInnerHTML={{__html: startTimeText}}/>
            </p>

            {/* date (slightly larger, wrapped in <time>) */}
            <p
              className="moul-regular text-pretty text-center
                        text-sm leading-7
                        sm:text-lg sm:leading-8 lg:text-base xl:px-2
                        text-[var(--secondary)]"
            >
              <time dateTime={eventDateIso} className="whitespace-nowrap">{khmerDateText}</time>
              <br />
              <span dangerouslySetInnerHTML={{ __html: khmerBoranDateText }} />
            </p>


            {/* venue */}
            <p className="moulpali-regular text-pretty  text-center
                          text-xs leading-7 
                          sm:text-base sm:leading-8 md:text-base lg:text-sm xl:text-sm
                          text-[var(--text)]">
              {venueName}
            </p>

            {/* Divider (slightly wider than before but still modest) */}
            <div className="flex justify-center mt-[1vh]">
              <img
                className="w-[clamp(10rem,40vw,15rem)] max-w-screen-md"
                src="/images/border-styles/divider.png"
                alt="divider"
                loading="lazy"
                decoding="async"
              />
            </div>

            {/* Bigger English gratitude image */}
            <div className="mx-auto my-[2vh] max-w-screen-md flex justify-center">
              <img
                src="/images/home-page/gratitude/gratitude-english.png"
                alt="Gratitude in English"
                className="w-[clamp(20rem,90vw,50rem)] h-auto object-contain"
                loading="lazy"
                decoding="async"
                sizes="(max-width: 768px) 90vw, 800px"
              />
            </div>

            {/* map button — bigger tap target on mobile */}
            {/* <a
              href={mapHref}
              target="_blank"
              rel="noopener noreferrer"
              title="បើកទីតាំងក្នុងផែនទី"
              className="mt-1 inline-flex items-center justify-center gap-2
                        rounded-md px-4 py-2 sm:px-3 sm:py-2
                        text-[var(--primary)] ring-1 ring-[var(--primary)]/20
                        hover:bg-[var(--primary)]/5 transition-colors
                        moul-regular tracking-wide"
              aria-label="បើកទីតាំងក្នុងផែនទី"
            >
              <img
                className="w-6 h-auto sm:w-7"
                src={google_map_icon}
                loading="lazy"
                decoding="async"
                alt=""
                aria-hidden="true"
              />
              <span className="text-sm underline-offset-4 hover:underline">
                បើកមើលទីតាំង
              </span>
            </a> */}
            <AnimatedActionButton
              variant="bare"        
              src="/images/home-page/map/location-button.png"
              ariaLabel="បើកផែនទី"
              imgClassName="relative block mx-auto w-[70%] object-contain"
              withShine={true}
              withRipple={true}
              className="bg-transparent shadow-none"
              onStart={() =>
                window.open("https://maps.app.goo.gl/81yYewLn4oUyYuy58", "_self")
              }
            />

            {/* map embed */}
            <img src="/images/home-page/map/map.png" alt="map image" className="rounded-md shadow-sm mx-auto" data-aos="flip-left"/>
            {/* <div
              className="w-full aspect-video rounded-md overflow-hidden shadow-sm
                        mt-2 sm:mt-3"
              data-aos="flip-up"
            >
              <iframe
                title={mapTitle}
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3909.2936016057643!2d104.92715497588935!3d11.530783744824973!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x310950cfdcd0c189%3A0x5709443aac310b36!2sTonl%C3%A9%20Bassac%20II%20Restaurant!5e0!3m2!1sen!2ssg!4v1759817558847!5m2!1sen!2ssg"
                className="w-full h-full border-0"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div> */}
          </div>
        </section>


        {/* Event posters */}
        <figure>
          <img src={morning_event_image} alt="Morning event" loading="lazy" decoding="async" />
        </figure>

        {/* <figure className="-mt-5 py-2 ">
          <img src={afternoon_event_image} alt="Afternoon event" loading="lazy" decoding="async" />
        </figure> */}

        {/* Countdown */}
        <section className="mt-6 flex flex-col items-center justify-center gap-3 text-3xl text-[var(--primary)]">
          <h3 className="great-vibes-regular tracking-wide">Save The Date</h3>
          <p className="great-vibes-regular text-xl tracking-wider">Phaneth&amp;Thamony Wedding</p>
          <Countdown target={eventDateIso} ariaLabel={countdownLabel} />
        </section>

        {/* Gallery */}
        <h3 className="moul-regular text-base mt-6 text-[var(--primary)]">កម្រងរូបភាព</h3>
        <MasonryGallery images={galleryImages} onOpen={open} />

        {isOpen && (
          <Lightbox
            images={galleryImages}
            index={idx}
            onClose={close}
            onPrev={prev}
            onNext={next}
          />
        )}

        <GratitudeSection />
        <Discussion />
        <PromoteSection
          src="/images/memora-shine/memora-shine-end-page.png"
          alt="Clean image"
          shadow=""      // no shadow
          showGlow={false} // no glow
        />
      </SoftCard>
    </section>
  );
}
