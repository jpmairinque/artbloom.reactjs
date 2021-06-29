import styled from "styled-components";

export const Nav = styled.div`

color: white;
font-family: 'Quicksand', sans-serif;
height: 5rem;
background-color: #49493C;
display: flex;
align-items: center;
justify-content: space-between;


img{
    width: 50px;
}

`

export const FlexWrapper = styled.div`

display: flex;
align-items: center;

h3{
    font-weight: 300;
    margin-right: 3rem;
}

&:last-child{

    margin-right: 1.5rem;
 
    
}

`

export const LogoWrapper = styled.div`

display: flex;
align-items: center;
font-weight: 400;
letter-spacing: 7px;
cursor: pointer;
img{
    margin-right: 1rem;
    margin-left: 1rem;
}

`