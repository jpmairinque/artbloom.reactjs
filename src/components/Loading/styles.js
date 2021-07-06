import styled from "styled-components";

export const Loader = styled.div`

  display: inline-block;
  width: 120px;
  height: 120px;

 &:after {
  content: " ";
  display: block;
  width: 80px;
  height: 80px;
  margin: 8px;
  border-radius: 50%;
  border: 10px solid #fff;
  border-color: #49493C transparent #49493C transparent;
  animation: lds-dual-ring 1.2s linear infinite;
}

@keyframes lds-dual-ring {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

`


export const Wrapper = styled.div`

display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
margin-top: 10rem;

h1{

  margin-top: 2rem;
  font-size: 1.8rem;
  font-weight: 300;

    
}

@media (max-width:1250px){

h1{
  display: none;
}
}


`