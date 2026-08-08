"use client";

import { useMemo, useState } from "react";
import { showModules, showPillars, type ShowPillarId } from "@/data/show-os";
import styles from "./page.module.css";

export function ShowConstructor() {
  const [filter, setFilter] = useState<"all" | ShowPillarId>("all");
  const [stack, setStack] = useState<string[]>(["cold-open", "host-bridge", "support-desk"]);
  const visible = filter === "all" ? showModules : showModules.filter((module) => module.pillars.includes(filter));
  const selected = stack.map((id) => showModules.find((module) => module.id === id)).filter(Boolean) as typeof showModules;
  const totalSeconds = selected.reduce((sum, module) => sum + module.seconds, 0);
  const balance = useMemo(() => showPillars.map((pillar) => ({ ...pillar, count: selected.filter((module) => module.pillars.includes(pillar.id)).length })), [selected]);

  const toggle = (id: string) => setStack((current) => current.includes(id) ? current.filter((item) => item !== id) : [...current, id]);

  return (
    <section className={`${styles.section} ${styles.constructor}`}>
      <div className={styles.sectionTitle}><span>04 / MODULE BUILDER</span><h2>КОНСТРУКТОР ГЛАВЫ</h2><p>Добавьте модули в тестовую главу и проверьте длительность и смысловой баланс.</p></div>
      <div className={styles.filters}><button className={filter === "all" ? styles.active : ""} onClick={() => setFilter("all")}>Все</button>{showPillars.map((pillar) => <button className={filter === pillar.id ? styles.active : ""} onClick={() => setFilter(pillar.id)} key={pillar.id}>{pillar.name}</button>)}</div>
      <div className={styles.constructorGrid}>
        <div className={styles.moduleLibrary}>{visible.map((module) => <button key={module.id} className={stack.includes(module.id) ? styles.selected : ""} onClick={() => toggle(module.id)}><header><span>{module.duration}</span><b>{module.cost}</b></header><h3>{module.title}</h3><p>{module.function}</p><footer>{module.pillars.map((pillar) => <i key={pillar}>{showPillars.find((item) => item.id === pillar)?.name}</i>)}</footer></button>)}</div>
        <aside className={styles.stack}>
          <header><div><span>ТЕСТОВАЯ ГЛАВА</span><strong>{selected.length} модулей</strong></div><b>{Math.floor(totalSeconds / 60)}:{String(totalSeconds % 60).padStart(2, "0")}</b></header>
          <div className={styles.stackList}>{selected.length ? selected.map((module, index) => <button key={`${module.id}-${index}`} onClick={() => toggle(module.id)}><span>{String(index + 1).padStart(2, "0")}</span><div><strong>{module.title}</strong><small>{module.format}</small></div><b>×</b></button>) : <p>Выберите модули слева.</p>}</div>
          <div className={styles.balance}><span>СМЫСЛОВОЙ БАЛАНС</span>{balance.map((pillar) => <div key={pillar.id}><i style={{ background: pillar.accent }} /><b>{pillar.name}</b><em>{pillar.count}</em></div>)}</div>
          <p className={styles.stackHint}>{selected.length < 3 ? "Глава слишком тонкая: добавьте контраст." : totalSeconds > 420 ? "Глава длиннее семи минут — проверьте ритм." : "Каркас пригоден для сценарной разработки."}</p>
        </aside>
      </div>
    </section>
  );
}
