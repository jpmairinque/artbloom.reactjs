import styled from "styled-components";

export const TextCardWrapper = styled.div`
  color: white;
  display: none;
  margin-bottom: 4rem;
  max-width:80%;



`;

export const CardWrapper = styled.div`
position: relative;
width: 300px;
display: flex;
flex-direction: column;
justify-content: flex-end;
align-items: center;
transition: 0.3s;     
margin: 2rem;

   

img{
    transition: 0.5s;
    width: 300px;
    height: 400px;
    object-fit: cover;
    border-radius: 15px;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
   
}

&:hover{
    ${TextCardWrapper}{
        position: absolute;
        display: block;        
        text-align: center;
    }
    img{filter:brightness(20%)}
    }


}`



