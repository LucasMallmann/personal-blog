import styled from 'styled-components';

export const Container = styled.div`
  h1 {
    font-size: 48px;
    font-weight: 500;
    text-align: center;
  }

  > p {
    font-size: 20px;
    font-weight: 600;
    font-style: italic;
    color: ${(props) => props.theme.colors.primary};
    text-align: center;
  }
`;
