import type { Metadata } from "next";
import { artists } from "@/data/universe";
import { intakeRequirements, pilotBriefs } from "@/data/production";
import { TrackIntakeBuilder } from "./TrackIntakeBuilder";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Приём песен — Festival Studio",
  description: "Локальный конструктор производственной карточки для Живого Сбоя #01.",
};

export default function TrackIntakePage() {
  const roster = artists.map(({ n, slug, name, mark, stage, arc }) => ({ n, slug, name, mark, stage, arc }));

  return (
    <main className={styles.page}>
      <nav className={styles.nav}>
        <a href="/studio" className={styles.brand}><i />FESTIVAL STUDIO</a>
        <span>ПРИЁМ ПЕСЕН / JS01</span>
        <a href="/universe">Канон ↗</a>
      </nav>

      <header className={styles.hero}>
        <div>
          <p>НАЧИНАЕМ СЕЙЧАС</p>
          <h1>ПЕСНИ НЕ<br />ОСТАНАВЛИВАЕМ.</h1>
        </div>
        <div className={styles.heroText}>
          <strong>Разнообразие — часть замысла.</strong>
          <p>Не нужно переделывать все треки под одну тему. Общий смысл создадут персонажи, три волны, ведущие и последствия между номерами.</p>
        </div>
      </header>

      <section className={styles.rules}>
        <article><span>01</span><h2>Назначить героя</h2><p>Песня должна принадлежать одному из двадцати характеров, а не абстрактному AI-исполнителю.</p></article>
        <article><span>02</span><h2>Выбрать волну</h2><p>«Я» показывает маску, «Сбой» ломает её, «Отзвук» требует поступка или нового состояния.</p></article>
        <article><span>03</span><h2>Сохранить происхождение</h2><p>Записываем дату, сервис, тариф, исходник и человеческие изменения — это будущая цепочка прав и доверия.</p></article>
      </section>

      <section className={styles.pilots}>
        <div className={styles.sectionTitle}><span>PILOT / 03</span><h2>Первыми проверяем три края системы</h2></div>
        <div className={styles.pilotGrid}>
          {pilotBriefs.map((pilot) => (
            <article key={pilot.slotId} style={{ "--pilot": pilot.accent } as React.CSSProperties}>
              <header><span>{pilot.slotId}</span><b>{pilot.tier}</b></header>
              <h3>{pilot.artist}</h3>
              <strong>{pilot.label}</strong>
              <p>{pilot.task}</p>
            </article>
          ))}
        </div>
      </section>

      <section className={styles.requirements}>
        <div className={styles.sectionTitle}><span>INPUT / 06</span><h2>Что прикладывать к каждой песне</h2></div>
        <ol>{intakeRequirements.map((item) => <li key={item}>{item}</li>)}</ol>
      </section>

      <TrackIntakeBuilder artists={roster} />

      <footer className={styles.footer}>
        <p>Карточка создаётся локально в браузере и ничего не отправляет в интернет. WAV остаётся на вашем компьютере до подключения защищённого хранилища.</p>
        <a href="/studio">Вернуться в матрицу →</a>
      </footer>
    </main>
  );
}
