import React from 'react';
import { FaLinkedin, FaGithub, FaTwitter, FaInstagram } from 'react-icons/fa';

import { Container } from './styles';

const Footer: React.FC = () => {
  return (
    <Container>
      <FaLinkedin />
      <FaGithub />
      <FaTwitter />
      <FaInstagram />
    </Container>
  );
};

export default Footer;
