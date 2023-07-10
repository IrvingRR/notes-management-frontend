import styled, {css} from 'styled-components';

export const Field = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 5px;
    transition: var(--transition);
`;

export const FieldContent = styled.div<{ variant?: string }>`
    width: 100%;
    display: flex;
    align-items: center;
    position: relative;

    ${props => props.variant === 'icon' && css`

        svg {
            position: absolute;
            left: 15px;
        }
    `}
`;

export const InputElement = styled.input<{ variant?: string }>`
    width: 100%;
    height: 40px;
    max-width: 500px;
    padding: 10px 20px;
    background-color: ${props => props.theme.backgroundSecondaryColor};
    color: ${props => props.theme.fontColor};

    &:focus {
        background-color: transparent;
        border-color: var(--primary-color);

        & ~ svg {
            color: var(--primary-color);
        }
    }

    ${props => props.variant === 'icon' && css`
        padding-left: 40px;
    `}
`;

export const Legend = styled.p<{ isvalid?: boolean }>`
    width: 100%;
    color: var(--primary-color);
    display: flex;
    align-items: center;
    gap: 5px;
    font-size: var(--fs-xs);
    transition: var(--transition);
    height: 0;
    overflow: hidden;
    
    ${ props => props.isvalid === false && css`
        height: auto;
    ` }
`;