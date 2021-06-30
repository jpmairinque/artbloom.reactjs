import { useEffect, useContext } from "react";
import { FavoritesContext } from "../../contexts/FavoritesContext";
import { ArtsWrapper } from "../../components/ArtsList/styles";

import FavoriteCard from "../../components/ArtCard/FavoriteCard";
import Loading from "../../components/Loading/Loading";

const Favorites = () => {

  const { fetchArts, favoritesToRender, isLoadingFavorites } = useContext(FavoritesContext);

  useEffect(() => {
    fetchArts();
  }, []);

  // if API fetch is loading, Favorites will render Loading component; else, it loads the favorite cards
  return (
    <>
      {isLoadingFavorites ? (
        <Loading />
      ) : (
        <ArtsWrapper>
          {favoritesToRender.map((art, index) => (
            <FavoriteCard key={index} art={art} />
          ))}{" "}
        </ArtsWrapper>
      )}
    </>
  );
};

export default Favorites;
