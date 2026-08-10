const phoneDisplay = "+7 968 418-11-88";
const phoneHref = "tel:+79684181188";

export default function Home() {
  return (
    <main>
      <section className="hero" id="top">
        <nav className="nav shell" aria-label="Главная навигация">
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

        <div className="hero-grid shell">
          <div className="hero-copy">
            <p className="eyebrow"><span /> Москва · ремонт премиум-класса</p>
            <h1>Формируем<br /><em>интерьер.</em></h1>
            <p className="hero-lead">
              Реализуем сложные частные интерьеры под ключ — от инженерной
              подготовки до безупречной финишной отделки.
            </p>
            <div className="hero-actions">
              <a className="button button-gold" href="#contact">Обсудить проект <span>↗</span></a>
              <a className="text-link" href="#approach">Как мы работаем <span>↓</span></a>
            </div>
          </div>

          <div className="hero-stage" aria-label="Архитектурная композиция">
            <div className="stage-line" />
            <div className="stage-number">01</div>
            <p>Архитектура<br />исполнения</p>
            <div className="stage-monogram">G</div>
          </div>
        </div>

        <div className="hero-facts shell" aria-label="Ключевые параметры">
          <div><strong>200 000 ₽/м²</strong><span>ориентир бюджета реализации</span></div>
          <div><strong>1 команда</strong><span>от инженерии до чистовой отделки</span></div>
          <div><strong>100% контроль</strong><span>каждого скрытого этапа работ</span></div>
        </div>
      </section>

      <section className="manifesto section" id="approach">
        <div className="shell manifesto-grid">
          <p className="section-index">01 — подход</p>
          <div>
            <h2>Точность, которую<br />видно <em>в деталях.</em></h2>
            <p className="large-copy">
              Премиальный ремонт начинается не с дорогих материалов, а с
              дисциплины процессов. Мы выстраиваем объект как управляемую
              систему: планируем, фиксируем, проверяем и отвечаем за результат.
            </p>
          </div>
        </div>
      </section>

      <section className="visual-story" aria-label="Эстетика Gaudi">
        <div className="visual-story-image">
          <img src="/images/gaudi-project.png" alt="Концептуальный образ премиального интерьера в эстетике Gaudi" />
        </div>
        <div className="visual-story-copy">
          <p className="section-index">Пространство без компромиссов</p>
          <p className="quote">«Дизайн остаётся идеей, пока каждая линия не реализована точно.»</p>
          <span className="image-note">Визуальный образ эстетики Gaudi</span>
        </div>
      </section>

      <section className="services section" id="services">
        <div className="shell">
          <div className="section-heading">
            <p className="section-index">02 — компетенции</p>
            <h2>Весь объект.<br /><em>Одна ответственность.</em></h2>
          </div>
          <div className="service-list">
            <article><span>01</span><h3>Подготовка объекта</h3><p>Приёмка, мобилизация, защита поверхностей, временные сети и логистика.</p></article>
            <article><span>02</span><h3>Инженерные системы</h3><p>Электрика, слаботочные системы, водоснабжение, вентиляция и кондиционирование.</p></article>
            <article><span>03</span><h3>Общестроительные работы</h3><p>Перегородки, штукатурка, стяжка, гидроизоляция и подготовка всех оснований.</p></article>
            <article><span>04</span><h3>Чистовая отделка</h3><p>Малярные работы, камень, мозаика, паркет, столярные изделия и сложные узлы.</p></article>
            <article><span>05</span><h3>Комплектация</h3><p>Планирование поставок, приёмка материалов, бережное хранение и координация смежников.</p></article>
            <article><span>06</span><h3>Сдача и сопровождение</h3><p>Пусконаладка, финальная проверка, исполнительная документация и передача объекта.</p></article>
          </div>
        </div>
      </section>

      <section className="craft section">
        <div className="shell craft-grid">
          <div className="craft-image">
            <img src="/images/gaudi-detail.png" alt="Деталь отделки: натуральный камень, латунь и тёмный дуб" />
            <span>Точность примыканий · чистота геометрии</span>
          </div>
          <div className="craft-copy">
            <p className="section-index">03 — контроль качества</p>
            <h2>Скрытое<br /><em>важнее видимого.</em></h2>
            <p>Каждый этап принимается до того, как его закроет следующий. Проверяем не только финиш — проверяем основания, трассы, узлы и документацию.</p>
            <ul>
              <li><span>01</span>Фотофиксация скрытых работ</li>
              <li><span>02</span>Контрольные листы по этапам</li>
              <li><span>03</span>Промежуточные приёмки с заказчиком</li>
              <li><span>04</span>Порядок и культура производства</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="engineering">
        <div className="shell engineering-inner">
          <p className="section-index">Инженерный контур</p>
          <div className="engineering-tags" aria-label="Инженерные направления">
            <span>ЭОМ</span><i>·</i><span>СС</span><i>·</i><span>ОВиК</span><i>·</i><span>ВК</span><i>·</i><span>Автоматизация</span>
          </div>
          <p className="engineering-copy">Инженерные решения координируются между собой до выхода монтажников на объект.</p>
        </div>
      </section>

      <section className="process section" id="process">
        <div className="shell">
          <div className="section-heading process-heading">
            <p className="section-index">04 — процесс</p>
            <h2>Понятный путь<br /><em>к результату.</em></h2>
          </div>
          <div className="timeline">
            <article><span>01</span><h3>Знакомство</h3><p>Изучаем проект, объект, требования к качеству и исходные условия.</p></article>
            <article><span>02</span><h3>Расчёт</h3><p>Формируем детальную смету, график и план организации работ.</p></article>
            <article><span>03</span><h3>Мобилизация</h3><p>Подготавливаем объект, временные сети, хранение и рабочие зоны.</p></article>
            <article><span>04</span><h3>Реализация</h3><p>Ведём работы по этапам, контролируем качество, сроки и поставки.</p></article>
            <article><span>05</span><h3>Передача</h3><p>Проверяем системы, устраняем замечания и передаём готовый интерьер.</p></article>
          </div>
        </div>
      </section>

      <section className="places">
        <div className="shell places-inner">
          <p>Опыт работы с объектами высокого уровня</p>
          <div className="place-names">
            <span>Лаврушинский</span><span>Prime Park</span><span>Золотой квартал</span><span>Lion Gate</span>
          </div>
        </div>
      </section>

      <section className="faq section" aria-label="Частые вопросы">
        <div className="shell faq-grid">
          <div>
            <p className="section-index">05 — главное до старта</p>
            <h2>Коротко<br /><em>о важном.</em></h2>
          </div>
          <div className="faq-list">
            <details><summary>С какого бюджета начинается работа?<span>+</span></summary><p>Ориентир реализации интерьера под ключ — от 200 000 ₽/м². Точный бюджет зависит от проекта, инженерии, материалов и сложности решений.</p></details>
            <details><summary>Можно прийти с готовым дизайн-проектом?<span>+</span></summary><p>Да. Мы изучим документацию, проверим реализуемость узлов, уточним инженерную часть и подготовим расчёт производства работ.</p></details>
            <details><summary>Кто координирует подрядчиков и поставки?<span>+</span></summary><p>Со стороны Gaudi назначается ответственная команда, которая ведёт график, логистику, смежников, качество и коммуникацию по объекту.</p></details>
          </div>
        </div>
      </section>

      <section className="contact" id="contact">
        <div className="shell contact-grid">
          <div>
            <p className="section-index">Обсудим ваш проект</p>
            <h2>Начнём<br /><em>с разговора.</em></h2>
          </div>
          <div className="contact-card">
            <p>Расскажите, где находится объект и на какой стадии проект. Александр лично подключится к первому обсуждению.</p>
            <a className="contact-phone" href={phoneHref}>{phoneDisplay}</a>
            <div className="contact-actions">
              <a className="button button-gold" href={phoneHref}>Позвонить <span>↗</span></a>
              <a className="button button-outline" href="https://wa.me/79684181188">Написать в WhatsApp <span>↗</span></a>
            </div>
          </div>
        </div>
      </section>

      <footer>
        <div className="shell footer-inner">
          <a className="brand" href="#top"><span className="brand-mark">GAUDI</span><span className="brand-caption">premium renovation</span></a>
          <p>Ремонт премиум-класса под ключ · Москва</p>
          <p>© 2026 Gaudi</p>
        </div>
      </footer>
    </main>
  );
}
