"use client";

import { FC } from 'react';
import { BiMoon, BiSun } from "react-icons/bi";
import { Logo } from "@/common/Logo";
import { HeaderElement, ThemeButton } from "@/styled/components/header.styles";

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