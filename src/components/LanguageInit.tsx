'use client'
import useLanguageStore from "@/stores/languageStore";
import { useEffect } from "react";

export default function LanguageInit() {
  const {init} = useLanguageStore();

  useEffect(() => {
    init();
  }, [init]);

  return null;
}