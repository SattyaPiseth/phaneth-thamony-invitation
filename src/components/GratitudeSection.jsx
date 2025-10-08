import React from 'react'

export const GratitudeSection = () => {
  return (
    <>
      <section
        aria-labelledby="gratitude-title"
        className="my-[5vh] mx-auto max-w-screen-md"
      >
        <h3
          id="gratitude-title"
          className="moul-regular text-[var(--primary)] text-xs sm:text-lg tracking-wide text-center text-balance"
        >
          សេចក្ដីថ្លែងអំណរគុណ និងសូមអភ័យទោស
        </h3>

        <p className="moulpali-regular mt-4 text-[0.65rem] sm:text-xs md:text-sm lg:text-base xl:text-lg tracking-wide leading-[3.5vh] text-[var(--text)]/90 text-pretty">
          សូមថ្លែងអំណរគុណ យ៉ាងជ្រាលជ្រៅចំពោះការអញ្ជើញចូលរួមជាភ្ញៀវកិត្តិយសក្នុង ពិធីអាពាហ៍ពិពាហ៍ កូនប្រុស-កូនស្រី របស់យើងខ្ញុំ សូមមានសេចក្តីសុខ​ សុភមង្គលគ្រប់ពេលវេលាកុំបីឃ្លៀងឃ្លាតឡើយ។<br />សូមអរគុណ!
        </p>
        <p className="moulpali-regular mt-4 text-[0.65rem] sm:text-xs md:text-sm lg:text-base xl:text-lg tracking-wide leading-[3.5vh] text-[var(--text)]/90 text-pretty">
          យើងខ្ញុំជាមាតាបិតា កូនប្រុស កូនស្រី សូមអភ័យទោសដោយពុំបានជួបអញ្ជើញដោយផ្ទាល់។ វត្តមានរបស់ ឯកឧត្តម លោកឧកញ៉ា លោកជំទាវ លោកស្រី អ្នកនាងកញ្ញា និងប្រិយមិត្តទាំងអស់គឺជា កិត្តិយសដ៏ឧត្តុង្គឧត្តមសម្រាប់គ្រួសារយើងខ្ញុំ។ <br />សូមអរគុណ!
        </p>
      </section>

      {/* Divider (slightly wider than before but still modest) */}
      <div className="flex justify-center">
        <img
          className="w-[clamp(12rem,40vw,28rem)] max-w-screen-md"
          src="/images/border-styles/divider.png"
          alt="divider"
          loading="lazy"
          decoding="async"
        />
      </div>

      {/* Bigger English gratitude image */}
      <div className="mx-auto mt-6 max-w-screen-md px-4 flex justify-center">
        <img
          src="/images/home-page/gratitude/gratitude-english.png"
          alt="Gratitude in English"
          className="w-[clamp(20rem,90vw,50rem)] h-auto object-contain"
          loading="lazy"
          decoding="async"
          sizes="(max-width: 768px) 90vw, 800px"
        />
      </div>
    </>
  )
}
