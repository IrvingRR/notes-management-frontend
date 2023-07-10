"use client";

import styled, { css } from 'styled-components';

export const LoaderWrapper = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px;
    background-color: ${props => props.theme.backgroundPrimaryColor};
    position: fixed;
    top: 0;
    left: 0;
    z-index: 999;
`;

export const Spinner = styled.span`
    width: 40px;
    height: 40px;
    border-radius: 100%;
    border: 5px solid var(--gray-secondary-color);
    border-right-color: var(--primary-color);
    transition: var(--transition);
    animation: rotateSpinner 1s linear infinite;
`;