export default function ParentsSection({
  title = "ឪពុកម្តាយ",
  names = [
    "លោក យាន សាវី",
    "លោក ម៉ៅ ឆាយ",
    "អ្នកស្រី ឈុន សេងហ៊ន់",
    "អ្នកស្រី សៀង ឡា",
  ],
  className = "animate-[fade-up_0.6s_ease-out]",
}) {
  // Normalize spaces
  const cleanNames = names.map((n) => n.trim().replace(/\s+/g, " "));

  // Split honorific + person (supports both "លោកស្រី" and "លោក")
  const splitHonorific = (full) => {
    const HONORIFICS = ["អ្នកស្រី", "លោក"];
    for (const h of HONORIFICS) {
      if (full.startsWith(h + " ")) {
        return { honorific: h, person: full.slice(h.length).trim() };
      }
      if (full === h) return { honorific: h, person: "" };
    }
    return { honorific: "", person: full };
  };

  const items = cleanNames.map(splitHonorific);

  // Build rows of 2; pad last if odd
  const rows = [];
  for (let i = 0; i < items.length; i += 2) {
    rows.push([items[i], items[i + 1] ?? { honorific: "", person: "" }]);
  }

  const NameCell = ({ item, align = "left" }) => {
    const honorific = item?.honorific ?? "";
    const person = item?.person ?? "";
    if (!honorific && !person) {
      return <span className={align === "right" ? "text-right" : ""} />;
    }

    // Prevent breaks inside Khmer names
    const personNbsp = person.replace(/\s+/g, "\u00A0");

    return (
      <span className={`min-w-0 ${align === "right" ? "text-right" : ""}`}>
        <span className="inline-block whitespace-nowrap break-keep">
          {honorific && (
            <span className="moulpali-regular">
              {honorific}
              {person ? "\u00A0" : ""}
            </span>
          )}
          {person && <span className="moul-regular">{personNbsp}</span>}
        </span>
      </span>
    );
  };

  return (
    <section
      aria-labelledby="parents-heading"
      className={[
        // Center + width
        "mx-auto w-full",
        "max-w-[18rem]",                         // base phones
        "sm:max-w-[28rem]",                      // small phones / small tablets
        "md:max-w-[36rem]",                      // tablets
        "lg:max-w-[42rem]",                      // laptops
        "xl:max-w-[50rem]",                      // desktops
        "2xl:max-w-[64rem]",                     // large desktops
        "min-[1920px]:max-w-[72rem]",            // >2xl (UHD-ish)

        // Horizontal padding—wider until lg, then taper a bit on xl/2xl
        "px-8",
        "sm:px-6",
        "md:px-8",
        "lg:px-[12rem]",
        "xl:px-[17.5rem]",
        "2xl:px-[16rem]",
        "min-[1920px]:px-20",

        // Vertical padding
        "py-4 sm:py-6 md:py-8 lg:py-10 xl:py-8 2xl:py-8 min-[1920px]:py-10",

        className,
      ].join(" ")}
    >
      <h2 id="parents-heading" className="sr-only">
        {title}
      </h2>

      <div
        className={[
          "text-[var(--primary)] leading-[1.85]",

          // Font size steps (no negative clamp); tuned for Khmer readability
          "text-[0.65rem]",        // base
          "sm:text-[0.8125rem]",   // 13px
          "md:text-[0.875rem]",    // 14px
          "lg:text-[0.8125rem]",        // 16px
          "xl:text-[0.70rem]",   // 15px (slight tighten at xl)
          "2xl:text-[0.9rem]",     // ~14.4px (reduce a bit on very wide)
          "min-[1920px]:text-[1rem]",

          // Vertical rhythm: reduce at xl & 2xl as requested
          "flex flex-col",
          "gap-y-3",               // base
          "sm:gap-y-3.5",
          "md:gap-y-4",
          "lg:gap-y-5",
          "xl:gap-y-3.5",          // reduce spacing on xl
          "2xl:gap-y-3",           // reduce more on 2xl
          "min-[1920px]:gap-y-4",  // recover a touch for >2xl
        ].join(" ")}
      >
        {rows.map(([left, right], i) => (
          <div
            key={i}
            className={[
              "grid grid-cols-2 items-center",

              // Column gap: grow to lg then compress on xl/2xl
              "gap-x-4",
              "sm:gap-x-6",
              "md:gap-x-10",
              "lg:gap-x-16",
              "xl:gap-x-10",
              "2xl:gap-x-8",
              "min-[1920px]:gap-x-12",
            ].join(" ")}
          >
            <NameCell item={left} />
            <NameCell item={right} align="right" />
          </div>
        ))}
      </div>
    </section>
  );
}
