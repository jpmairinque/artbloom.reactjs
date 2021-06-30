import { AuthContext } from "./contexts/AuthContext";
import { useContext } from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";

import FavoritesContextProvider from "./contexts/FavoritesContext";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";

const Routes = () => {

  const {user} = useContext(AuthContext) // catching up user to set a private route

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
