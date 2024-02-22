import styled from 'styled-components';

export const StyledHeader = styled.header`
    background-color: ${({ theme }) => theme.colors.primary};
    padding: 10px 0;
    border-bottom: 4px solid ${({ theme }) => theme.colors.secondary};

    h1 {
        color: #fff;
    }

`
