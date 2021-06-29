import {useContext} from "react";
import { useHistory } from "react-router";
import { AuthContext } from "../../contexts/AuthContext";

const Login = () => {

  const history = useHistory();
  const { user, signInWithGoogle} = useContext(AuthContext)

  const handleLogIn = async () => {
     if (!user){
        await signInWithGoogle()
     }
     console.log(user)
      history.push("/home");
    };
   
 

  return (
    <div>
      <button onClick={handleLogIn}>dqwdwqw</button>
    </div>
  );
};

export default Login;
