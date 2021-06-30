import { AuthContext } from "./AuthContext"
import { useContext, createContext, useState, useEffect } from "react"

import { database } from "../services/firebase"




export const FavoritesContext = createContext()
const FavoritesContextProvider = (props) => {



   const {user} = useContext(AuthContext)
   
    const [favorites, setFavorites] = useState([])
    const [favoritesToRender, setFavoritesToRender] = useState([])
    const [isLoadingFavorites, setIsLoadingFavorites] = useState(true);
 


const fetchSingleArt = async(id) =>{
    const resp = await fetch(
        `https://collectionapi.metmuseum.org/public/collection/v1/objects/${id}`
      );
      const data = await resp.json();
    setFavoritesToRender([...favoritesToRender, data])


}

    const fetchArts = async () => {
    
        var artarr = [];
        for (var i = 0; i <= favorites.length - 1; i++) {
          const resp = await fetch(
            `https://collectionapi.metmuseum.org/public/collection/v1/objects/${favorites[i]}`
          );
          const dataf = await resp.json();
           artarr = [...artarr, dataf];
          
        }
        setIsLoadingFavorites(false)
        setFavoritesToRender(artarr)
      
      };

    const loadData = () =>{
        const faveRef = database.ref(`users/${user.id}`);
        faveRef.once("value", async (art) => {
          const dataArt = art.val();
          if(dataArt==null){return}
          const parsedArt = Object.entries(dataArt).map(([key, value]) => {
            return value.fave;
          });
          setFavorites(parsedArt);
        });




    }

    return (
        <FavoritesContext.Provider value={{favorites,setFavorites, loadData, fetchArts, favoritesToRender,fetchSingleArt,isLoadingFavorites}}>
            {props.children}
        </FavoritesContext.Provider>
    )
}

export default FavoritesContextProvider
