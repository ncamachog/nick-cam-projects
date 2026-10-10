"use client";

import { useEffect, useState } from "react";

/**
 * "Portal opening" preloader: neon rings pulse out of a counter, then the portal
 * widens and reveals the page. The timeline is pure CSS (see globals.css) so it
 * always finishes, even if JS is slow; JS only drives the counter and unmounts.
 */
export function Preloader() {
  const [gone, setGone] = useState(false);
  const [pct, setPct] = useState(0);

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const total = reduce ? 500 : 2100;
    const start = performance.now();
    let raf = 0;
    const tick = (now: number) => {
      const t = Math.min((now - start) / total, 1);
      const eased = 1 - Math.pow(1 - t, 3);
      setPct(Math.round(eased * 100));
      if (t < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    const done = window.setTimeout(() => {
      document.documentElement.style.setProperty("--intro", "0s");
      setGone(true);
    }, reduce ? 800 : 3500);
    return () => {
      cancelAnimationFrame(raf);
      window.clearTimeout(done);
    };
  }, []);

  if (gone) return null;

  return (
    <div className="portal-loader" role="status" aria-label="Loading Nick Cam Projects">
      <div className="portal-loader__stage" aria-hidden>
        {[0, 1, 2, 3, 4].map((i) => (
          <span key={i} className="portal-loader__ring" style={{ "--i": i } as React.CSSProperties} />
        ))}
        <div className="portal-loader__core">
          <span className="portal-loader__pct">{String(pct).padStart(2, "0")}</span>
          <span className="portal-loader__label">Nick Cam Projects</span>
        </div>
      </div>
    </div>
  );
}
