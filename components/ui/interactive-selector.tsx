"use client";

import { useState } from "react";

const stages = [
  {
    number: "01",
    title: "Подготовка объекта",
    eyebrow: "Мобилизация",
    description: "Приёмка объекта, защита поверхностей, временные сети, хранение и безопасная логистика.",
    meta: "Защита · порядок · старт",
    image: "/images/stages/stage-01-preparation.webp",
    position: "center",
  },
  {
    number: "02",
    title: "Инженерные системы",
    eyebrow: "Точные коммуникации",
    description: "Электрика, слаботочные системы, водоснабжение, вентиляция и кондиционирование.",
    meta: "ЭОМ · СС · ОВиК · ВК",
    image: "/images/stages/stage-02-engineering.webp",
    position: "center",
  },
  {
    number: "03",
    title: "Общестроительные работы",
    eyebrow: "Геометрия пространства",
    description: "Перегородки, штукатурка, стяжка, гидроизоляция и безупречная подготовка оснований.",
    meta: "Основания · узлы · контроль",
    image: "/images/stages/stage-03-construction.webp",
    position: "center",
  },
  {
    number: "04",
    title: "Чистовая отделка",
    eyebrow: "Материал и мастерство",
    description: "Малярные работы, натуральный камень, мозаика, паркет, столярные изделия и сложные примыкания.",
    meta: "Камень · паркет · столярка",
    image: "/images/stages/stage-04-finishing.webp",
    position: "center",
  },
  {
    number: "05",
    title: "Сдача и сопровождение",
    eyebrow: "Готовый результат",
    description: "Пусконаладка, финальная проверка, исполнительная документация и бережная передача интерьера.",
    meta: "Проверка · передача · сервис",
    image: "/images/stages/stage-05-handover.webp",
    position: "center",
  },
];

export default function InteractiveSelector() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="interactive-selector" id="services" aria-labelledby="selector-heading">
      <div className="shell interactive-selector-inner">
        <header className="interactive-selector-heading">
          <div>
            <p className="section-index">02 — этапы реализации</p>
            <h2 id="selector-heading">От основания<br /><em>до передачи.</em></h2>
          </div>
          <p>Пять последовательных альбомов одного проекта. Наведите курсор или выберите этап, чтобы раскрыть его.</p>
        </header>

        <div className="interactive-albums" aria-label="Этапы реализации проекта">
          {stages.map((stage, index) => {
            const isActive = activeIndex === index;

            return (
              <button
                className="interactive-album"
                data-active={isActive}
                key={stage.number}
                type="button"
                aria-pressed={isActive}
                aria-label={`${stage.number}. ${stage.title}`}
                onClick={() => setActiveIndex(index)}
                onPointerEnter={() => setActiveIndex(index)}
                onFocus={() => setActiveIndex(index)}
              >
                <img
                  className="interactive-album-image"
                  src={stage.image}
                  alt=""
                  aria-hidden="true"
                  loading={index === 0 ? "eager" : "lazy"}
                  decoding="async"
                  style={{ objectPosition: stage.position }}
                />
                <span className="interactive-album-shade" aria-hidden="true" />

                <span className="interactive-album-topline">
                  <span>{stage.number}</span>
                  <span>{stage.meta}</span>
                </span>

                <span className="interactive-album-collapsed" aria-hidden={isActive}>
                  <span>{stage.number}</span>
                  <strong>{stage.title}</strong>
                </span>

                <span className="interactive-album-content">
                  <small>{stage.eyebrow}</small>
                  <strong>{stage.title}</strong>
                  <span>{stage.description}</span>
                </span>

                <span className="interactive-album-arrow" aria-hidden="true">↗</span>
              </button>
            );
          })}
        </div>

        <div className="interactive-selector-footnote" aria-hidden="true">
          <span>Gaudi · полный цикл</span>
          <span>01—05</span>
        </div>
      </div>
    </section>
  );
}
