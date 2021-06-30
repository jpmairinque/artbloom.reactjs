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
const Routes = () => {
  return (
    
    <Router>
     <AuthContextProvider>
    <FavoritesContextProvider>
      
        <Switch>
          <Route exact path="/login" component={Login} />
          <Route path="/home" component={Home} />
          <Route path="/favorites" component={Home} />
        
        </Switch>
        </FavoritesContextProvider>
 
      </AuthContextProvider> 
    </Router>
   
  );
};

export default Routes;
