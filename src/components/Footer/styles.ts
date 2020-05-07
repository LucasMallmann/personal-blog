import styled from 'styled-components';
import { lighten } from 'polished';

export const Container = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100vw;
  border-top: 1px solid #ddd;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;

  background-color: ${lighten(0.02, '#eee')};

  a {
    color: #333;
    margin: 0 8px;
    display: flex;
    transition: color 0.3s;

    &:hover {
      color: ${lighten(0.2, '#333')};
    }
  }
`;
