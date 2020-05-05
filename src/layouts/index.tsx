import React from 'react';
import styled, { ThemeProvider } from 'styled-components';

import GlobalStyles from '@/styles/global';

import theme from '@/styles/themes/default';

import Header from '@/components/Header';
import Footer from '@/components/Footer';

import { Content } from './styles';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Content>{children}</Content>
      <Header />
      <Footer />
    </ThemeProvider>
  );
};

export default Layout;
