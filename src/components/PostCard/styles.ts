import styled from 'styled-components';

export const Container = styled.div`
  padding: 16px;
  border: 1px solid #ddd;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  margin: 12px auto;

  display: flex;
`;

export const Content = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;

  h2 {
    font-weight: 600;
    font-size: 20px;
    line-height: 27px;
    margin: 0;
  }

  p {
    font-weight: 300;
    font-size: 14px;
    line-height: 19px;
    flex: 1;
    margin-bottom: 24px;
  }

  div {
    display: flex;
    align-items: center;
    padding: 0;

    span {
      font-weight: 300;
      font-size: 14px;
      margin: 0 8px;
      line-height: 20px;
    }
  }

  small {
    font-size: 12px;
    font-weight: 300;
    line-height: 16px;
    color: #333;
    margin-top: 4px;
  }
`;

export const ImageContainer = styled.div`
  width: 200px;
  display: flex;
  place-content: center;

  > img {
    width: 100%;
    height: auto;
  }
`;
