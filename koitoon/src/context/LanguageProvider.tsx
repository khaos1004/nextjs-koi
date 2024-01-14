const LanguageProvider = ({ children }: LanguageProviderProps) => {
    const [language, setLanguage] = useState<string>('KOR');
  
    return (
      <LanguageContext.Provider value={{ language, setLanguage }}>
        {children}
      </LanguageContext.Provider>
    );
  };