import { existsSync, readFileSync, readdirSync } from "node:fs";
import { resolve } from "node:path";

const modulesDir = resolve("content", "festival-01", "modules");
const files = existsSync(modulesDir) ? readdirSync(modulesDir).filter((file) => file.endsWith(".json")) : [];
const errors = [];
const warnings = [];
const validKinds = new Set(["pre-signal", "cold-open", "host-bridge", "support-desk", "character-clash", "fact-lens", "fictional-ad", "micro-comic", "quiet-room", "warm-glitch", "audience-choice", "human-window", "energy-reset", "kindness-action", "collective-overtone"]);
const validPillars = new Set(["philosophy", "humor", "kindness", "intellect", "energy", "originality", "motivation"]);

for (const file of files) {
  let item;
  try {
    item = JSON.parse(readFileSync(resolve(modulesDir, file), "utf8"));
  } catch (error) {
    errors.push(`${file}: некорректный JSON (${error.message})`);
    continue;
  }

  if (item.schemaVersion !== 1) errors.push(`${file}: schemaVersion должен быть 1`);
  if (!/^JS01-M\d{3}$/.test(item.moduleId ?? "")) errors.push(`${file}: неверный moduleId`);
  if (!validKinds.has(item.kind)) errors.push(`${file}: неизвестный тип модуля`);
  if (!Number.isInteger(item.durationSeconds) || item.durationSeconds < 5 || item.durationSeconds > 480) errors.push(`${file}: длительность должна быть 5–480 секунд`);
  if (!Array.isArray(item.pillars) || !item.pillars.length || item.pillars.some((pillar) => !validPillars.has(pillar))) errors.push(`${file}: неверные смысловые опоры`);
  if (!item.content?.premise || !item.content?.payoff) errors.push(`${file}: нужны premise и payoff`);
  if (!item.editorial?.whyOnlyHere) errors.push(`${file}: не объяснено, почему модуль возможен только в этой вселенной`);
  if (item.pillars?.includes("intellect") && !item.factCheck?.length) warnings.push(`${file}: интеллектуальный модуль не содержит очереди фактчекинга`);
  if (item.pillars?.includes("kindness") && !item.editorial?.kindnessCost) warnings.push(`${file}: добрый поступок пока не имеет цены`);
}

console.log(`SHOW OS: найдено ${files.length} контентных модулей фестиваля №1.`);
if (warnings.length) {
  console.log("\nРедакторские предупреждения:");
  for (const warning of warnings) console.log(`- ${warning}`);
}
if (errors.length) {
  console.error("\nОшибки:");
  for (const error of errors) console.error(`- ${error}`);
  process.exit(1);
}
console.log("\nФормат контента корректен.");
