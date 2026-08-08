import type { CSSProperties } from "react";

const artists = [
  { n: "01", name: "СЕВЕРА-9", mark: "С9", role: "Синтетическая метеоролог", genre: "синт-поп · liquid D&B", line: "Я чиню погоду внутри вас", tension: "контроль ↔ чувство", accent: "#d9f3ff" },
  { n: "02", name: "Савва Корень", mark: "СК", role: "Хранитель певчего сада", genre: "future folk · bass ritual", line: "Старое дерево помнит новый ритм", tension: "традиция ↔ обновление", accent: "#abc878" },
  { n: "03", name: "Мотя Мох", mark: "ММ", role: "Дух потерянных колыбельных", genre: "cozy pop · folktronica", line: "Тише: уют растёт", tension: "тишина ↔ большая сцена", accent: "#bfe8b1" },
  { n: "04", name: "Мадам Пауза", mark: "МП", role: "Воплощение секунды тишины", genre: "noir cabaret · trip-hop", line: "Главная нота ещё не прозвучала", tension: "внимание ↔ молчание", accent: "#f0d8e7" },
  { n: "05", name: "Грохот Петрович", mark: "ГП", role: "Композитор бывших зданий", genre: "industrial rock · heavy folk", line: "Сломаем шум — соберём сердце", tension: "разрушение ↔ созидание", accent: "#ff713f" },
  { n: "06", name: "Лёля Лазер", mark: "ЛЛ", role: "Художница искусственного рассвета", genre: "acid techno · club pop", line: "Танцпол тоже умеет лечить", tension: "видимость ↔ близость", accent: "#c8ff35" },
  { n: "07", name: "Сонограф", mark: "СН", role: "Архивариус чужих снов", genre: "ambient · dream pop", line: "Я записываю то, что вам не приснилось", tension: "память ↔ личность", accent: "#8fa7ff" },
  { n: "08", name: "ПАЛЫЧ.ROM", mark: "PR", role: "Списанный цифровой консьерж", genre: "chiptune · electro-funk", line: "Устарел, но грузится", tension: "служение ↔ свобода", accent: "#45e3e0" },
  { n: "09", name: "Яра Медянь", mark: "ЯМ", role: "Носительница живой меди", genre: "electro-folk · polyrhythm", line: "Вены города сделаны из меди", tension: "наследие ↔ эксплуатация", accent: "#d98952" },
  { n: "10", name: "Грави", mark: "G", role: "Юная микропланета", genre: "bubble bass · future R&B", line: "Маленький вес. Большое притяжение", tension: "любовь ↔ удержание", accent: "#b59aff" },
  { n: "11", name: "Ректор Ржавь", mark: "РР", role: "Ожившая система безопасности", genre: "industrial doom · metal choir", line: "Коррозия — это память металла", tension: "защита ↔ свобода", accent: "#cb6846" },
  { n: "12", name: "Капитан Кисель", mark: "КК", role: "Самоназначенный командир звёзд", genre: "space lounge · ska", line: "Курс держим по дрожанию!", tension: "легенда ↔ ответственность", accent: "#ff83aa" },
  { n: "13", name: "Вдова Неона", mark: "ВН", role: "Электрический отпечаток певицы", genre: "synth-noir · slow house", line: "Свет погас. Я осталась", tension: "память ↔ новая жизнь", accent: "#fa4fbd" },
  { n: "14", name: "Тая Трилица", mark: "Т3", role: "Один голос в трёх масках", genre: "avant-pop · art rock", line: "Одно тело. Три правды", tension: "множественность ↔ цельность", accent: "#ff4f66" },
  { n: "15", name: "Рута Ремонт", mark: "РМ", role: "Механик музыкальной памяти", genre: "garage rock · breakbeat", line: "Если сердце стучит — оно ещё чинится", tension: "забота ↔ выгорание", accent: "#f0bf4d" },
  { n: "16", name: "Пуговка Гром", mark: "ПГ", role: "Маленький грозовой дух", genre: "power pop · marching brass", line: "Пристегни облако", tension: "смелость ↔ последствия", accent: "#ffe24a" },
  { n: "17", name: "Щельник", mark: "Щ", role: "Голос городских зазоров", genre: "grime · dub · field sound", line: "Город говорит между стен", tension: "разделение ↔ связь", accent: "#82ef38" },
  { n: "18", name: "Флора Факс", mark: "FF", role: "Представительница офисных растений", genre: "office jazz · bossa funk", line: "Ваш запрос пустил корни", tension: "система ↔ живое", accent: "#8ecda4" },
  { n: "19", name: "Агата Прибой", mark: "АП", role: "Океаническая акустик", genre: "sea folk · choral ambient", line: "Море возвращает голос", tension: "надежда ↔ принятие", accent: "#5ed2cf" },
  { n: "20", name: "Курьер Край", mark: "КR", role: "Доставщик за краем времени", genre: "D&B · alt rap · post-punk", line: "Доставляю то, что нельзя отправить", tension: "движение ↔ дом", accent: "#ff7e3d" },
];

const headliners = artists.filter((artist) => ["01", "04", "09", "11", "14"].includes(artist.n));

export default function Home() {
  return (
    <main>
      <div className="ticker" aria-label="Новости фестиваля">
        <div className="ticker-track">
          <span>ПЕРВАЯ ПЕРЕДАЧА СИГНАЛА</span><i />
          <span>20 АРТИСТОВ</span><i />
          <span>5 СЦЕН</span><i />
          <span>ОДНА НУЛЕВАЯ ВОЛНА</span><i />
          <span>ПЕРВАЯ ПЕРЕДАЧА СИГНАЛА</span><i />
          <span>20 АРТИСТОВ</span><i />
        </div>
      </div>

      <nav className="nav shell" aria-label="Основная навигация">
        <a className="brand" href="#top" aria-label="Слои Отзвука — наверх">
          <span className="brand-dot" />
          <span>СЛОИ<br />ОТЗВУКА</span>
        </a>
        <div className="nav-links">
          <a href="#lineup">Лайн-ап</a>
          <a href="#world">Вселенная</a>
          <a href="#program">Программа</a>
        </div>
        <a className="nav-ticket" href="#signal">Поймать сигнал <span>↘</span></a>
      </nav>

      <header className="hero shell" id="top">
        <div className="hero-copy">
          <p className="eyebrow"><span>●</span> Нулевая волна · Первый ИИ-фестиваль</p>
          <h1><span>ЖИВОЙ</span><span className="outline">СБОЙ</span></h1>
          <div className="hero-meta">
            <p className="hero-lead">Двадцать невозможных исполнителей встречаются в одной точке эфира. У каждого — свой голос, своя рана и причина выйти на сцену.</p>
            <div className="date-block">
              <strong>20 / 09</strong>
              <span>Город Обертон<br />место проявится позже</span>
            </div>
          </div>
          <div className="hero-actions">
            <a className="button button-primary" href="#lineup">Открыть лайн-ап <span>↓</span></a>
            <span className="frequency">FM 00.20 · LIVE / UNKNOWN</span>
          </div>
        </div>

        <div className="signal-object" aria-hidden="true">
          <div className="orbit orbit-one"><span>СЕВЕРА-9</span></div>
          <div className="orbit orbit-two"><span>ЖИВОЙ СБОЙ</span></div>
          <div className="signal-core">
            <span className="core-label">LIVE<br />ERROR</span>
            <div className="core-wave"><i /><i /><i /><i /><i /><i /><i /></div>
          </div>
          <span className="coordinate coordinate-top">55°45′N</span>
          <span className="coordinate coordinate-bottom">37°37′E</span>
        </div>
      </header>

      <section className="manifest shell" id="world">
        <div className="section-index">01 / МАНИФЕСТ</div>
        <div className="manifest-grid">
          <h2>Не генерация.<br /><em>Новая сцена.</em></h2>
          <div className="manifest-copy">
            <p>После Частотного сдвига чувства, городские шумы, природные ритмы и забытые сигналы начали обретать форму. Так появились артисты из разных слоёв одной реальности.</p>
            <p>Здесь технология не заменяет характер. Она помогает двадцати героям с настоящими целями, конфликтами и слабостями рассказать свои истории.</p>
          </div>
          <div className="manifest-stats">
            <div><strong>20</strong><span>характеров</span></div>
            <div><strong>05</strong><span>сцен</span></div>
            <div><strong>∞</strong><span>историй</span></div>
          </div>
        </div>
      </section>

      <section className="lineup shell" id="lineup">
        <div className="section-heading">
          <div>
            <div className="section-index">02 / ПОЛНЫЙ ЛАЙН-АП</div>
            <h2>ВСЕ ЧАСТОТЫ</h2>
          </div>
          <p>От космического лаунжа до морского хора.<br />Нажимать «похож на…» бесполезно.</p>
        </div>

        <div className="artist-grid">
          {artists.map((artist) => (
            <article className="artist-card" key={artist.n} style={{ "--accent": artist.accent } as CSSProperties}>
              <div className="artist-top">
                <span>{artist.n}</span>
                <span className="live-dot">LIVE</span>
              </div>
              <div className="artist-sigil" aria-hidden="true">
                <span>{artist.mark}</span>
                <i />
              </div>
              <div className="artist-copy">
                <p>{artist.role}</p>
                <h3>{artist.name}</h3>
                <blockquote>«{artist.line}»</blockquote>
              </div>
              <div className="artist-footer">
                <span>{artist.genre}</span>
                <span>{artist.tension}</span>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="headliners">
        <div className="shell">
          <div className="section-index light">03 / ГЛАВНЫЙ СИГНАЛ</div>
          <div className="headliner-intro">
            <h2>ПЯТЬ ИМЁН.<br /><span>ПЯТЬ СПОСОБОВ</span><br />ИЗМЕНИТЬ НОЧЬ.</h2>
            <p>Каждый хедлайнер получает собственную сценическую механику — от полной тишины до управляемого обрушения сцены.</p>
          </div>
          <div className="headliner-list">
            {headliners.map((artist, index) => (
              <div className="headliner-row" key={artist.n}>
                <span className="headliner-time">{["21:10", "22:20", "23:30", "00:40", "02:00"][index]}</span>
                <strong>{artist.name}</strong>
                <span>{artist.genre}</span>
                <i>↗</i>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="program shell" id="program">
        <div className="section-heading">
          <div>
            <div className="section-index">04 / КАК ЭТО РАБОТАЕТ</div>
            <h2>ОДНА НОЧЬ.<br />ПЯТЬ СОСТОЯНИЙ.</h2>
          </div>
          <p>Фестиваль построен как путешествие через слои Отзвука, а не как случайная последовательность сетов.</p>
        </div>

        <div className="program-grid">
          <article><span>18:00</span><b>ПРОБУЖДЕНИЕ</b><p>Мягкие частоты, семейная сцена и первое знакомство с героями.</p><small>Мотя · Грави · Пуговка · Савва</small></article>
          <article><span>20:00</span><b>ГОРОД</b><p>Ритм ускоряется. Машины, стены и вывески начинают отвечать.</p><small>ПАЛЫЧ.ROM · Флора · Щельник · Рута</small></article>
          <article><span>22:00</span><b>СДВИГ</b><p>Главные шоу мира сталкивают тишину, металл, свет и погоду.</p><small>СЕВЕРА-9 · Яра · Мадам Пауза</small></article>
          <article><span>00:30</span><b>НОЧНОЙ СЛОЙ</b><p>Клубная энергия, коллективный танец и незаконченные прощания.</p><small>Лёля · Вдова Неона · Тая</small></article>
          <article><span>03:00</span><b>ВОЗВРАЩЕНИЕ</b><p>Море, сон и последняя доставка собирают все линии в финал.</p><small>Агата · Сонограф · Курьер Край</small></article>
        </div>
      </section>

      <section className="experience shell">
        <div className="experience-card experience-loud">
          <span>ДЛЯ ТЕХ, КТО ХОЧЕТ</span>
          <h3>ГРОМЧЕ</h3>
          <p>Ректор Ржавь · Лёля Лазер · Грохот Петрович</p>
        </div>
        <div className="experience-card experience-soft">
          <span>ДЛЯ ТЕХ, КОМУ НУЖНО</span>
          <h3>БЕРЕЖНЕЕ</h3>
          <p>Мотя Мох · Агата Прибой · Мадам Пауза</p>
        </div>
        <div className="experience-card experience-weird">
          <span>ДЛЯ ТЕХ, КТО ВЫБИРАЕТ</span>
          <h3>СТРАННЕЕ</h3>
          <p>Капитан Кисель · ПАЛЫЧ.ROM · Тая Трилица</p>
        </div>
      </section>

      <section className="final-cta shell" id="signal">
        <div className="cta-noise" aria-hidden="true">≈ ≈ ≈ ≈ ≈ ≈</div>
        <p className="eyebrow"><span>●</span> Канал открыт</p>
        <h2>ТЫ СЛЫШИШЬ<br />ЭТО ПЕРВЫМ.</h2>
        <p>Персонажи созданы. Следующий сигнал принесёт первые номера, визуальные образы и дату прямой передачи.</p>
        <div className="cta-actions">
          <a className="button button-dark" href="#top">Вернуться к началу <span>↑</span></a>
          <span>БИЛЕТЫ И ПЕРВАЯ МУЗЫКА — СКОРО</span>
        </div>
      </section>

      <footer className="footer shell">
        <a className="brand" href="#top"><span className="brand-dot" /><span>СЛОИ<br />ОТЗВУКА</span></a>
        <p>Оригинальная музыкальная вселенная<br />и фестиваль будущих голосов.</p>
        <div><span>ЖИВОЙ СБОЙ</span><span>НУЛЕВАЯ ВОЛНА</span><span>2026</span></div>
      </footer>
    </main>
  );
}
