import React from 'react';
import { FaLinkedin, FaGithub, FaTwitter, FaInstagram } from 'react-icons/fa';

import { Container } from './styles';

const Footer: React.FC = () => {
  return (
    <Container>
      <a href="https://www.linkedin.com/in/lucas-mallmann-372745148/">
        <FaLinkedin size={24} />
      </a>
      <a href="https://github.com/lucasmallmann">
        <FaGithub size={24} />
      </a>
      <a href="https://twitter.com/lucasmallmann76">
        <FaTwitter size={24} />
      </a>
      <a href="https://instagram.com/lucas.mallmann23">
        <FaInstagram size={24} />
      </a>
    </Container>
  );
};

export default Footer;
