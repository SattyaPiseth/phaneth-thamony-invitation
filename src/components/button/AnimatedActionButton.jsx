import { useEffect, useCallback } from "react";
import { motion, useAnimationControls, useReducedMotion } from "framer-motion";

const cn = (...parts) => parts.filter(Boolean).join(" ");

/**
 * AnimatedActionButton
 * - Gentle breathing loop to signal clickability
 * - Timed click pulse with clear duration
 * - Framer controls kept isolated and simple
 */
export default function AnimatedActionButton({
  onStart,
  // Tunables (sensible defaults)
  breatheScale = 0.05,        // 5% up on inhale
  breatheDuration = 3.0,      // seconds per full breath
  hoverScale = 1.06,
  clickScale = 0.92,
  clickDuration = 0.22,       // seconds for click pulse
  className,
  children,
}) {
  const controls = useAnimationControls();
  const prefersReduced = useReducedMotion();

  // Start/restore breathing loop
  const startBreathing = useCallback(() => {
    if (prefersReduced) {
      controls.start({ scale: 1, opacity: 1 });
      return;
    }
    controls.start({
      scale: [1, 1 + breatheScale, 1],
      opacity: 1,
      transition: {
        duration: breatheDuration,
        ease: "easeInOut",
        repeat: Infinity,
      },
    });
  }, [controls, prefersReduced, breatheScale, breatheDuration]);

  useEffect(() => {
    // Entry + then breathe
    controls.set({ opacity: 0, scale: 0.985 });
    controls
      .start({ opacity: 1, scale: 1, transition: { duration: 0.35, ease: "easeOut" } })
      .then(startBreathing);
  }, [controls, startBreathing]);

  const handleClick = async (e) => {
    try { window.navigator.vibrate?.(10); } catch {}
    // Pause breathing, run a clear timed pulse, then resume
    await controls.start({
      scale: [1, 1.08, clickScale, 1],
      transition: {
        duration: Math.max(clickDuration, 0.18),     // safety floor
        ease: [0.25, 0.1, 0.25, 1],                  // smooth in/out
        times: [0, 0.35, 0.7, 1],
      },
    });
    onStart?.(e);
    startBreathing();
  };

  return (
    <motion.button
      type="button"
      onClick={handleClick}
      animate={controls}
      whileHover={!prefersReduced ? { scale: hoverScale, transition: { duration: 0.18 } } : undefined}
      whileTap={{ scale: clickScale, transition: { duration: clickDuration * 0.66 } }}
      className={cn(
        "group relative select-none touch-manipulation",
        "rounded-2xl overflow-hidden font-semibold moul-regular",
        "text-base sm:text-lg lg:text-xl 2xl:text-2xl tracking-wide",
        "isolation-auto will-change-transform transform-gpu [-webkit-tap-highlight-color:transparent]",
        "text-[color-mix(in_srgb,var(--primary)_90%,white)]",
        // Let Framer own transforms; keep CSS transitions for paint-only props:
        "transition-[background-color,box-shadow,backdrop-filter] duration-300 ease-out",
        "hover:bg-[color-mix(in_srgb,var(--primary)_22%,transparent)]",
        "active:bg-[color-mix(in_srgb,var(--primary)_30%,transparent)]",
        "focus:outline-none focus:ring-2 focus:ring-[color-mix(in_srgb,var(--primary)_35%,transparent)]",
        "hover:backdrop-blur-sm active:backdrop-blur-md",
        "max-[340px]:-mt-[clamp(0.5rem,2vw,2rem)]",
        className
      )}
      aria-label="ចូលទៅកាន់ពិសេសកម្ម"
    >
      {/* Shine sweep (hover/tap) */}
      <span
        aria-hidden="true"
        className={[
          "pointer-events-none absolute inset-0 rounded-2xl",
          "after:content-[''] after:absolute after:inset-y-0 after:left-[-40%]",
          "after:w-[60%] after:rounded-[inherit]",
          "after:bg-[linear-gradient(100deg,rgba(255,255,255,0)_0%,rgba(255,255,255,0.28)_45%,rgba(255,255,255,0)_100%)]",
          "after:translate-x-[-120%] after:transition-transform after:duration-700",
          "group-hover:after:translate-x-[160%] group-active:after:translate-x-[160%]",
        ].join(" ")}
      />

      {/* Soft tint */}
      <span
        aria-hidden="true"
        className="absolute inset-0 rounded-2xl bg-[color-mix(in_srgb,var(--primary)_10%,transparent)]"
      />

      {/* Ripple on tap (CSS-only, cheap) */}
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

      {/* Content (default image if no children) */}
      {children ?? (
        <img
          className="relative w-[28vh] sm:w-[30vh] mx-auto drop-shadow-[0_0_10px_rgba(255,255,255,0.25)]"
          src="/images/border-styles/border-button.png"
          alt="button image"
          draggable={false}
        />
      )}
    </motion.button>
  );
}
