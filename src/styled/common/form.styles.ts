"use client";

import styled, {css} from 'styled-components';

export const Form = styled.form`
    width: 100%;
    max-width: 450px;
    border-radius: var(--radius);
    background-color: ${props => props.theme.backgroundSecondaryColor};
    padding: 20px;
    display: flex;
    flex-direction: column;
    gap: 10px;

    h2 {
        font-size: var(--fs-m);
    }
`;

export const Field = styled.div`
    width: 100%;
    max-width: 500px;
    display: flex;
    flex-direction: column;
    gap: 5px;
    transition: var(--transition);
`;

export const Label = styled.label`
    width: 100%;
    font-size: var(--fs-s);
`;

export const FieldContent = styled.div<{ variant?: string }>`
    width: 100%;
    display: flex;
    align-items: center;
    position: relative;
    transition: var(--transition);

    ${props => props.variant === 'icon' && css`

        svg {
            position: absolute;
            left: 15px;
        }
    `}
`;

export const InputElement = styled.input<{ variant?: string, isrounded?: boolean }>`
    width: 100%;
    height: 35px;
    max-width: 500px;
    padding: 10px 20px;
    background-color: ${props => props.theme.backgroundSecondaryColor};
    color: ${props => props.theme.fontColor};
    font-size: var(--fs-s);
    transition: var(--transition);

    &:focus {
        background-color: transparent;
        border-color: var(--primary-color);

        & ~ svg {
            color: var(--primary-color);
        }
    }

    /* Variants 
    ---------------------------------*/

    /* Icons */
    ${props => props.variant === 'icon' && css`
        padding-left: 40px;
    `}

    /* Rounded */
    ${props => props.isrounded && css`
        border-radius: 80px;
    `}

    /* Secondary */
    ${props => props.variant === 'secondary' && css`
        background-color: ${props.theme.backgroundPrimaryColor};
    `}

`;

export const Legend = styled.div<{ isvalid?: string | null }>`
    width: 100%;
    display: flex;
    align-items: center;
    gap: 5px;
    font-size: var(--fs-xs);
    transition: var(--transition);
    height: 0;
    overflow: hidden;
    color: var(--primary-color);
    
    ${ props => props.isvalid === 'false' && css`
        height: auto;
    ` }
`;

export const TextAreaElement = styled.textarea<{ isrounded?: boolean, variant?: string }>`
    width: 100%;
    padding: 10px 20px;
    background-color: ${props => props.theme.backgroundSecondaryColor};
    color: ${props => props.theme.fontColor};
    resize: none;
    font-size: var(--fs-s);

    &:focus {
        background-color: transparent;
        border-color: var(--primary-color);
    }

    /* Variants 
    ---------------------------------------*/

    /* Rounded */
    ${props => props.isrounded && css`
        border-radius: 80px;
    `}

    /* Secondary */
    /* Secondary */
    ${props => props.variant === 'secondary' && css`
        background-color: ${props.theme.backgroundPrimaryColor};
    `}
`;

export const FormActtions = styled.div`
    display: flex;
    align-items: center;
    gap: 8px;
`;