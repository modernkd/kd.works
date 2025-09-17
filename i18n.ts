export const locales = ["en", "sv"] as const;
export type Locale = (typeof locales)[number];

export const messages = {
  en: {
    hiText: "HI I AM KD",
    mainText: "LIFE IS TOO SHORT TO BE SERIOUS",
    familyTitle: "The Davis Family",
  },
  sv: {
    hiText: "HEJ JAG ÄR KD",
    mainText: "LIVET ÄR FÖR KORT FÖR ATT VARA ALLVARLIG",
    familyTitle: "Familjen Davis",
  },
} as const;
