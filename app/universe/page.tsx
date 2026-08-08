import type { Metadata } from "next";
import type { CSSProperties } from "react";
import { artists, recurringSegments, seasonOne, stages, universeLaws, waves } from "@/data/universe";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Слои Отзвука — библия вселенной",
  description: "Канон, сцены, персонажи и первый год номерных фестивалей «Живой Сбой».",
};

export default function UniversePage() {
  return (
    <main className={styles.page}>
      <nav className={styles.nav}>
        <a className={styles.brand} href="/"><i />СЛОИ ОТЗВУКА</a>
        <div><a href="#laws">Законы</a><a href="#stages">Сцены</a><a href="#artists">Герои</a><a href="#season">Сезон</a></div>
        <a className={styles.back} href="/">Фестиваль ↗</a>
      </nav>

      <header className={styles.hero}>
        <div className={styles.heroIndex}>UNIVERSE BIBLE / 001</div>
        <p className={styles.kicker}>Музыкальная вселенная о разных способах быть живым</p>
        <h1>СЛОИ<br /><span>ОТЗВУКА</span></h1>
        <div className={styles.heroBottom}>
          <p>После Частотного сдвига чувства, забытые сигналы и память материалов обрели форму. Двадцать исполнителей собирают общий обертон — не чтобы стать одинаковыми, а чтобы снова услышать друг друга.</p>
          <div className={styles.signal} aria-hidden="true"><span>20</span><small>ЧАСТОТ</small></div>
        </div>
      </header>

      <section className={styles.promise}>
        <span>ОБЕЩАНИЕ МИРА</span>
        <blockquote>«Искусственность происхождения<br />не отменяет подлинность реакции»</blockquote>
      </section>

      <section className={styles.section} id="laws">
        <div className={styles.sectionTop}><span>01</span><h2>ЗАКОНЫ<br />РЕЗОНАНСА</h2><p>Мир остаётся цельным, потому что даже его чудеса имеют цену и ограничения.</p></div>
        <div className={styles.lawGrid}>
          {universeLaws.map((law, index) => <article key={law}><strong>{String(index + 1).padStart(2, "0")}</strong><p>{law}</p></article>)}
        </div>
      </section>

      <section className={styles.darkSection} id="stages">
        <div className={styles.darkInner}>
          <div className={styles.sectionTop}><span>02</span><h2>ПЯТЬ<br />СЛОЁВ</h2><p>Постоянные сцены меняют палитру и погоду, но сохраняют собственную физику.</p></div>
          <div className={styles.stageList}>
            {stages.map((stage, index) => (
              <article key={stage.id}>
                <div className={styles.stageNo}>{String(index + 1).padStart(2, "0")}</div>
                <div><small>{stage.code}</small><h3>{stage.name}</h3></div>
                <p>{stage.purpose}</p>
                <p>{stage.visual}</p>
                <span>{stage.palette}</span>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.section} id="artists">
        <div className={styles.sectionTop}><span>03</span><h2>ДВАДЦАТЬ<br />ЧАСТОТ</h2><p>Три песни — один путь: публичный образ, внутренний сбой и собственный выбор.</p></div>
        <div className={styles.artistGrid}>
          {artists.map((artist) => (
            <article key={artist.slug} style={{ "--artist": artist.accent } as CSSProperties}>
              <header><span>{artist.n}</span><small>{artist.stage}</small></header>
              <div className={styles.artistMark}>{artist.mark}</div>
              <h3>{artist.name}</h3>
              <p>{artist.goal}</p>
              <div className={styles.arc}>
                {artist.arc.map((part, index) => <span key={part}><i>{index + 1}</i>{part}</span>)}
              </div>
              <footer>{artist.tension}</footer>
            </article>
          ))}
        </div>
      </section>

      <section className={styles.waveSection}>
        <div className={styles.sectionTop}><span>04</span><h2>ТРИ<br />ВОЛНЫ</h2><p>Один номерной фестиваль — три вечерние главы и шестьдесят фрагментов общего сигнала.</p></div>
        <div className={styles.waveGrid}>
          {waves.map((wave) => <article key={wave.code}><small>{wave.code} · {wave.slots} песен</small><h3>{wave.name}</h3><blockquote>«{wave.prompt}»</blockquote><p>{wave.purpose}</p></article>)}
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.sectionTop}><span>05</span><h2>ГОЛОСА<br />МЕЖДУ</h2><p>Интерлюдии не заполняют паузы — они создают ритм, юмор и связи между героями.</p></div>
        <div className={styles.segmentGrid}>
          {recurringSegments.map((segment) => <article key={segment.title}><span>{segment.duration}</span><h3>{segment.title}</h3><b>{segment.host}</b><p>{segment.function}</p></article>)}
        </div>
      </section>

      <section className={styles.season} id="season">
        <div className={styles.seasonIntro}><span>06 / ПЕРВЫЙ ГОД</span><h2>МИР УЧИТСЯ<br />СЛЫШАТЬ.</h2><p>Каждый месяц приносит новую тему и одну заметную технологическую ступень.</p></div>
        <div className={styles.seasonList}>
          {seasonOne.map((issue) => (
            <article key={issue.no}>
              <span>#{issue.no}</span><h3>{issue.title}</h3><p>{issue.question}</p><small>{issue.upgrade}</small>
            </article>
          ))}
        </div>
      </section>

      <footer className={styles.footer}>
        <div><span>КАНОН 1.0</span><span>20 ГЕРОЕВ</span><span>12 ФЕСТИВАЛЕЙ</span></div>
        <h2>ПЕРВЫЙ СИГНАЛ<br />УЖЕ СОБИРАЕТСЯ.</h2>
        <div className={styles.footerLinks}><a href="/">Открыть фестиваль ↗</a><a href="/studio">Открыть студию ↗</a></div>
      </footer>
    </main>
  );
}
