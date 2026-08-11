"use client";

import type { CSSProperties, ReactNode } from "react";
import { useEffect, useRef, useState } from "react";

interface ScrollExpandMediaProps {
  mediaType: "video" | "image";
  mediaSrc: string;
  posterSrc?: string;
  bgImageSrc: string;
  title: string;
  date: string;
  scrollToExpand: string;
  textBlend?: boolean;
  children?: ReactNode;
}

export default function ScrollExpandMedia({
  mediaType,
  mediaSrc,
  posterSrc,
  bgImageSrc,
  title,
  date,
  scrollToExpand,
  textBlend = false,
  children,
}: ScrollExpandMediaProps) {
  const rootRef = useRef<HTMLDivElement>(null);
  const frameRef = useRef<number | null>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const update = () => {
      frameRef.current = null;
      const root = rootRef.current;
      if (!root) return;

      const rect = root.getBoundingClientRect();
      const travel = Math.max(1, root.offsetHeight - window.innerHeight);
      const next = Math.min(1, Math.max(0, -rect.top / travel));
      setProgress((current) => Math.abs(current - next) > 0.001 ? next : current);
    };

    const onScroll = () => {
      if (frameRef.current === null) frameRef.current = window.requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    window.addEventListener("resetSection", update);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      window.removeEventListener("resetSection", update);
      if (frameRef.current !== null) window.cancelAnimationFrame(frameRef.current);
    };
  }, []);

  const eased = 1 - Math.pow(1 - progress, 3);
  const reveal = Math.min(1, Math.max(0, (progress - 0.58) / 0.34));
  const introOpacity = Math.max(0, 1 - progress * 2.25);
  const frameStyle = {
    borderRadius: `${Math.max(0, 26 * (1 - eased))}px`,
    transform: `scale(${0.76 + eased * 0.24})`,
  } as CSSProperties;

  return (
    <div className="scroll-expand-shell" ref={rootRef}>
      <div
        className="scroll-expand-background"
        aria-hidden="true"
        style={{ backgroundImage: `url(${bgImageSrc})`, opacity: 0.78 - eased * 0.4 }}
      />

      <div className="scroll-expand-sticky">
        <div className="scroll-expand-frame" style={frameStyle}>
          {mediaType === "video" ? (
            <video
              className="scroll-expand-media"
              src={mediaSrc}
              poster={posterSrc}
              autoPlay
              muted
              loop
              playsInline
              aria-label={title}
            />
          ) : (
            <img className="scroll-expand-media" src={mediaSrc} alt="Премиальный интерьер Gaudi" />
          )}
          <div className="scroll-expand-shade" style={{ opacity: 0.3 + reveal * 0.62 }} />

          <div
            className={`scroll-expand-intro${textBlend ? " is-blended" : ""}`}
            style={{ opacity: introOpacity, transform: `translateY(${progress * -28}px)` }}
          >
            <p>{date}</p>
            <h1>{title}</h1>
            <span>Реализуем сложные частные интерьеры под ключ</span>
          </div>

          <div
            className="scroll-expand-reveal"
            style={{ opacity: reveal, transform: `scale(${0.94 + reveal * 0.06})` }}
            aria-hidden={reveal < 0.5}
          >
            {children}
          </div>
        </div>

        <div className="scroll-expand-cue" style={{ opacity: Math.max(0, 1 - progress * 4) }}>
          <span>{scrollToExpand}</span>
          <i aria-hidden="true" />
        </div>

        <div className="scroll-expand-counter" aria-hidden="true">
          <span>01</span>
          <i><b style={{ transform: `scaleX(${Math.max(0.05, progress)})` }} /></i>
          <span>02</span>
        </div>
      </div>
    </div>
  );
}
