"use client";

import React, { createContext, useState, useEffect, ReactNode } from "react";

interface LanguageContextType {
  language: "KO" | "EN";
  setLanguage: (lang: "KO" | "EN") => void;
}

const LanguageContext = createContext<LanguageContextType>({
  language: "KO",
  setLanguage: () => {},
});

interface LanguageProviderProps {
  children: ReactNode;
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  const [language, setLanguage] = useState<"KO" | "EN">("KO");

  useEffect(() => {
    const storedLanguage = localStorage.getItem("language") as "KO" | "EN" | null;
    if (storedLanguage) {
      setLanguage(storedLanguage);
    }
  }, []);

  const changeLanguage = (lang: "KO" | "EN") => {
    setLanguage(lang);
    localStorage.setItem("language", lang);
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage: changeLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export default LanguageContext;
