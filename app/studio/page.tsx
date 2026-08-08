import type { Metadata } from "next";
import type { CSSProperties } from "react";
import { artists, productionTiers, trackStatuses, waves } from "@/data/universe";
import { festival01Slots, pilotBriefs } from "@/data/production";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Festival Studio — Живой Сбой #01",
  description: "Производственная матрица первого номерного фестиваля.",
};

export default function StudioPage() {
  return (
    <main className={styles.studio}>
      <header className={styles.topbar}>
        <a href="/" className={styles.logo}><i />FESTIVAL STUDIO</a>
        <div className={styles.issue}><span>ТЕКУЩИЙ ВЫПУСК</span><strong>#01 · НУЛЕВАЯ ВОЛНА</strong></div>
        <div className={styles.health}><i /> СИСТЕМА ГОТОВА · ТРЕКИ ОЖИДАЮТСЯ</div>
        <a href="/studio/intake">Приём треков ↗</a>
      </header>

      <section className={styles.dashboard}>
        <div className={styles.intro}>
          <div><p>ПРОИЗВОДСТВЕННАЯ МАТРИЦА / 20×3</p><h1>СОБИРАЕМ<br />ПЕРВЫЙ СИГНАЛ.</h1></div>
          <p>Все шестьдесят слотов созданы. После загрузки песен каждый номер пройдёт единую цепочку: редактура, мастер, визуальный бриф, аниматик, производство, монтаж и QC.</p>
        </div>

        <div className={styles.stats}>
          <article><span>ТРЕКИ</span><strong>00<small>/{festival01Slots.length}</small></strong><i /></article>
          <article><span>АРТИСТЫ</span><strong>20<small>/20</small></strong><i className={styles.full} /></article>
          <article><span>СЦЕНЫ</span><strong>05<small>/05</small></strong><i className={styles.full} /></article>
          <article><span>КАНОН</span><strong>1.0</strong><i className={styles.full} /></article>
        </div>

        <section className={styles.startNow}>
          <div><span>START / NOW</span><h2>НЕ ЖДЁМ ВСЕ 60.<br />СТРОИМ НА ТРЁХ.</h2><a href="/studio/intake">Открыть приём песен →</a></div>
          <div className={styles.pilotList}>{pilotBriefs.map((pilot) => <article key={pilot.slotId} style={{ "--pilot": pilot.accent } as CSSProperties}><b>{pilot.tier}</b><span>{pilot.slotId}</span><strong>{pilot.artist}</strong><p>{pilot.task}</p></article>)}</div>
        </section>

        <div className={styles.blockTitle}><div><span>01</span><h2>МАТРИЦА ПЕСЕН</h2></div><p>Пустой слот означает не отсутствие идеи, а готовое место с заранее определённой драматической функцией.</p></div>

        <div className={styles.trackMatrix}>
          <div className={styles.matrixHead}><span>АРТИСТ / СЦЕНА</span>{waves.map(wave=><span key={wave.code}>{wave.code}<b>{wave.name}</b></span>)}</div>
          {artists.map((artist) => (
            <div className={styles.matrixRow} key={artist.slug} style={{ "--artist": artist.accent } as CSSProperties}>
              <div className={styles.artistCell}><i>{artist.mark}</i><div><strong>{artist.name}</strong><span>{artist.stage}</span></div></div>
              {artist.arc.map((arc, index) => (
                <article key={arc}>
                  <header><span>JS01_{artist.n}_W{index + 1}</span><b>ОЖИДАЕТСЯ</b></header>
                  <h3>{arc}</h3>
                  <p>{index === 0 ? "Публичный образ и обещание" : index === 1 ? "Поломка, риск или столкновение" : "Выбор и новое состояние"}</p>
                  <footer><span>АУДИО —</span><span>ВИЗУАЛ —</span><span>QC —</span></footer>
                </article>
              ))}
            </div>
          ))}
        </div>

        <div className={styles.twoCol}>
          <section>
            <div className={styles.blockTitle}><div><span>02</span><h2>ВИЗУАЛЬНЫЕ УРОВНИ</h2></div></div>
            <div className={styles.tiers}>{productionTiers.map(tier=><article key={tier.tier}><span>{tier.tier}</span><div><h3>{tier.name}</h3><p>{tier.description}</p></div><strong>{tier.count}<small>номеров</small></strong></article>)}</div>
          </section>
          <section>
            <div className={styles.blockTitle}><div><span>03</span><h2>ЦЕПОЧКА</h2></div></div>
            <div className={styles.pipeline}>{trackStatuses.map((status,index)=><div key={status}><i>{String(index+1).padStart(2,"0")}</i><span>{status}</span><b>{index===0?"60":"00"}</b></div>)}</div>
          </section>
        </div>

        <section className={styles.nextStep}>
          <div><span>NEXT INPUT</span><h2>НУЖНЫ ТРИ<br />ПИЛОТНЫХ ТРЕКА.</h2></div>
          <div className={styles.inputList}><p><b>01</b> серьёзный хедлайнер</p><p><b>02</b> клубный номер</p><p><b>03</b> милый или абсурдный герой</p></div>
          <p>На них фиксируются три стандарта производства: флагман A, персонажное выступление B и графический номер C. После утверждения система масштабируется на оставшиеся 57 песен.</p>
        </section>
      </section>
    </main>
  );
}
