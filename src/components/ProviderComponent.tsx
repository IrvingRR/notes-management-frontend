"use client";

import { useState, useEffect } from 'react';
import { GlobalStyles } from "@/styled/globalStyles"
import { ThemeProvider } from 'styled-components';
import { themeDark, themeLight } from "@/styled/theme";
import { Header } from './Header';
import { Toaster } from "react-hot-toast";

/**
 * This component is responsible for wrapper all the component to apply specific information like theme, global styles and can use a context
 * @param {React.Node | React.Node[]} childreh: Are all children component which are will pass all values
*/

// Interface create to handle the props of the component
interface Props {children: React.ReactNode}

export const ProviderComponent = ({ children }: Props) => {

  const initialState = localStorage.getItem('theme') || 'light';

  const [theme, setTheme] = useState(initialState);

  // This function is responsible for change the theme value
  const handleThemeChange = () => {
    if(theme === 'dark') {
      setTheme('light');
    } else { 
      setTheme('dark');
    }
    
  }

  useEffect(() => {
    localStorage.setItem('theme', theme);
  }, [theme]);
  localStorage.setItem('theme', theme);

  const toastOptions = {
    style: {
      backgroundColor: theme === 'dark' ? 'var(--background-secondary-color-dark)' : 'var(--background-secondary-color-light)',
      color: theme === 'dark' ? 'var(--font-color-dark)' : 'var(--font-color-light)'
    },
    duration: 2000,
  }

  return (
    <ThemeProvider theme={theme === 'dark' ? themeDark : themeLight}>
        <GlobalStyles/>
          <Toaster toastOptions={toastOptions}/>
          <Header handleThemeChange={handleThemeChange} theme={theme}/>
          { children }
    </ThemeProvider>
  )
}
