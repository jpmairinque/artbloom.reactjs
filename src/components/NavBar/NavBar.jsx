import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import { auth } from "../../services/firebase";
import { useHistory, useLocation } from "react-router";

import {AiOutlineReload, AiOutlineLogout} from "react-icons/ai"
import Flower from "../../assets/cil_flower.svg";
import * as S from "./styles";

const NavBar = (props) => {

  const {user} = useContext(AuthContext)
  const history = useHistory()
  const location = useLocation()

  const signOutApp = async () => {
    await auth.signOut().then(() => {
    window.location.reload();
      console.log("Sucessfully logged out")
    }).catch((error) => {
    console.log('Something went wrong')
    })        
  }

  return (
    <S.Nav>
     <S.LogoWrapper onClick={()=>{history.push('/home/main')}}>
        <img src={Flower} />
        <h1>ARTBLOOM</h1>
     </S.LogoWrapper>

      <S.FlexWrapper>
        <AiOutlineReload color="white" size={50} onClick={()=>{props.showArt(); props.setLoading(true)}}/> 
      </S.FlexWrapper>

      <S.FlexWrapper>     
        <h3 onClick={()=>{history.push("/home/favorites")}}>FAVORITES</h3>
        <h3>{user.name}</h3>
        <img src={user.avatar} className="avatar" />
        <AiOutlineLogout size={50} color="white" onClick={()=>{signOutApp()}}/>
      </S.FlexWrapper>
    </S.Nav>
  );
};

export default NavBar;
