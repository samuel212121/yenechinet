"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

export type LanguageCode = "en" | "am" | "ti" | "om" | "so";

interface LanguageContextProps {
  currentLang: LanguageCode;
  setLanguage: (lang: LanguageCode) => void;
}

const LanguageContext = createContext<LanguageContextProps | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [currentLang, setCurrentLang] = useState<LanguageCode>("am");

  const setLanguage = (lang: LanguageCode) => {
    setCurrentLang(lang);
    localStorage.setItem("yene-chinet-lang", lang);
  };

  useEffect(() => {
    const savedLang = localStorage.getItem("yene-chinet-lang") as LanguageCode;
    if (savedLang) {
      setCurrentLang(savedLang);
    }
  }, []);

  return (
    <LanguageContext.Provider value={{ currentLang, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useTranslation() {
  const context = useContext(LanguageContext);
  if (!context) throw new Error("useTranslation must be used within a LanguageProvider");
  return context;
}