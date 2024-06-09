import { useEffect, useContext, useState } from 'react';
import LanguageContext from '@/context/Language';

const useFont = () => {
  const { language } = useContext(LanguageContext);
  const [font, setFont] = useState<'pretendard' | 'tommy'>('pretendard');

  useEffect(() => {
    const storedLanguage = localStorage.getItem('language');
    if (storedLanguage === 'EN' || language === 'EN') {
      setFont('tommy');
    } else {
      setFont('pretendard');
    }
  }, [language]);

  useEffect(() => {
    if (font === 'tommy') {
      document.documentElement.classList.add('font-tommy');
      document.documentElement.classList.remove('font-pretendard');
    } else {
      document.documentElement.classList.add('font-pretendard');
      document.documentElement.classList.remove('font-tommy');
    }
  }, [font]);

  return font;
};

export default useFont;
