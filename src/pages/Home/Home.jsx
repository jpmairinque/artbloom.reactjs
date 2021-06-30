import {

  Route,
  
} from "react-router-dom";

import { useEffect, useState,useContext } from "react";
import { useLocation } from "react-router";
import fetchArt from "../../services/museumapi";
import ArtsList from "../../components/ArtsList/ArtsList";
import NavBar from "../../components/NavBar/NavBar";
import Loading from "../../components/Loading/Loading";
import Favorites from "../Favorites/Favorites";
import { FavoritesContext } from "../../contexts/FavoritesContext";
import { database } from "../../services/firebase";
import { AuthContext } from "../../contexts/AuthContext";

const Home = () => {
    const [loading, setLoading] = useState(true)
    const [arts, setArts] = useState([])
    const { user } = useContext(AuthContext);
    const { favorites, setFavorites, loadData } = useContext(FavoritesContext);
  const location = useLocation()

 
  

const showArt = async () => {
      const artfetch = await fetchArt();
      setArts(artfetch)
      setLoading(false)
    };

  useEffect(() => {
    loadData();
    showArt();
  }, []);

 


  return (
    <div>
        <NavBar showArt={showArt} setLoading={setLoading}/>
        {location.pathname==="/favorites" ? <Favorites/> : (loading ? <Loading/> : <ArtsList arts={arts}/>)}
 
    </div>
  );
};

export default Home;
