import { useContext, createContext, useState} from "react";
import { AuthContext } from "./AuthContext";
import { database } from "../services/firebase";
// create favorites context
export const FavoritesContext = createContext();

const FavoritesContextProvider = (props) => {

  // import auth context
  const { user } = useContext(AuthContext);

  // defining favorites from database, favorites after fetching the MET api & loading toggle for Loading component
  const [favorites, setFavorites] = useState([]);
  const [favoritesToRender, setFavoritesToRender] = useState([]);
  const [isLoadingFavorites, setIsLoadingFavorites] = useState(true);
  const [isFavorite,setIsFavorite] = useState([])

  // fetches only the card clicked and sends it to render
  const fetchSingleArt = async (id) => {
    const resp = await fetch(
      `https://collectionapi.metmuseum.org/public/collection/v1/objects/${id}`
    );
    const data = await resp.json();
    setFavoritesToRender([...favoritesToRender, data]);
  };

  // fetches only the card clicked and deletes it from render
  const fetchDeleteSingleArt = async (id) => {
    const resp = await fetch(
      `https://collectionapi.metmuseum.org/public/collection/v1/objects/${id}`
    );
    const data = await resp.json();
    setFavoritesToRender(
      favoritesToRender.filter((art) => art.objectID !== data.objectID)
    );
  };

  // fetch all favorites from API
  const fetchArts = async () => {
    var artarr = [];
    for (var i = 0; i <= favorites.length - 1; i++) {
      const resp = await fetch(
        `https://collectionapi.metmuseum.org/public/collection/v1/objects/${favorites[i]}`
      );
      const dataf = await resp.json();
      artarr = [...artarr, dataf];
    }
    setIsLoadingFavorites(false);
    setFavoritesToRender(artarr);
  };

  // loads all favorites IDs in user database
  const loadData = () => {
    const faveRef = database.ref(`users/${user.id}`);
    faveRef.once("value", async (art) => {
      const dataArt = art.val();
      if (dataArt == null) {
        return;
      }
      const parsedArt = Object.entries(dataArt).map(([key, value]) => {
        return value.fave;
      });
      setFavorites(parsedArt);
    });
  };

  return (
    <FavoritesContext.Provider
      value={{
        favorites,
        setFavorites,
        loadData,
        fetchArts,
        favoritesToRender,
        fetchSingleArt,
        isLoadingFavorites,
        fetchDeleteSingleArt,
        isFavorite,
        setIsFavorite
      }}
    >
      {props.children}
    </FavoritesContext.Provider>
  );
};

export default FavoritesContextProvider;
