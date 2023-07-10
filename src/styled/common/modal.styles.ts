import styled, { css } from 'styled-components';

export const ModalWrapper = styled.div<{ show: boolean }>`
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
    transition: var(--transition);
    transform: translateX(-100%);
    opacity: 0;
    visibility: hidden;

    ${props => props.show && css`
        transform: translateX(0);
        opacity: 1;
        visibility: visible;
    `}
    
`;

export const ModalHeader = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    position: absolute;
    top: 0;
    left: 0;
    padding: 10px; 
`;

export const ModalButton = styled.button`
    width: 40px;
    height: 40px;
    border-radius: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: transparent;
    color: ${props => props.theme.fontColor};
    font-size: var(--fs-xl);
`;