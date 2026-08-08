import { existsSync, readFileSync, readdirSync } from "node:fs";
import { resolve } from "node:path";

const root = resolve("production", "festival-01");
const intakeDir = resolve(root, "intake");
const assetsRoot = resolve(root, "assets");
const manifests = existsSync(intakeDir)
  ? readdirSync(intakeDir).filter((name) => name.endsWith(".json"))
  : [];

const errors = [];
const warnings = [];

for (const file of manifests) {
  const filePath = resolve(intakeDir, file);
  let item;
  try {
    item = JSON.parse(readFileSync(filePath, "utf8"));
  } catch (error) {
    errors.push(`${file}: некорректный JSON (${error.message})`);
    continue;
  }

  const expectedId = file.replace(/\.json$/, "");
  if (item.slotId !== expectedId) errors.push(`${file}: slotId не совпадает с именем файла`);
  if (!/^JS01_(0[1-9]|1\d|20)_W[1-3]$/.test(item.slotId ?? "")) errors.push(`${file}: неверный slotId`);
  if (!item.title?.trim()) errors.push(`${file}: отсутствует название`);
  if (!item.artistSlug?.trim()) warnings.push(`${file}: не назначен artistSlug`);
  if (!item.editorial?.humanContribution?.trim()) warnings.push(`${file}: не описан человеческий вклад`);
  if (!item.rights?.commercialUseConfirmed) warnings.push(`${file}: коммерческие права ещё не подтверждены`);

  const assetDir = resolve(assetsRoot, item.slotId ?? expectedId);
  const master = resolve(assetDir, item.audio?.masterFile ?? "");
  const lyrics = resolve(assetDir, item.editorial?.lyricsFile ?? "");
  if (!existsSync(master)) warnings.push(`${file}: мастер WAV пока не найден`);
  if (!existsSync(lyrics)) warnings.push(`${file}: текст песни пока не найден`);
}

console.log(`Живой Сбой #01: заполнено ${manifests.length}/60 карточек.`);
if (warnings.length) {
  console.log("\nОжидает внимания:");
  for (const warning of warnings) console.log(`- ${warning}`);
}
if (errors.length) {
  console.error("\nОшибки:");
  for (const error of errors) console.error(`- ${error}`);
  process.exit(1);
}

console.log("\nСтруктура корректна. Можно продолжать производство.");
