/* eslint-disable jsx-a11y/accessible-emoji */
import React from 'react';
import styled from 'styled-components';

import Author from '@/components/Author';
import Introduction from '@/components/Introduction';
import PreviewBlog from '@/components/PreviewBlog';

const Container = styled.div`
  padding-top: 24px;
`;

const Home: React.FC = () => {
  return (
    <Container>
      <Author />

      <Introduction />

      <PreviewBlog />
    </Container>
  );
};

export default Home;
