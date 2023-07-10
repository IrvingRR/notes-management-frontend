"use client";

import { BiSun } from "react-icons/bi";
import { Logo } from "@/common/Logo";
import { HeaderElement, ThemeButton } from "@/styled/components/header.styles";

export const Header = () => {
  return (
    <HeaderElement>
        <Logo/>
        <ThemeButton>
            <BiSun/>
        </ThemeButton>
    </HeaderElement>
  );
};