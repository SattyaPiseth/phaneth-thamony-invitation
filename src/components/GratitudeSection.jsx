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
            className="moul-regular text-[var(--primary)] text-base sm:text-lg tracking-wide text-center text-balance"
          >
            សេចក្ដីថ្លែងអំណរគុណ
          </h3>

          <p className="moulpali-regular mt-4 text-[0.65rem] sm:text-xs md:text-sm lg:text-base xl:text-lg tracking-wide leading-[3.5vh] text-[var(--text)]/90 text-pretty">
            សូមថ្លែងអំណរគុណ យ៉ាងជ្រាលជ្រៅចំពោះការអញ្ជើញចូលរួមជាភ្ញៀវកិត្តិយសក្នុង ពិធីអាពាហ៍ពិពាហ៍ កូនប្រុស-កូនស្រី របស់យើងខ្ញុំ សូមមានសេចក្តីសុខ​ សុភមង្គលគ្រប់ពេលវេលាកុំបីឃ្លៀងឃ្លាតឡើយ។ សូមអរគុណ!
          </p>

          <p className="siemreap-regular mt-[3vh] text-sm sm:text-base md:text-lg leading-relaxed md:leading-8 tracking-wide">
            យើងខ្ញុំសូមខន្តីអភ័យទោស ដែលមិនអាចជូនលិខិតអញ្ជើញដោយផ្ទាល់បានដោយការគោរព សូមទទួលគារវកិច្ចដ៏ខ្ពង់ខ្ពស់
            ពីយើងខ្ញុំ៕
          </p>
        </section>
    </>
  )
}
