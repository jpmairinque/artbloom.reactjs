import styled from "styled-components";

export const Nav = styled.div`
  color: white;
  font-family: "Quicksand", sans-serif;
  height: 5rem;
  background-color: #49493c;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;

  .avatar {
    border-radius: 100px;
    margin-left: -2rem;
    margin-right: 2rem;
  }

  img {
    width: 50px;
  }

  svg {
    cursor: pointer;
  }

  @media (max-width: 950px) {
    display: none;
  }
`;

export const FlexWrapper = styled.div`
  display: flex;
  align-items: center;

  h3 {
    font-weight: 300;
    margin-right: 3rem;
    cursor: pointer;
    transition: 0.2s;

    &:hover {
      transform: scale(1.02);
    }
  }

  &:last-child {
    margin-right: 1.5rem;
  }
`;

export const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
  font-weight: 400;
  letter-spacing: 7px;
  cursor: pointer;
  transition: 0.2s;

  img {
    margin-right: 1rem;
    margin-left: 1rem;
  }

  &:hover {
    transform: scale(1.02);
  }
`;

export const NavMobile = styled.nav`
  display: none;

  @media (max-width: 950px) {
    color: white;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 5rem;
    background-color: #49493c;

    h3 {
      font-weight: 300;
      font-size: 1rem;
      cursor: pointer;
      transition: 0.2s;
      letter-spacing: 5px;
    }
    .avatar {
      border-radius: 100px;
      width: 70px;
    }
    ${FlexWrapper} {
      &:last-child {
        margin-right: 0;
      }
    }
    ${LogoWrapper} {
      img {
        width: 50px;
      }
    }
    @media (max-width: 560px) {
      .avatar{
        width: 50px !important;
        margin-left: 20px;
      }
      h1 {
        font-size: 1rem;
      }
      img , svg{
        width: 40px !important;
      }
      ${LogoWrapper} {
      img {
        display: none;
      }
    }
    }
  }
`;
