import styled from "styled-components";

export const StyledButton = styled.button`
  a {
    position: relative;
    display: inline-block;
    padding: 10px 15px;
    border: 2px solid #fefefe;
    text-transform: uppercase;
    color: #fefefe;
    text-decoration: none;
    font-weight: 600;
    font-size: 15px;
  }

  a::before {
    content: "";
    position: absolute;
    top: 6px;
    left: -2px;
    width: calc(100% + 4px);
    height: calc(100% - 12px);
    background-color: ${({ theme }) => theme.colors.primary};
    transition: 0.2s ease-in-out;
    transform: scaleY(1);
  }

  a:hover::before {
    transform: scaleY(0);
  }

  a::after {
    content: "";
    position: absolute;
    left: 6px;
    top: -2px;
    height: calc(100% + 4px);
    width: calc(100% - 12px);
    background-color: ${({ theme }) => theme.colors.primary};
    transition: 0.2s ease-in-out;
    transform: scaleX(1);
    transition-delay: 0.5s;
  }

  a:hover::after {
    transform: scaleX(0);
  }

  a span {
    position: relative;
    z-index: 3;
  }

  text-decoration: none;
  background-color: ${({ theme }) => theme.colors.primary};
  border: none;
`;
