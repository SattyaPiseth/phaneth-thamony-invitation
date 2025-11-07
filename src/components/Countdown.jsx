import { useCallback, useEffect, useMemo, useState } from "react";

/**
 * Props:
 * - target: JS Date-compatible string or Date instance (e.g., "2025-12-31T23:59:59")
 * - ariaLabel: optional label for screen readers
 */
export default function Countdown({ target, ariaLabel }) {
  const targetTime = useMemo(
    () =>
      target instanceof Date ? target.getTime() : new Date(target).getTime(),
    [target]
  );

  const calcLeft = useCallback(() => {
    const now = Date.now();
    const rawDiff = targetTime - now;
    const safeDiff = Math.max(0, rawDiff);

    const days = Math.floor(safeDiff / (24 * 60 * 60 * 1000));
    const hours = Math.floor(
      (safeDiff % (24 * 60 * 60 * 1000)) / (60 * 60 * 1000)
    );
    const minutes = Math.floor((safeDiff % (60 * 60 * 1000)) / (60 * 1000));
    const seconds = Math.floor((safeDiff % (60 * 1000)) / 1000);

    return { days, hours, minutes, seconds, isComplete: rawDiff <= 0 };
  }, [targetTime]);

  const [left, setLeft] = useState(calcLeft);

  useEffect(() => {
    if (left.isComplete) {
      return undefined;
    }

    const id = setInterval(() => setLeft(calcLeft()), 1000);
    return () => clearInterval(id);
  }, [calcLeft, left.isComplete]);

  const pad2 = (n) => String(n).padStart(2, "0");

  if (left.isComplete) {
    return null;
  }

  return (
    <div
      className="grid grid-flow-col auto-cols-max gap-5 text-center"
      role="timer"
      aria-live="polite"
      aria-label={ariaLabel}
    >
      <Unit label="days" value={left.days} />
      <Unit label="hours" value={pad2(left.hours)} />
      <Unit label="min" value={pad2(left.minutes)} />
      <Unit label="sec" value={pad2(left.seconds)} />
    </div>
  );
}

function Unit({ label, value }) {
  return (
    <div className="flex flex-col items-center">
      <span className="font-mono tabular-nums text-4xl leading-none">
        {value}
      </span>
      <span className="mt-1 text-sm uppercase tracking-wide opacity-80">
        {label}
      </span>
    </div>
  );
}
