import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0 20px;
    gap: 10px;
    min-height: 80vh;

    h2 {
        font-size: var(--fs-xl);
        font-weight: 400;
    }

    p {
        color: var(--gray-secondary-color);
    }
`;

export const Header = styled.header`
    width: 100%;
    display: flex;
    align-items: center;
    padding: 10px 0;
    justify-content: center;
`;