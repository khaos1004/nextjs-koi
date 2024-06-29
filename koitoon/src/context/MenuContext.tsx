// src/context/MenuContext.tsx

"use client";

import React, { createContext, useState, ReactNode, useContext } from "react";

interface MenuContextProps {
  selectedMenu: string | null;
  setSelectedMenu: (menu: string | null) => void;
}

const MenuContext = createContext<MenuContextProps | undefined>(undefined);

export const MenuProvider = ({ children }: { children: ReactNode }) => {
  const [selectedMenu, setSelectedMenu] = useState<string | null>(null);

  return (
    <MenuContext.Provider value={{ selectedMenu, setSelectedMenu }}>
      {children}
    </MenuContext.Provider>
  );
};

export const useMenu = () => {
  const context = useContext(MenuContext);
  if (context === undefined) {
    throw new Error("useMenu must be used within a MenuProvider");
  }
  return context;
};

export default MenuContext;
