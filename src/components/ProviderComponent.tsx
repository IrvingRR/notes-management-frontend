"use client";

import React from 'react';
import { GlobalStyles } from "@/styled/globalStyles"
import { ThemeProvider } from 'styled-components';
import { themeDark, themeLight } from "@/styled/theme";

interface Props {children: React.ReactNode}

export const ProviderComponent = ({ children }: Props) => {
  return (
    <ThemeProvider theme={themeDark}>
        <GlobalStyles/>
        { children }
    </ThemeProvider>
  )
}
