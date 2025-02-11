"use client";
import React, { createContext, useState, useContext, useMemo, useEffect } from "react";
import en from "../../i18n/en";
import { I18nType } from "@/i18n/I18nType";

const defaultLanguage = "de";

interface LanguageContextType {
  i18n: I18nType | null;
  changeLanguage: (lang: string) => void;
  selectedLanguage: string | null;
}

const initialLanguageContext: LanguageContextType = {
  i18n: null,
  changeLanguage: () => {},
  selectedLanguage: null
};

const LanguageContext = createContext<LanguageContextType>(initialLanguageContext);

export function useLanguageContext(): LanguageContextType;
export function useLanguageContext<T extends keyof I18nType>(namespace: T): I18nType[T];
export function useLanguageContext(namespace?: keyof I18nType) {
  const context = useContext(LanguageContext);

  if (!context) {
    throw new Error("useLanguageContext must be used within LanguageProvider");
  }

  if (namespace && context.i18n) {
    return context.i18n[namespace];
  }

  return context;
}

const getI18n = async (language: string | null): Promise<I18nType> => {
  if (!language) return (await import((`../../i18n/${defaultLanguage}`))).default;
  try {
    return (await import((`../../i18n/${language}`))).default;
  } catch (error) {
    return (await import((`../../i18n/${defaultLanguage}`))).default;
  }
};

const getStoredLanguage = () => {
  let storedLanguage = localStorage.getItem("language");
  if (storedLanguage) storedLanguage = JSON.parse(storedLanguage);
  return storedLanguage;
};

export const LanguageProvider = (
  {
    children
  }: {
    children: React.ReactNode
  }) => {

  const [i18n, setI18n] = useState<I18nType | null>(null);
  const [selectedLanguage, setSelectedLanguage] = useState<string | null>(null);


  useEffect(() => {
    const initializeLanguage = async () => {
      const storedLanguage = getStoredLanguage();
      if (storedLanguage) {
        document.documentElement.lang = storedLanguage;
        setSelectedLanguage(storedLanguage);
      } else {
        setSelectedLanguage(defaultLanguage);
      }
      setI18n(await getI18n(storedLanguage));
    };

    initializeLanguage();
  }, []);

  useEffect(() => {
    if (selectedLanguage) document.documentElement.lang = selectedLanguage;
  }, [selectedLanguage]);

  const changeLanguage = async (language: string) => {
    setI18n(await getI18n(language));
    localStorage.setItem('language', JSON.stringify(language));
    setSelectedLanguage(language);
  };

  const contextValue = useMemo(() => (
    { i18n, changeLanguage, selectedLanguage, }), [i18n, selectedLanguage]);

  return (
    <LanguageContext.Provider value={contextValue}>
      {children}
    </LanguageContext.Provider>
  );
};
