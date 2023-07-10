import styled, {css} from 'styled-components';

export const ButtonElement = styled.button<{ variant?: string, isrounded?: boolean }>`
    padding: 8px 10px;
    display: inline-flex;
    align-items: center;
    gap: 3px;
    background-color: var(--primary-color);
    color: var(--white-color);
    letter-spacing: 1px;

    svg {
        font-size: var(--fs-m);
    }

    &:hover {
        background-color: var(--primary-color-hover);
    }

    &:active {
        background-color: var(--primary-color);
    }

    /* Variants 
    -----------------------------------------------*/

    /* Secondary */
    ${props => props.variant === 'secondary' && css`

        background-color: var(--secondary-color);

        &:hover {
            background-color: var(--secondary-color-hover);
        }

        &:active {
            background-color: var(--secondary-color);
        }
    `}

    /* Outline */
    ${props => props.variant === 'outline' && css`

        background-color: transparent;
        border-color: var(--primary-color);
        color: ${props => props.theme.fontColor};

        &:hover {
            background-color: var(--primary-color-hover);
        }

        &:active {
            background-color: var(--primary-color);
        }
    `}

    /* Outline Secondary */
    ${props => props.variant === 'secondary outline' && css`

        background-color: transparent;
        border-color: var(--secondary-color);
        color: ${props => props.theme.fontColor};

        &:hover {
            background-color: var(--secondary-color-hover);
        }

        &:active {
            background-color: var(--secondary-color);
        }
    `}

    /* Rounded */
    ${props => props.isrounded && css`
        border-radius: 80px;
    `}
`;