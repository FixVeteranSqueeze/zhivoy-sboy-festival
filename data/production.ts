import { artists } from "./universe";

export type WaveNumber = 1 | 2 | 3;

export type FestivalSlot = {
  id: string;
  artistSlug: string;
  artistName: string;
  artistMark: string;
  stage: string;
  wave: WaveNumber;
  waveName: "Я" | "Сбой" | "Отзвук";
  workingTitle: string;
  dramaticFunction: string;
  status: "ожидается";
};

const waveNames = ["Я", "Сбой", "Отзвук"] as const;
const dramaticFunctions = [
  "Публичный образ и обещание",
  "Поломка, риск или столкновение",
  "Выбор, поступок и новое состояние",
] as const;

export const festival01Slots: FestivalSlot[] = artists.flatMap((artist) =>
  artist.arc.map((workingTitle, index) => ({
    id: `JS01_${artist.n}_W${index + 1}`,
    artistSlug: artist.slug,
    artistName: artist.name,
    artistMark: artist.mark,
    stage: artist.stage,
    wave: (index + 1) as WaveNumber,
    waveName: waveNames[index],
    workingTitle,
    dramaticFunction: dramaticFunctions[index],
    status: "ожидается" as const,
  })),
);

export const pilotBriefs = [
  {
    slotId: "JS01_01_W1",
    artist: "СЕВЕРА-9",
    tier: "A",
    label: "Флагман",
    task: "Проверить масштаб, драму, кинематографический свет и философскую интонацию.",
    accent: "#d9f3ff",
  },
  {
    slotId: "JS01_06_W1",
    artist: "Лёля Лазер",
    tier: "B",
    label: "Энергия",
    task: "Проверить клубную сцену, темп монтажа, липсинг и вирусный припев.",
    accent: "#c8ff35",
  },
  {
    slotId: "JS01_12_W1",
    artist: "Капитан Кисель",
    tier: "C",
    label: "Абсурд",
    task: "Проверить персонажный юмор, графический номер и дешёвую масштабируемую анимацию.",
    accent: "#ff9bc7",
  },
] as const;

export const intakeRequirements = [
  "WAV или лучший доступный мастер без обрезанного начала и конца",
  "Финальный текст песни в UTF-8",
  "Имя артиста и назначение: Я, Сбой или Отзвук",
  "Примерная длительность, BPM и момент главного хука",
  "Дата генерации, тариф сервиса и подтверждение коммерческого использования",
  "Короткая авторская заметка: что человек изменил или выбрал в результате",
] as const;
