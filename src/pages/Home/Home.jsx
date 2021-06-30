import { useEffect, useState, useContext } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import fetchArt from "../../services/museumapi";

import { FavoritesContext } from "../../contexts/FavoritesContext";

import ArtsList from "../../components/ArtsList/ArtsList";
import NavBar from "../../components/NavBar/NavBar";
import Loading from "../../components/Loading/Loading";
import Favorites from "../Favorites/Favorites";

const Home = () => {

  const { loadData } = useContext(FavoritesContext);
  const [loading, setLoading] = useState(true);
  const [arts, setArts] = useState([]);

  const showArt = async () => {
    const artfetch = await fetchArt(); // fetching random art from API
    setArts(artfetch);
    setLoading(false);
  };

  useEffect(() => {
    loadData(); // loading favorites from database
    showArt(); // setting random arts to be shown
  }, []);

  return (
    <Router>
      <NavBar showArt={showArt} setLoading={setLoading} />
      <Route path="/home/main">
        {loading ? <Loading /> : <ArtsList arts={arts} />}
      </Route>
      <Route path="/home/favorites">
        <Favorites />
      </Route>
    </Router>
  );
};

export default Home;
