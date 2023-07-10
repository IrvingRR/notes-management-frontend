import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`

    /* Variables */

    :root {
        /* Colors */
        --primary-color: rgb(240, 98, 146);
        --primary-color-hover: rgb(230, 93, 139);
        --secondary-color: rgb(18, 136, 255);
        --secondary-color-hover: rgb(18, 103, 188);
        --gray-color: rgb(204, 204, 204);
        --white-color: rgb(255, 255, 255);
        --gray-secondary-color: rgb(72, 79, 89);

        /* Light */
        --background-primary-color-light: rgb(255, 255, 255);
        --background-secondary-color-light: rgb(249, 249, 249);
        --font-color-light: rgb(37, 46, 61);

        /* Dark */
        --background-primary-color-dark: rgb(59, 66, 74);
        --background-secondary-color-dark: rgb(53, 58, 64);
        --font-color-dark: rgb(255, 255, 255);

        /* Font */
        --fs-s: 12px;
        --fs-m: 14px;
        --fs-l: 20px;
        --fs-xl: 30px;
        --fs-xxl: 40px;

        /* Other variables */
        --transition: 0.3s ease;
        --initial-border: 1px solid transparent;
        --radius: 5px;
    }

    /* Reset styles */
    *,
    *::before,
    *::after {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        min-height: 100vh;
        font-size: var(--fs-m);
        background-color: ${props => props.theme.backgroundPrimaryColor};
        color: ${props => props.theme.fontColor}
    }

    button,
    input,
    textarea,
    select {
        border: var(--initial-border);
        outline: none;
        transition: var(--transition);
        border-radius: var(--radius);
    }

    button {
        cursor: pointer;
    }

    a {
        text-decoration: none;
        transition: var(--transition);
    }
`;