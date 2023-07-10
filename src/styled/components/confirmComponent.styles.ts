import styled, { css } from 'styled-components';

export const ConfirmComponentWrapper = styled.div<{ show: boolean }>`
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
    z-index: 9999;
    transition: var(--transition);
    opacity: 0;
    visibility: hidden;

    ${props => props.show && css`
        opacity: 1;
        visibility: visible;
    `}
    
`;

export const CardConfirm = styled.div`
    width: 100%;
    max-width: 500px;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
    border-radius: var(--radius);
    gap: 10px;
    background-color: ${props => props.theme.backgroundSecondaryColor};
    color: ${props => props.theme.fontColor};
`;

export const CardConfirmOptions = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
`;