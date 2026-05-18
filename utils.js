export function normalizeText(text) {
  return String(text)
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");
}

export function getHistoricalDateOrder(dateText) {
  const text = normalizeText(String(dateText || "").replace(",", "."));
  const number = Number((text.match(/\d+(?:\.\d+)?/) || [0])[0]);
  if (!Number.isFinite(number)) return 0;
  if (text.includes("ma")) return -number * 1000000;
  if (text.includes("mil") && text.includes("a.c")) return -number * 1000;
  if (text.includes("a.c")) return -number;
  return number;
}

export function escapeHtml(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

export function createPreview(text, limit = 142) {
  if (!text || text.length <= limit) return text;
  const clipped = text.slice(0, limit);
  const lastSpace = clipped.lastIndexOf(" ");
  return `${clipped.slice(0, lastSpace > 80 ? lastSpace : limit).trim()}...`;
}

export function pickFrom(list, seed, fallback = "") {
  if (!list?.length) return fallback;
  const index = Math.abs(seed) % list.length;
  return list[index];
}

export function questionSeed(question) {
  return [...normalizeText(question)].reduce((sum, char) => sum + char.charCodeAt(0), 0);
}
