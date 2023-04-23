import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${({ theme }) => theme.bodyBackgroundColor};
    color: ${({ theme }) => theme.bodyTextColor}; color: ${({ theme }) => theme.color};
  }
`;
