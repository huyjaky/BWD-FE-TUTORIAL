import { type } from "os";
import { ReactNode, createContext } from "react";

interface themeContextProps {
  children: ReactNode
}

interface themeContextDefault {
  theme: string
}

const themeContextDefaultData = {
  theme: 'white'
}

export const themeContext = createContext<themeContextDefault>(themeContextDefaultData);

const ThemeContextProvider = ({children}: themeContextProps) => {
  return <themeContext.Provider value={themeContextDefaultData}>
    {children}
  </themeContext.Provider>
}