import { type } from "os";
import { ReactNode, createContext, useState } from "react";

interface themeContextProps {
  children: ReactNode
}

interface themeContextDefault {
  theme: string,
  toggleTheme: (theme: string) => void
}

const themeContextDefaultData = {
  theme: 'bg-slate-500',
  toggleTheme: () => {}
}

export const themeContext = createContext<themeContextDefault>(themeContextDefaultData);

const ThemeContextProvider = ({children}: themeContextProps) => {
  const [theme, setTheme] = useState(themeContextDefaultData.theme);

  const toggleTheme = (theme:string) => setTheme(theme);

  const themeContextDynamicData = {theme, toggleTheme};

  return <themeContext.Provider value={themeContextDynamicData}>
    {children}
  </themeContext.Provider>
}

export default ThemeContextProvider;