import { createContext, Dispatch, SetStateAction } from 'react';

interface ThemeContextType {
  language: string;
  setLanguage: Dispatch<SetStateAction<string>>;
}

const ThemeContext = createContext<ThemeContextType | any>("Light");

export default ThemeContext;