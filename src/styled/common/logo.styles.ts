import Link from 'next/link';
import styled from 'styled-components';

export const LogoElement = styled(Link)`
    color: ${props => props.theme.fontColor};
    font-size: var(--fs-l);
    font-weight: 700;
    letter-spacing: 1px;

    span {
        color: var(--primary-color);
    }
`;