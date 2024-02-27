import styled from 'styled-components';
import 'google-fonts';

export const StyledTitle = styled.h1`
    font-size: 2.5em;
    text-align: center;
    color: ${({ theme }) => theme.colors.third};
    margin: 1px 0 50px 0;
    
    padding: 10px;
    border-bottom : 4px solid ${({ theme }) => theme.colors.secondary};
    font-family:  '' , monospace;
    `;