import React from 'react';
import { FaTag } from 'react-icons/fa';

import { Container, Content, ImageContainer } from './styles';

const PostCard: React.FC = () => {
  return (
    <Container>
      <Content>
        <h2>Como construir uma PWA utilizando NextJS e uma PWA</h2>
        <p>
          I set out to create the first line of all-natural, deeply flavorful
          Chinese condiments. Getting there was harder than I anticipated.
        </p>

        <div>
          <FaTag color="#424242" size={14} />
          <span>lifestyle, reactjs, frontend</span>
        </div>

        <small>27 Mar, 2020 - 5 min de leitura</small>
      </Content>

      <ImageContainer>
        <img
          src="https://images.unsplash.com/photo-1517148815978-75f6acaaf32c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80"
          alt="Post cover"
        />
      </ImageContainer>
    </Container>
  );
};

export default PostCard;
