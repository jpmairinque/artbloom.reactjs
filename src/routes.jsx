import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";

import AuthContextProvider from "./contexts/AuthContext";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import FavoritesContextProvider from "./contexts/FavoritesContext";
import Favorites from "./pages/Favorites/Favorites";
import { useContext } from "react";
import { AuthContext } from "./contexts/AuthContext";


const Routes = () => {


  const {user} = useContext(AuthContext)

  return (

    
    
    <Router>
     
    <FavoritesContextProvider>
      
        <Switch>
          <Route exact path="/" component={Login} />
          <Route path="/home">
            {!user ? <Redirect to="/"/> : <Home/>}
          </Route>
          
        
        </Switch>
        </FavoritesContextProvider>
 
  
    </Router>
   
  );
};

export default Routes;
