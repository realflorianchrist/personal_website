import { I18nType } from "@/i18n/I18nType";
import { create } from "zustand/react";
import de from "../i18n/de";

const defaultLanguage = "de";
const languageKey = "language:v1";

type LanguageState = {
  i18n: I18nType;
  selectedLanguage: string;
  init: () => void;
  changeLanguage: (lang: string) => void;
}

const getI18n = async (language: string | null): Promise<I18nType> => {
  if (!language) return (await import((`../i18n/${defaultLanguage}`))).default;
  try {
    return (await import((`../i18n/${language}`))).default;
  } catch {
    return (await import((`../i18n/${defaultLanguage}`))).default;
  }
};

const getStoredLanguage = () => {
  let storedLanguage = localStorage.getItem(languageKey);
  if (storedLanguage) storedLanguage = JSON.parse(storedLanguage);
  return storedLanguage;
};

const useLanguageStore = create<LanguageState>((set, get) => ({
  i18n: de,
  selectedLanguage: defaultLanguage,

  init: async () => {
    const stored = getStoredLanguage();
    const lang = stored ?? defaultLanguage;

    if (get().selectedLanguage !== lang) {
      set({ selectedLanguage: lang });
    }

    document.documentElement.lang = lang;

    if (lang !== defaultLanguage) {
      set({ i18n: await getI18n(lang) });
    }
  },

  changeLanguage: async (language: string) => {
    set({ i18n: await getI18n(language) });
    localStorage.setItem(languageKey, JSON.stringify(language));
    document.documentElement.lang = language;
    set({ selectedLanguage: language });
  }

}));

export default useLanguageStore;