"use client";

import styled from 'styled-components';

export const HeaderElement = styled.header`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 10px;
    padding: 20px;
`;

export const ThemeButton = styled.button`
    width: 30px;
    height: 30px;
    border-radius: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: transparent;
    color: ${props => props.theme.fontColor};
    background-color: ${props => props.theme.backgroundSecondaryColor};
`;