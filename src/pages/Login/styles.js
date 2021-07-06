import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  width: 35%;
  height: 70%;

  background-color: #49493c;
  border-radius: 20px;
  box-shadow: 10.0026px 13.3368px 16px rgba(0, 0, 0, 0.25);
  padding: 2rem;

  h1 {
    font-size: 4rem;
  }

  p {
    font-weight: 300;
    font-size: 1.5rem;
  }

  @media (max-width: 1250px) {
    width: 50%;

    @media (max-width: 870px) {
      width: 90%;
      text-align: center;
      h1 {
        font-size: 2rem;
      }
    }
  }
`;

export const FlexWrapper = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Flower = styled.img`
  width: 120px;
`;

export const FlexColumn = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const GoogleIcon = styled.img`
  width: 120px;
  height: 120px;
  margin: 2.5rem 0 1rem;
  cursor: pointer;
  transition: 0.3s;
  &:hover {
    transform: scale(1.05);
  }
`;
