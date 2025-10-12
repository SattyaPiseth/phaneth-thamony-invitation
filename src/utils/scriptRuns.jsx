// src/utils/scriptsRuns.js
import React from "react";

// Khmer Unicode block: U+1780–U+17FF
const KHMER_RE = /[\u1780-\u17FF]/;

/**
 * Splits text into runs of the same script (Khmer vs non-Khmer)
 * @param {string} str
 * @returns {Array<{ text: string, kh: boolean }>}
 */
export function splitRunsByScript(str = "") {
  const runs = [];
  let buf = "";
  let kh = null;

  for (const ch of str) {
    const isKh = KHMER_RE.test(ch);
    if (kh === null) {
      kh = isKh;
      buf = ch;
      continue;
    }
    if (isKh === kh) buf += ch;
    else {
      runs.push({ text: buf, kh });
      buf = ch;
      kh = isKh;
    }
  }

  if (buf) runs.push({ text: buf, kh });
  return runs;
}

/**
 * Renders text with Khmer spans in moul-regular and others in Playfair
 * Returns a JSX fragment
 */
export function renderNameWithFonts(name = "") {
  const runs = splitRunsByScript(name);

  if (runs.length === 1) {
    const { text, kh } = runs[0];
    return (
      <span lang={kh ? "km" : "en"} className={kh ? "moul-regular" : "font-merriweather"}>
        {text}
      </span>
    );
  }

  return (
    <>
      {runs.map((r, i) => (
        <span
          key={i}
          lang={r.kh ? "km" : "en"}
          className={r.kh ? "moul-regular" : "font-merriweather"}
        >
          {r.text}
        </span>
      ))}
    </>
  );
}
