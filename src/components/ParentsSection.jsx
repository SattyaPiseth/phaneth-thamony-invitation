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

    // Convert all spaces in the person's full name to NBSP to avoid line breaks
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
      className={`
        mx-auto w-full
        max-w-[clamp(22rem,92vw,56rem)]
        px-[clamp(1rem,5vw,1.5rem)]
        py-[clamp(1rem,4vw,2.5rem)]
        xl:px-[clamp(5rem,12vw,15rem)]
        2xl:px-[clamp(5rem,10vw,15rem)]
        ${className}
      `}
    >
      <h2 id="parents-heading" className="sr-only">{title}</h2>

      <div
        className="
          text-[var(--primary)]
          leading-[1.9]
          text-[clamp(0.7rem,3vw,1.25rem)]
          flex flex-col
          gap-y-[clamp(0.5rem,1.5vw,1rem)]
        "
      >
        {rows.map(([left, right], i) => (
          <div
            key={i}
            className="
              grid grid-cols-2 items-center
              gap-x-[clamp(0.75rem,6vw,6rem)]
            "
          >
            <NameCell item={left} />
            <NameCell item={right} align="right" />
          </div>
        ))}
      </div>
    </section>
  );
}
