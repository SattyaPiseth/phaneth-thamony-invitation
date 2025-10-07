export default function ParentsSection({
  title = "ឪពុកម្តាយ",
  names = [
    "លោក យាន សាវី",
    "លោក ម៉ៅ ឆាយ",
    "លោកស្រី ឈុន សេងហ៊ន់",
    "លោកស្រី សៀង ឡា",
  ],
  className = "animate-[fade-up_0.6s_ease-out]",
}) {
  // Trim edges and normalize internal spaces
  const cleanNames = names.map((n) => n.trim().replace(/\s+/g, " "));

  // Build rows safely (pad last row if odd-length)
  const rows = [];
  for (let i = 0; i < cleanNames.length; i += 2) {
    rows.push([cleanNames[i], cleanNames[i + 1] ?? ""]);
  }

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
          text-[var(--primary)] moulpali-regular
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
            <span className="min-w-0 break-words">{left}</span>
            <span className="min-w-0 break-words text-right">{right}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
