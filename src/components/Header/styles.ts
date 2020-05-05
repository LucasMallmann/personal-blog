import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.header`
  height: 48px;
  position: fixed;
  top: 0;
  right: 0;
  width: 100vw;

  background-color: ${(props) => props.theme.colors.secondary};
`;

export const Inner = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  height: 100%;

  max-width: 950px;
  margin: 0 auto;

  nav {
    a {
      color: #f8f8f8;
      font-size: 16px;
      transition: color 0.2s;

      &:hover {
        color: ${darken(0.1, '#f8f8f8')};
      }

      &:not(:last-child) {
        margin-right: 12px;
      }
    }
  }
`;

export const Avatar = styled.div`
  display: flex;
  align-items: center;

  img {
    width: 38px;
    height: 38px;
    border-radius: 50%;
  }

  span {
    color: #f8f8f8;
    font-weight: 600;
    margin-left: 16px;
    font-size: 18px;
  }
`;
