import * as S from "./styles";
import Flower from "../../assets/cil_flower.svg";
import { useHistory } from "react-router";
import {BsSearch} from "react-icons/bs"


const NavBar = () => {

    const history = useHistory()

  return (
    <S.Nav>
     <S.LogoWrapper onClick={()=>{history.push('/home')}}>
        <img src={Flower} />
        <h1>ARTBLOOM</h1>
    </S.LogoWrapper>
      <S.FlexWrapper>
      <h3>FAVORITES</h3>
      <h3>PROFILE</h3>
      <BsSearch color="white" size={30}/>
      </S.FlexWrapper>
    </S.Nav>
  );
};

export default NavBar;
