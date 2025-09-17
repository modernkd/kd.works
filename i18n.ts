export const locales = ["en", "sv"] as const;
export type Locale = (typeof locales)[number];

export const messages = {
  en: {
    mainText: "LIFE IS TOO SHORT TO BE SERIOUS",
    hiText: "HI I AM KD"
  },
  sv: {
    mainText: "LIVET ÄR FÖR KORT FÖR ATT VARA ALLVARLIG",
    hiText: "HEJ JAG ÄR KD"
  },
} as const;
