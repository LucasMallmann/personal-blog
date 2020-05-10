import React from 'react';

import PostCard from '@/components/PostCard';

import { Container } from './styles';

const PreviewBlog: React.FC = () => (
  <Container>
    <h1>Blogs recentes</h1>

    <PostCard />
    <PostCard />
    <PostCard />
  </Container>
);

export default PreviewBlog;
