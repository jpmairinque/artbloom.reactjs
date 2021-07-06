import {useContext} from "react";
import { useHistory } from "react-router";
import { AuthContext } from "../../contexts/AuthContext";

import Icon from "../../assets/googleicons.svg"
import Flower from "../../assets/cil_flower.svg"
import * as S from './styles'

const Login = () => {

  const history = useHistory();
  const { user, signInWithGoogle} = useContext(AuthContext)

  const handleLogIn = async () => {
     if (!user){
        await signInWithGoogle()
     }
     console.log(user)
      history.push("/home/main");
    };
   

  return (
    
      <S.FlexWrapper>

        <S.Container>  
          <S.Flower src={Flower}/>
          <S.FlexColumn>
          <h1>Hello there!</h1>
          <p>It's lovely to see you here!</p>
          </S.FlexColumn>
          <S.FlexColumn>
            <S.GoogleIcon src={Icon} onClick={handleLogIn}/>
            <span>Sign in with Google</span>
          </S.FlexColumn>      
        </S.Container> 
         
      </S.FlexWrapper>
  );
};

export default Login;
