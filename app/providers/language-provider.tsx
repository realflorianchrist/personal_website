"use client";
import React, { createContext, useState, useContext, useMemo } from "react";
import de from "../../i18n/de";
import en from "../../i18n/en";
import { I18nType } from "@/i18n/I18nType";

interface LanguageContextType {
  i18n: I18nType;
  changeLanguage: (lang: string) => void;
}

const initialLanguageContext: LanguageContextType = {
  i18n: en,
  changeLanguage: () => {
  }
};

const LanguageContext = createContext<LanguageContextType>(initialLanguageContext);

export function useLanguageContext(): LanguageContextType;
export function useLanguageContext<T extends keyof I18nType>(namespace: T): I18nType[T];
export function useLanguageContext(namespace?: keyof I18nType) {
  const context = useContext(LanguageContext);

  if (!context) {
    throw new Error("useLanguageContext must be used within LanguageProvider");
  }

  if (namespace) {
    return context.i18n[namespace];
  }

  return context;
}


export const LanguageProvider = (
  {
    children
  }: {
    children: React.ReactNode
  }) => {

  const [i18n, setI18n] = useState(en);

  const changeLanguage = (lang: string) => {
    switch (lang) {
      case "de":
        setI18n(de);
        break;
      case "en":
        setI18n(en);
        break;
      default:
        setI18n(en);
    }
  };

  const contextValue = useMemo(() => (
    { i18n, changeLanguage }), [i18n]);

  return (
    <LanguageContext.Provider value={contextValue}>
      {children}
    </LanguageContext.Provider>
  );
};
