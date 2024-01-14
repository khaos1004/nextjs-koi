// context/LanguageContext.ts
import { createContext, Dispatch, SetStateAction } from 'react';

interface LanguageContextType {
  language: string;
  setLanguage: Dispatch<SetStateAction<string>>;
}

const LanguageContext = createContext<LanguageContextType | any>("KO");

export default LanguageContext;