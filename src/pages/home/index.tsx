/* eslint-disable jsx-a11y/accessible-emoji */
import React from 'react';

import PostCard from '@/components/PostCard';

import {
  Container,
  Profile,
  Introduction,
  SectionTitle,
  BlogSection,
} from './styles';

const Home: React.FC = () => {
  return (
    <Container>
      <Profile>
        <h1>Lucas Mallmann</h1>
        <p>Ajudando pessoas a se apaixonarem por códigos 🚀</p>
      </Profile>

      <Introduction>
        <SectionTitle>Quem sou eu?</SectionTitle>
        <p>
          Hey, welcome to my blog! My name is Tae’lur Alexis. I am an
          independent content creator and software developer based on the
          internet lol. I write code in JavaScript and Python. I dabble with Go
          for fun. I was born and raised in San Diego, California. If you’d like
          to read more about how I got into tech, check out my story on how I
          learned how to code and landed my first role. Hey, welcome to my blog!
          My name is Tae’lur Alexis. I am an independent content creator and
          software developer based on the internet lol. I write code in
          JavaScript and Python. I dabble with Go for fun. I was born and raised
          in San Diego, California. If you’d like to read more about how I got
          into tech, check out my story on how I learned how to code and landed
          my first role.
        </p>
      </Introduction>

      <BlogSection>
        <SectionTitle>Blogs recentes</SectionTitle>

        <PostCard />
        <PostCard />
        <PostCard />
      </BlogSection>
    </Container>
  );
};

export default Home;
