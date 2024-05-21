import React, { createContext, useState, useContext } from 'react';

interface MenuContextProps {
  selectedMenu: string | null;
  setSelectedMenu: React.Dispatch<React.SetStateAction<string | null>>;
}

const MenuContext = createContext<MenuContextProps | undefined>(undefined);

export const MenuProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [selectedMenu, setSelectedMenu] = useState<string | null>(null);

  return (
    <MenuContext.Provider value={{ selectedMenu, setSelectedMenu }}>
      {children}
    </MenuContext.Provider>
  );
};

export const useMenu = () => {
  const context = useContext(MenuContext);
  if (!context) {
    throw new Error('useMenu must be used within a MenuProvider');
  }
  return context;
};
