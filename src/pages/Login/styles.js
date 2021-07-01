import styled from "styled-components";

export const Container = styled.div`
position: relative;
  font-family: Arial, Helvetica, sans-serif;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  height: 660px;
  width: 660px;
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

 
`;

export const FlexWrapper = styled.div`
  
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;


`;

export const Balls = styled.img`
    display: block;
    position: absolute;
    top: -150px;
    right:-250px ;
    
`;

export const Flower = styled.img`
    
  width:120px ;
    
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
