"use client";

import { useEffect, useRef, useState } from "react";

const possibilities = [
  "контролировать процесс",
  "быть уверенным",
  "не думать о строительстве",
  "заниматься своими делами",
  "видеть результат заранее",
  "сохранять своё время",
  "доверять каждому этапу",
  "получить интерьер без компромиссов",
];

export default function ScrollAnimation() {
  const sectionRef = useRef<HTMLElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    let frame = 0;

    const update = () => {
      frame = 0;
      const section = sectionRef.current;
      if (!section) return;

      const rect = section.getBoundingClientRect();
      const distance = Math.max(section.offsetHeight - window.innerHeight, 1);
      const progress = Math.min(1, Math.max(0, -rect.top / distance));
      const nextIndex = Math.min(
        possibilities.length - 1,
        Math.floor(progress * possibilities.length),
      );

      setActiveIndex((current) => current === nextIndex ? current : nextIndex);
    };

    const requestUpdate = () => {
      if (!frame) frame = window.requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", requestUpdate, { passive: true });
    window.addEventListener("resize", requestUpdate);

    return () => {
      window.removeEventListener("scroll", requestUpdate);
      window.removeEventListener("resize", requestUpdate);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="you-can-scroll"
      aria-labelledby="you-can-scroll-title"
    >
      <div className="you-can-scroll-sticky">
        <div className="you-can-scroll-grid" aria-hidden="true" />
        <div className="shell you-can-scroll-content">
          <div className="you-can-scroll-topline">
            <p className="section-index">02 — возможности</p>
            <p>Gaudi · полный контроль реализации</p>
          </div>

          <div className="you-can-scroll-statement">
            <h2 id="you-can-scroll-title">Ты можешь</h2>
            <div className="you-can-scroll-changing-slot">
              <p key={activeIndex} className="you-can-scroll-changing" aria-live="polite">
                {possibilities[activeIndex]}
              </p>
            </div>
          </div>

          <div className="you-can-scroll-bottomline">
            <span>Скролл — управление процессом</span>
            <div className="you-can-scroll-progress" aria-hidden="true">
              {possibilities.map((item, index) => (
                <i key={item} data-active={index <= activeIndex} />
              ))}
            </div>
            <span>
              {String(activeIndex + 1).padStart(2, "0")} / {String(possibilities.length).padStart(2, "0")}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
