"use client";

import { useState } from 'react';
import { GlobalStyles } from "@/styled/globalStyles"
import { ThemeProvider } from 'styled-components';
import { themeDark, themeLight } from "@/styled/theme";
import { Header } from './Header';
import { Toaster } from "react-hot-toast";

interface Props {children: React.ReactNode}

export const ProviderComponent = ({ children }: Props) => {

  const [theme, setTheme] = useState('dark');

  const handleThemeChange = () => {
    if(theme === 'dark') {
      setTheme('light');
    } else { 
      setTheme('dark')
    }
  }

  const toastOptions = {
    style: {
      backgroundColor: theme === 'dark' ? 'var(--background-secondary-color-dark)' : 'var(--background-secondary-color-light)',
      color: theme === 'dark' ? 'var(--font-color-dark)' : 'var(--font-color-light)'
    }
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
