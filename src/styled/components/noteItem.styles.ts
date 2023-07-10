import styled from 'styled-components';

export const NoteCard = styled.div`
    width: 100%;
    max-width: 300px;
    height: 200px;
    display: flex;
    flex-direction: column;
    gap: 10px;
    border-radius: var(--radius);
    background-color: ${props => props.theme.backgroundSecondaryColor};
    color: ${props => props.theme.fontColor};
    padding: 10px;
    transition: var(--transition);

    &:hover {
        transform: translateY(-3px);
        box-shadow: 0px 0px 5px -1px var(--gray-secondary-color);
        -webkit-box-shadow: 0px 0px 5px -1px var(--gray-secondary-color);
        -moz-box-shadow: 0px 0px 5px -1px var(--gray-secondary-color);
    }
`;

export const NoteCardHeader = styled.div`
    width: 100%;
    display: flex;
    gap: 5px;
    align-items: center;
    justify-content: space-between;

    svg {
        font-size: var(--fs-l);
        color: var(--primary-color);
    }
`;

export const NoteCardButton = styled.button`
    width: 25px;
    height: 25px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 100%;
    background-color: transparent;
    position: relative;
    
    svg {
        color: ${props => props.theme.fontColor};
    }
`;

export const NoteCardTitle = styled.div`
    width: 100%;
    display: flex;
    gap: 5px;
    flex-direction: column;
    align-items: center;

    span {
        font-size: var(--fs-xs);
        color: var(--gray-secondary-color);
    }
`;

export const NoteCardBody = styled.div`
    height: 100%;
    font-size: var(--fs-xs);
`;

export const NoteCardOptions = styled.ul`
    background-color: var(--gray-secondary-color);
    border-radius: var(--radius);
    transition: var(--transition);
    display: flex;
    flex-direction: column;
    position: absolute;
    overflow: hidden;
    top: 30px;
    right: 0;
    /* height: 0; */
`;

export const NoteCardOption = styled.li`
    width: 100%;
    padding: 10px 20px;
    display: flex;
    align-items: center;
    gap: 8px;
    color: var(--white-color);
    font-size: var(--fs-s);
    transition: var(--transition);

    &:hover {
        background-color: var(--gray-color);
    }
`;