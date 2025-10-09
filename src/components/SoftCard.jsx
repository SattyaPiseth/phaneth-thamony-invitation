export default function SoftCard({ className = "", children }) {
  return (
    <div
    // p-5
      className={[
        "rounded-xl p-2 sm:p-7 md:p-8 lg:mx-[13vh] xl:mx-[11.5vh] text-center",
        "bg-white/15 backdrop-blur-[2px] border border-white/20 shadow-sm",
        "motion-safe:animate-[fade-up_700ms_ease-out_both] motion-safe:[animation-delay:120ms]",
        "space-y-6 sm:space-y-8 md:space-y-10", // unified vertical rhythm
        className,
      ].join(" ")}
    >
      {children}
    </div>
  );
}
