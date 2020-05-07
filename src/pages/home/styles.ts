import styled from 'styled-components';

export const Container = styled.div`
  padding-top: 24px;
`;

export const Profile = styled.div`
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

export const Introduction = styled.div`
  margin-top: 48px;
  display: flex;
  flex-direction: column;

  p {
    margin-top: 16px;
    line-height: 26px;
  }
`;

export const SectionTitle = styled.h1`
  font-weight: 500;
  font-size: 32px;
`;

export const BlogSection = styled.div`
  margin-top: 32px;
`;
