"use client";

import { useMemo, useState } from "react";
import styles from "./page.module.css";

type IntakeArtist = {
  n: string;
  slug: string;
  name: string;
  mark: string;
  stage: string;
  arc: [string, string, string];
};

type Props = { artists: IntakeArtist[] };

const waveNames = ["Я", "Сбой", "Отзвук"];

export function TrackIntakeBuilder({ artists }: Props) {
  const [artistSlug, setArtistSlug] = useState("severa-9");
  const [wave, setWave] = useState(1);
  const [title, setTitle] = useState("");
  const [duration, setDuration] = useState(0);
  const [bpm, setBpm] = useState(0);
  const [hook, setHook] = useState(0);
  const [tier, setTier] = useState("paid");
  const [humanContribution, setHumanContribution] = useState("");
  const [audioName, setAudioName] = useState("");
  const [lyricsName, setLyricsName] = useState("");
  const [copied, setCopied] = useState(false);

  const artist = artists.find((item) => item.slug === artistSlug) ?? artists[0];
  const slotId = `JS01_${artist.n}_W${wave}`;
  const manifest = useMemo(() => ({
    schemaVersion: 1,
    slotId,
    artistSlug: artist.slug,
    title: title || artist.arc[wave - 1],
    status: "demo",
    source: {
      generator: "Suno",
      accountTier: tier,
      createdAt: new Date().toISOString().slice(0, 10),
      sourceArchived: false,
    },
    audio: {
      originalFile: audioName,
      masterFile: `${slotId}_master.wav`,
      durationSeconds: duration,
      bpm,
      key: "",
      hookStartSeconds: hook,
      hookEndSeconds: 0,
    },
    editorial: {
      originalLyricsFile: lyricsName,
      lyricsFile: `${slotId}_lyrics.txt`,
      humanContribution,
      dramaticFunction: waveNames[wave - 1],
      explicit: false,
      notes: "",
    },
    rights: {
      commercialUseConfirmed: tier === "paid",
      realPersonImitationChecked: false,
      inputsOwnedOrLicensed: false,
    },
  }), [artist, audioName, bpm, duration, hook, humanContribution, lyricsName, slotId, tier, title, wave]);

  const json = JSON.stringify(manifest, null, 2);

  const download = () => {
    const url = URL.createObjectURL(new Blob([`${json}\n`], { type: "application/json" }));
    const anchor = document.createElement("a");
    anchor.href = url;
    anchor.download = `${slotId}.json`;
    anchor.click();
    URL.revokeObjectURL(url);
  };

  const copy = async () => {
    await navigator.clipboard.writeText(json);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1600);
  };

  return (
    <section className={styles.builder}>
      <div className={styles.sectionTitle}><span>MANIFEST BUILDER / LOCAL</span><h2>Собрать карточку песни</h2></div>
      <div className={styles.builderGrid}>
        <form className={styles.form} onSubmit={(event) => event.preventDefault()}>
          <label><span>Артист</span><select value={artistSlug} onChange={(event) => setArtistSlug(event.target.value)}>{artists.map((item) => <option key={item.slug} value={item.slug}>{item.n} · {item.name}</option>)}</select></label>
          <label><span>Волна</span><select value={wave} onChange={(event) => setWave(Number(event.target.value))}><option value={1}>W1 · Я</option><option value={2}>W2 · Сбой</option><option value={3}>W3 · Отзвук</option></select></label>
          <label className={styles.wide}><span>Финальное название</span><input value={title} onChange={(event) => setTitle(event.target.value)} placeholder={artist.arc[wave - 1]} /></label>
          <label><span>Длительность, сек</span><input type="number" min="0" value={duration || ""} onChange={(event) => setDuration(Number(event.target.value))} placeholder="184" /></label>
          <label><span>BPM</span><input type="number" min="0" value={bpm || ""} onChange={(event) => setBpm(Number(event.target.value))} placeholder="126" /></label>
          <label><span>Начало хука, сек</span><input type="number" min="0" value={hook || ""} onChange={(event) => setHook(Number(event.target.value))} placeholder="47" /></label>
          <label><span>Тариф генерации</span><select value={tier} onChange={(event) => setTier(event.target.value)}><option value="paid">Платный</option><option value="free">Бесплатный</option><option value="unknown">Нужно проверить</option></select></label>
          <label><span>WAV на компьютере</span><input type="file" accept=".wav,audio/wav" onChange={(event) => setAudioName(event.target.files?.[0]?.name ?? "")} /></label>
          <label><span>Текст песни</span><input type="file" accept=".txt,text/plain" onChange={(event) => setLyricsName(event.target.files?.[0]?.name ?? "")} /></label>
          <label className={styles.wide}><span>Что изменил или выбрал человек</span><textarea value={humanContribution} onChange={(event) => setHumanContribution(event.target.value)} placeholder="Например: переписан второй куплет, изменён финал, выбрана третья версия припева…" /></label>
        </form>

        <aside className={styles.manifest}>
          <header><div><span>ГОТОВАЯ КАРТОЧКА</span><strong>{slotId}</strong></div><i>{artist.mark}</i></header>
          <dl><div><dt>Герой</dt><dd>{artist.name}</dd></div><div><dt>Сцена</dt><dd>{artist.stage}</dd></div><div><dt>Функция</dt><dd>{waveNames[wave - 1]}</dd></div><div><dt>Рабочее имя</dt><dd>{manifest.title}</dd></div></dl>
          <pre>{json}</pre>
          <div className={styles.actions}><button type="button" onClick={download}>Скачать JSON</button><button type="button" onClick={copy}>{copied ? "Скопировано" : "Копировать"}</button></div>
        </aside>
      </div>
    </section>
  );
}
