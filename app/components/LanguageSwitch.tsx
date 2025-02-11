"use client";
import { useLanguageContext } from "@/app/providers/language-provider";

export default function LanguageSwitch() {
  const { selectedLanguage, changeLanguage } = useLanguageContext();

  return (
    <div className={"fixed right-10 bottom-8 space-x-4 z-10"}>
      <button
        className={selectedLanguage === "de" ? "text-white" : "text-slate-500"}
        onClick={() => changeLanguage("de")}
      >
        de
      </button>
      <button
        className={selectedLanguage === "en" ? "text-white" : "text-slate-500"}
        onClick={() => changeLanguage("en")}
      >
        en
      </button>
    </div>
  );
}