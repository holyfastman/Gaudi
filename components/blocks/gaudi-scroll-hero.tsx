"use client";

import ScrollExpandMedia from "@/components/blocks/scroll-expansion-hero";
import { SparklesPreview } from "@/components/ui/gaudi-sparkles";

interface GaudiScrollHeroProps {
  phoneDisplay: string;
  phoneHref: string;
}

export function GaudiScrollHero({ phoneDisplay, phoneHref }: GaudiScrollHeroProps) {
  return (
    <section className="scroll-expand-hero" id="top" aria-label="Gaudi — премиальный ремонт">
      <nav className="nav shell scroll-expand-nav" aria-label="Главная навигация">
        <a className="brand" href="#top" aria-label="Gaudi — на главную">
          <span className="brand-mark">GAUDI</span>
          <span className="brand-caption">premium renovation</span>
        </a>
        <div className="nav-links">
          <a href="#approach">Подход</a>
          <a href="#services">Услуги</a>
          <a href="#process">Процесс</a>
          <a href="#contact">Контакты</a>
        </div>
        <a className="nav-phone" href={phoneHref}>{phoneDisplay}</a>
      </nav>

      <ScrollExpandMedia
        mediaType="image"
        mediaSrc="/images/gaudi-hero-1600.webp"
        bgImageSrc="/images/gaudi-project-1120.webp"
        title="Формируем интерьер."
        date="Москва · ремонт премиум-класса"
        scrollToExpand="Прокрутите, чтобы раскрыть"
        textBlend
      >
        <SparklesPreview />
      </ScrollExpandMedia>
    </section>
  );
}
