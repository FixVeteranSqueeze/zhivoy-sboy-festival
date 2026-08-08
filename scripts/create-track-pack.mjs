import { existsSync, mkdirSync, writeFileSync } from "node:fs";
import { resolve } from "node:path";

const slotId = process.argv[2];
const title = process.argv.slice(3).join(" ") || "Название песни";

if (!/^JS01_(0[1-9]|1\d|20)_W[1-3]$/.test(slotId ?? "")) {
  console.error("Укажите слот в формате JS01_01_W1 — артист 01–20, волна 1–3.");
  process.exit(1);
}

const root = resolve("production", "festival-01");
const intakeDir = resolve(root, "intake");
const assetsDir = resolve(root, "assets", slotId);
const manifestPath = resolve(intakeDir, `${slotId}.json`);

mkdirSync(intakeDir, { recursive: true });
mkdirSync(assetsDir, { recursive: true });

if (existsSync(manifestPath)) {
  console.error(`Карточка ${slotId} уже существует. Файл не изменён.`);
  process.exit(1);
}

const artistNumber = slotId.slice(5, 7);
const wave = Number(slotId.at(-1));
const dramaticFunction = ["Я", "Сбой", "Отзвук"][wave - 1];

const manifest = {
  schemaVersion: 1,
  slotId,
  artistSlug: "",
  title,
  status: "demo",
  source: {
    generator: "Suno",
    accountTier: "paid",
    createdAt: new Date().toISOString().slice(0, 10),
    sourceArchived: false,
  },
  audio: {
    masterFile: `${slotId}_master.wav`,
    durationSeconds: 0,
    bpm: 0,
    key: "",
    hookStartSeconds: 0,
    hookEndSeconds: 0,
  },
  editorial: {
    lyricsFile: `${slotId}_lyrics.txt`,
    humanContribution: "",
    dramaticFunction,
    explicit: false,
    notes: `Артист №${artistNumber}`,
  },
  rights: {
    commercialUseConfirmed: false,
    realPersonImitationChecked: false,
    inputsOwnedOrLicensed: false,
  },
};

writeFileSync(manifestPath, `${JSON.stringify(manifest, null, 2)}\n`, "utf8");
console.log(`Создана карточка: ${manifestPath}`);
console.log(`Папка материалов: ${assetsDir}`);
