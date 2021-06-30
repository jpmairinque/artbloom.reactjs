import React, { useState } from "react";
import { useEffect } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import { database } from "../../services/firebase";
import { useContext } from "react";
import { FavoritesContext } from "../../contexts/FavoritesContext";
import { ArtsWrapper } from "../../components/ArtsList/styles";
import FavoriteCard from "../../components/ArtCard/FavoriteCard";
import Loading from "../../components/Loading/Loading";


const Favorites = () => {

  const {fetchArts, favoritesToRender, isLoadingFavorites} = useContext(FavoritesContext);
  
 
  

  

  useEffect(() => {

  fetchArts() 
   
 
  }, []);



  return (

<>

  {isLoadingFavorites ? <Loading/>:(<ArtsWrapper>{favoritesToRender.map((art, index) => (<FavoriteCard key={index} art={art}/>))} </ArtsWrapper>)}
       </>

  );
};

export default Favorites;
