"use client";

import { useRef } from "react";

/** Endless neon tunnel of rings; the whole stack tilts toward the pointer. */
export function PortalRings() {
  const ref = useRef<HTMLDivElement>(null);

  const onMove = (e: React.PointerEvent) => {
    const el = ref.current;
    if (!el || e.pointerType !== "mouse") return;
    const x = e.clientX / window.innerWidth - 0.5;
    const y = e.clientY / window.innerHeight - 0.5;
    el.style.setProperty("--ry", `${x * 16}deg`);
    el.style.setProperty("--rx", `${-y * 12}deg`);
  };

  return (
    <div
      className="absolute inset-0 overflow-hidden"
      onPointerMove={onMove}
      aria-hidden
    >
      <div ref={ref} className="portal-scene">
        {Array.from({ length: 9 }, (_, i) => (
          <span key={i} className="tunnel-ring" style={{ "--i": i } as React.CSSProperties} />
        ))}
        <span className="portal-core" />
      </div>
    </div>
  );
}
