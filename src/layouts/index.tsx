import React from 'react';
import styled, { ThemeProvider } from 'styled-components';

import GlobalStyles from '@/styles/global';

import theme from '@/styles/themes/default';

const Wrapper = styled.div``;

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <GlobalStyles />
      <h1>some shit</h1>
      <Wrapper>
        <ThemeProvider theme={theme}>{children}</ThemeProvider>
      </Wrapper>
    </>
  );
};

export default Layout;
