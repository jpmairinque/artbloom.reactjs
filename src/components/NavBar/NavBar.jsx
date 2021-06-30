import * as S from "./styles";
import Flower from "../../assets/cil_flower.svg";
import { useHistory } from "react-router";
import {BsSearch} from "react-icons/bs"
import {AiOutlineReload} from "react-icons/ai"
import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import { auth } from "../../services/firebase";
import { Redirect } from "react-router";


const NavBar = (props) => {

    const {user} = useContext(AuthContext)


    const history = useHistory()

    const signOutApp = async () => {
     await auth.signOut().then(() => {
      window.location.reload();
        console.log(  "deuuuuu")
      }).catch((error) => {
      console.log('nnn deu')
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
    <BsSearch color="white" size={40}/>
    </S.FlexWrapper>
      <S.FlexWrapper>     
      <h3 onClick={()=>{history.push("/home/favorites")}}>FAVORITES</h3>
      <h3>{user.name}</h3>
      <img src={user.avatar} className="avatar" />
      <h3 onClick={()=>{signOutApp()  }}>sair</h3>
      
      </S.FlexWrapper>
    </S.Nav>
  );
};

export default NavBar;
