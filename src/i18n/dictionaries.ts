import type { Locale } from './config';

const dictionaries = {
  en: () => import('./en').then((module) => module.dictionary),
  es: () => import('./es').then((module) => module.dictionary),
};

export const getDictionary = async (locale: Locale) => {
  return dictionaries[locale]();
};

export type Dictionary = Awaited<ReturnType<typeof getDictionary>>;
