import type { Metadata } from "next";
import type { CSSProperties } from "react";
import { assemblyRules, effectLibrary, firstThreeFestivals, killerFeatures, runOfShow, showPillars, visualFormats } from "@/data/show-os";
import { ShowConstructor } from "./ShowConstructor";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "SHOW OS — конструктор Живого Сбоя",
  description: "Смысловая, драматургическая и визуальная операционная система номерного AI-фестиваля.",
};

export default function ShowOSPage() {
  return (
    <main className={styles.page}>
      <nav className={styles.nav}>
        <a href="/studio" className={styles.brand}><i />FESTIVAL STUDIO</a>
        <span>SHOW OPERATING SYSTEM / V0.1</span>
        <div><a href="/studio/intake">Песни</a><a href="/universe">Канон</a></div>
      </nav>

      <header className={styles.hero}>
        <div className={styles.heroMeta}><span>20 ГЕРОЕВ</span><span>60 ПЕСЕН</span><span>135 МИНУТ</span><span>1 СЮЖЕТ</span></div>
        <p>Конструктор интеллектуального музыкального спектакля</p>
        <h1>SHOW<br /><em>OS</em></h1>
        <div className={styles.heroBottom}><p>Не плейлист с картинками. Система, где каждая песня оставляет след, каждая шутка возвращается, а каждый добрый поступок меняет следующий номер.</p><strong>СМЫСЛ → СБОЙ → ПОСТУПОК → ОТЗВУК</strong></div>
      </header>

      <section className={styles.section}>
        <div className={styles.sectionTitle}><span>01 / CORE</span><h2>СЕМЬ ОБЕЩАНИЙ ЗРИТЕЛЮ</h2><p>Каждый модуль обязан выполнять минимум одно обещание и проходить конкретную проверку.</p></div>
        <div className={styles.pillars}>{showPillars.map((pillar, index) => <article key={pillar.id} style={{ "--pillar": pillar.accent } as CSSProperties}><header><span>{String(index + 1).padStart(2, "0")}</span><i /></header><h3>{pillar.name}</h3><p>{pillar.promise}</p><footer>{pillar.test}</footer></article>)}</div>
      </section>

      <section className={`${styles.section} ${styles.runSection}`}>
        <div className={styles.sectionTitle}><span>02 / 02:15:00</span><h2>ПУЛЬС ПРОГРАММЫ №1</h2><p>Три музыкальные волны по 30 минут и 45 минут живой драматургической ткани.</p></div>
        <div className={styles.timeline}>{runOfShow.map((block) => <article key={block.start}><header><span>{block.start}</span><b>{block.end}</b></header><h3>{block.title}</h3><p>{block.purpose}</p><div>{Array.from({ length: 5 }, (_, index) => <i className={index < block.energy ? styles.on : ""} key={index} />)}</div></article>)}</div>
      </section>

      <section className={styles.section}>
        <div className={styles.sectionTitle}><span>03 / SIGNATURE</span><h2>КИЛЛЕР-ФИЧИ</h2><p>Механики, которые нельзя перепутать с обычным AI-каналом или подборкой визуализаторов.</p></div>
        <div className={styles.features}>{killerFeatures.map((feature) => <article key={feature.no}><span>{feature.no}</span><div><h3>{feature.title}</h3><p>{feature.idea}</p></div></article>)}</div>
      </section>

      <ShowConstructor />

      <section className={styles.section}>
        <div className={styles.sectionTitle}><span>05 / VISUAL ENGINE</span><h2>ЯЗЫКИ НОМЕРОВ</h2><p>Один сильный формат на номер. Случайный набор эффектов не считается режиссурой.</p></div>
        <div className={styles.visualGrid}>{visualFormats.map((format) => <article key={format.name}><b>{format.cost}</b><h3>{format.name}</h3><span>{format.use}</span><p>{format.parts}</p></article>)}</div>
        <div className={styles.effectRail}>{effectLibrary.map((effect, index) => <span key={effect}><b>{String(index + 1).padStart(2, "0")}</b>{effect}</span>)}</div>
      </section>

      <section className={styles.section}>
        <div className={styles.sectionTitle}><span>06 / ASSEMBLY</span><h2>ПРАВИЛА МОНТАЖА</h2><p>Автоматические ограничения защищают концерт от однообразия и фальшивой глубины.</p></div>
        <ol className={styles.rules}>{assemblyRules.map((rule) => <li key={rule}>{rule}</li>)}</ol>
      </section>

      <section className={styles.section}>
        <div className={styles.sectionTitle}><span>07 / SEASON START</span><h2>СРАЗУ ТРИ КОНЦЕРТА</h2><p>Не три одинаковых шоу: каждый выпуск сохраняет фундамент и добавляет одну новую систему.</p></div>
        <div className={styles.festivals}>{firstThreeFestivals.map((festival) => <article key={festival.no}><header><span>JS / {festival.no}</span><b>UPGRADE</b></header><h3>{festival.title}</h3><blockquote>«{festival.question}»</blockquote><dl><div><dt>Новая система</dt><dd>{festival.newSystem}</dd></div><div><dt>Финал</dt><dd>{festival.finale}</dd></div></dl></article>)}</div>
      </section>

      <section className={styles.claudeRoom}>
        <div><span>CONTENT ROOM</span><h2>CLAUDE ПИШЕТ.<br />SHOW OS РЕДАКТИРУЕТ.</h2></div>
        <div className={styles.contentFlow}><p><b>01</b> Канон + соседние песни</p><p><b>02</b> Три концепции без реплик</p><p><b>03</b> Выбор и сценарный JSON</p><p><b>04</b> Фактчек, характер, доброта</p><p><b>05</b> Блокировка версии и производство</p></div>
        <p>Claude не генерирует весь концерт одним запросом. Он работает главами по пять модулей и получает список уже использованных шуток, предметов и возвратных линий.</p>
      </section>

      <footer className={styles.footer}><a href="/studio">← Festival Studio</a><span>SHOW OS / ЖИВОЙ СБОЙ / 2026</span><a href="/studio/intake">Принять песню →</a></footer>
    </main>
  );
}
