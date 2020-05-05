import React from 'react';
import { Link } from 'gatsby';

import AvatarPic from '@/assets/me.jpeg';

import { Container, Avatar, Inner } from './styles';

const Header: React.FC = () => {
  return (
    <Container>
      <Inner>
        <Avatar>
          <img src={AvatarPic} alt="Lucas Mallmann" />
          <span>Lucas Mallmann</span>
        </Avatar>

        <nav>
          <Link to="/about">sobre</Link>
          <Link to="/about">blog</Link>
          <Link to="/about">projects</Link>
        </nav>
      </Inner>
    </Container>
  );
};

export default Header;
