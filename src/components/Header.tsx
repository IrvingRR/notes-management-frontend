"use client";

import { FC } from 'react';
import { BiMoon, BiSun } from "react-icons/bi";
import { Logo } from "@/common/Logo";
import { HeaderElement, ThemeButton } from "@/styled/components/header.styles"; 

/**
 * This is a header component which will content the logo and the the button to change the theme
 * @param { Function } handleThemeChange: this function allows to change th theme state value
 * @param {String} theme: This property allows us to get the theme value and show the correct icon in the button
 */

// Interface created to handle the props of the component
interface HeaderProps {
  handleThemeChange: () => void,
  theme: string
};

export const Header: FC<HeaderProps> = (props: HeaderProps) => {

  const { handleThemeChange, theme } = props;

  return (
    <HeaderElement>
        <Logo/>
        <ThemeButton onClick={handleThemeChange}>
            { theme === 'dark' ? <BiSun/> : <BiMoon/> }
        </ThemeButton>
    </HeaderElement>
  );
};