import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
body {
  padding: 0;
  color: black;
  font-family: 'Inter', -apple-system, sans-serif;
  font-weight: 500;
  font-size: 14px;
  letter-spacing: 0.04em;
  line-height: 1.21;
  width: 100vw;
  min-height: 100vh;
  background:#FBFBFB;
  }`;

export const GlobalStylesHome = createGlobalStyle`
body {
  padding: 0;
  color: black;
  font-family: 'Inter', -apple-system, sans-serif;
  font-weight: 500;
  font-size: 14px;
  letter-spacing: 0.04em;
  line-height: 1.21;
  width: 100vw;
  min-height: 100vh;
  background:${({ theme }) => theme.colors.backgroundMain};
  }`;
