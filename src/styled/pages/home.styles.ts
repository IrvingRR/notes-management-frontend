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

export const NotesContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    gap: 20px;
    padding: 20px 0;
`;