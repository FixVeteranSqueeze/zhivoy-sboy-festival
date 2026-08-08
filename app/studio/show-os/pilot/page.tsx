import type { Metadata } from "next";
import type { CSSProperties } from "react";
import Link from "next/link";
import {
  costumeBibles,
  pilotChain,
  pilotSegments,
  productionOrder,
  productionStack,
  songRules,
  songTrilogy,
} from "@/data/pilot-show";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Пилотная глава — Живой Сбой #01",
  description: "Сценарий, логика песен, ведущие, костюмы, движения и производственный план 16-минутного пилота.",
};

const costLabels = { S: "код / монтаж", M: "персонажный", L: "флагман" } as const;

export default function PilotPage() {
  return (
    <main className={styles.page}>
      <nav className={styles.nav}>
        <Link href="/studio/show-os" className={styles.brand}><i />SHOW OS</Link>
        <span>PROOF OF SHOW / PILOT 01</span>
        <div><Link href="/studio">Студия</Link><Link href="/universe">Канон</Link></div>
      </nav>

      <header className={styles.hero}>
        <div className={styles.signal}><span>00</span><span>16</span><i /></div>
        <p className={styles.kicker}>ЖИВОЙ СБОЙ #01 · НУЛЕВАЯ ВОЛНА</p>
        <h1>ЗАЯВКА<br /><em>НА ЖИВОЕ</em></h1>
        <div className={styles.heroBottom}>
          <p>Четыре артиста, три сцены и один вопрос: можно ли доказать, что голос живой? Пилот не объясняет вселенную — он заставляет зрителя сначала рассмеяться, затем почувствовать и только потом задуматься.</p>
          <dl><div><dt>Формат</dt><dd>16-минутная глава</dd></div><div><dt>Музыка</dt><dd>4 фестивальных монтажа</dd></div><div><dt>Проверяет</dt><dd>весь язык шоу</dd></div></dl>
        </div>
      </header>

      <section className={styles.decision}>
        <span>ГЛАВНОЕ РЕШЕНИЕ</span>
        <h2>60 ПЕСЕН — ЭТО КАТАЛОГ.<br />КОНЦЕРТ — ЭТО ДРАМАТУРГИЯ.</h2>
        <div>
          <p><b>Полные версии</b> выпускаются как треки и плейлисты. Они дают героям музыкальную жизнь вне шоу.</p>
          <p><b>Фестивальные версии</b> длятся 80–125 секунд: главный куплет, хук, визуальный поворот и сюжетный след.</p>
          <p><b>Результат:</b> все 60 песен входят в историю, но шоу не превращается в четырёхчасовой марафон одинаковых клипов.</p>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.sectionTitle}><span>01 / SONG ENGINE</span><h2>ЛОГИКА ТРЁХ ПЕСЕН</h2><p>Один артист — одна законченная мини-трилогия. Музыка меняется вместе с характером.</p></div>
        <div className={styles.trilogy}>
          {songTrilogy.map((wave) => (
            <article key={wave.code} style={{ "--accent": wave.accent } as CSSProperties}>
              <header><span>{wave.code}</span><i /></header>
              <h3>{wave.title}</h3>
              <blockquote>«{wave.question}»</blockquote>
              <dl>
                <div><dt>Задача</dt><dd>{wave.mission}</dd></div>
                <div><dt>Поворот</dt><dd>{wave.hiddenTurn}</dd></div>
                <div><dt>Музыка</dt><dd>{wave.musicLogic}</dd></div>
                <div><dt>Визуал</dt><dd>{wave.visualLogic}</dd></div>
                <div><dt>След</dt><dd>{wave.trace}</dd></div>
              </dl>
            </article>
          ))}
        </div>
        <ol className={styles.rules}>{songRules.map((rule) => <li key={rule}>{rule}</li>)}</ol>
      </section>

      <section className={`${styles.section} ${styles.chainSection}`}>
        <div className={styles.sectionTitle}><span>02 / RELAY</span><h2>ЧЕТЫРЕ ПЕСНИ — ОДНА ЦЕПЬ</h2><p>След предыдущей песни становится причиной следующей. Именно это отличает спектакль от плейлиста.</p></div>
        <div className={styles.chain}>
          {pilotChain.map((song) => (
            <article key={song.no} style={{ "--accent": song.accent } as CSSProperties}>
              <header><span>{song.no}</span><b>{song.artist}</b></header>
              <h3>{song.workingTitle}</h3>
              <p>{song.function}</p>
              <dl><div><dt>Вход</dt><dd>{song.incoming}</dd></div><div><dt>Выход</dt><dd>{song.outgoing}</dd></div></dl>
              <footer><span>{song.energy}</span><small>{song.format}</small></footer>
            </article>
          ))}
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.sectionTitle}><span>03 / SCRIPT 00:16:00</span><h2>СЦЕНАРИЙ ПИЛОТА</h2><p>Реплики уже можно озвучивать, а музыкальные блоки — заменять кандидатами из соседнего производства.</p></div>
        <div className={styles.script}>
          {pilotSegments.map((segment, index) => (
            <article key={`${segment.start}-${segment.title}`}>
              <aside><strong>{segment.start}</strong><span>{segment.end}</span><b>{String(index + 1).padStart(2, "0")}</b></aside>
              <div className={styles.scriptMain}>
                <header><span>{segment.kind}</span><span>{segment.stage}</span><i data-cost={segment.cost}>{segment.cost} · {costLabels[segment.cost]}</i></header>
                <h3>{segment.title}</h3>
                <small>{segment.cast}</small>
                <p className={styles.action}>{segment.action}</p>
                {segment.dialogue.length > 0 && <blockquote>{segment.dialogue.map((line) => <p key={line}>{line}</p>)}</blockquote>}
              </div>
              <dl className={styles.direction}>
                <div><dt>Движение</dt><dd>{segment.movement}</dd></div>
                <div><dt>Камера</dt><dd>{segment.camera}</dd></div>
                <div><dt>Визуал</dt><dd>{segment.visual}</dd></div>
                <div><dt>Как сделать</dt><dd>{segment.production}</dd></div>
                <div><dt>След</dt><dd>{segment.trace}</dd></div>
              </dl>
            </article>
          ))}
        </div>
      </section>

      <section className={`${styles.section} ${styles.costumeSection}`}>
        <div className={styles.sectionTitle}><span>04 / CHARACTER DIRECTION</span><h2>КОСТЮМ — ЭТО ПОВЕДЕНИЕ</h2><p>Он должен работать в силуэте, движении и реквизите, а не только красиво выглядеть на одном изображении.</p></div>
        <div className={styles.costumes}>
          {costumeBibles.map((costume, index) => (
            <article key={costume.name}>
              <header><span>{String(index + 1).padStart(2, "0")}</span><h3>{costume.name}</h3></header>
              <dl><div><dt>Силуэт</dt><dd>{costume.silhouette}</dd></div><div><dt>Палитра</dt><dd>{costume.palette}</dd></div><div><dt>Реквизит</dt><dd>{costume.prop}</dd></div><div><dt>Движение</dt><dd>{costume.movement}</dd></div><div><dt>Нельзя</dt><dd>{costume.rule}</dd></div></dl>
            </article>
          ))}
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.sectionTitle}><span>05 / PIPELINE</span><h2>В КАКОМ ПОРЯДКЕ ДЕЛАТЬ</h2><p>Сначала доказать формат на четырёх артистах. Только после этого масштабировать на оставшиеся пятьдесят шесть песен.</p></div>
        <div className={styles.order}>{productionOrder.map((item) => <article key={item.step}><span>{item.step}</span><div><h3>{item.title}</h3><p>{item.result}</p></div></article>)}</div>
      </section>

      <section className={styles.stackSection}>
        <div><span>06 / PRODUCTION STACK</span><h2>ДОРОГОЙ ВИД<br />БЕЗ 60 ДОРОГИХ КЛИПОВ</h2><p>Бюджет вкладывается в повторно используемую систему: пять сцен, стабильные риги, библиотеку движений, титров и эффектов.</p></div>
        <div className={styles.stack}>{productionStack.map((item) => <article key={item.layer}><span>{item.layer}</span><h3>{item.tool}</h3><p>{item.use}</p></article>)}</div>
      </section>

      <section className={styles.next}>
        <span>NEXT / 72 HOURS</span>
        <h2>НЕ ДЕЛАЕМ 60 НОМЕРОВ.<br />ДЕЛАЕМ ОДНУ ГЛАВУ,<br /><em>КОТОРУЮ ХОЧЕТСЯ ДОСМОТРЕТЬ.</em></h2>
        <div><p>Следующий вход — по 3–5 кандидатов для СЕВЕРЫ-9, ПАЛЫЧА.ROM, Грохота Петровича и Моти Мха. Из них выбираются четыре фестивальных монтажа, после чего собирается первый настоящий ролик на 16 минут.</p><Link href="/studio/intake">Открыть приём песен →</Link></div>
      </section>

      <footer className={styles.footer}><Link href="/studio/show-os">← SHOW OS</Link><span>ПИЛОТ 01 / ЗАЯВКА НА ЖИВОЕ</span><Link href="/studio/intake">Песни →</Link></footer>
    </main>
  );
}
