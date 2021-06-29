import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";

import AuthContextProvider from "./contexts/AuthContext";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";

const Routes = () => {
  return (
    <Router>
      <AuthContextProvider>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route path="/home" component={Home} />
        </Switch>
      </AuthContextProvider>
    </Router>
  );
};

export default Routes;
