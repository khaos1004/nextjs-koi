import { createContext, Dispatch, SetStateAction } from 'react';

interface Menuhover {
  menuName: string;
  setMenuName: Dispatch<SetStateAction<string>>;
}

const MenuContext = createContext<Menuhover | any>("");

export default MenuContext;