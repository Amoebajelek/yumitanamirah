"use client";

import { createContext, useContext, useEffect, useState } from "react";

export type Locale = "id" | "en";

const LanguageContext = createContext<{
  locale: Locale;
  toggleLocale: () => void;
}>({
  locale: "id",
  toggleLocale: () => {},
});

export function useLanguage() {
  return useContext(LanguageContext);
}

export default function LanguageProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [locale, setLocale] = useState<Locale>("id");

  useEffect(() => {
    const saved = localStorage.getItem("locale") as Locale | null;
    const nextLocale = saved ?? "id";

    queueMicrotask(() => {
      setLocale(nextLocale);
      document.documentElement.setAttribute("lang", nextLocale);
    });
  }, []);

  const toggleLocale = () => {
    const nextLocale = locale === "id" ? "en" : "id";

    setLocale(nextLocale);
    document.documentElement.setAttribute("lang", nextLocale);
    localStorage.setItem("locale", nextLocale);
  };

  return (
    <LanguageContext.Provider value={{ locale, toggleLocale }}>
      {children}
    </LanguageContext.Provider>
  );
}
