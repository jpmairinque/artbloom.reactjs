import { useContext } from "react";
import { database } from "../../services/firebase";
import { FavoritesContext } from "../../contexts/FavoritesContext";
import { AuthContext } from "../../contexts/AuthContext";
import * as S from "./styles";

const FavoriteCard = (props) => {

  const { loadData, fetchDeleteSingleArt } = useContext(FavoritesContext);
  const { user } = useContext(AuthContext);

  const handleDeleteFave = async (fav) => {
   
    const faveRef = database.ref(`users/${user.id}`); // map through all favorites cards
    faveRef.once("value", async (art) => { 
      const dataArt = art.val();

      if (dataArt == null) {return} // if there's no favorites, abort handle
           
      Object.entries(dataArt).map(([key, value]) => { // delete the clicked card from database
          if (value.fave == fav) {
            database.ref(`users/${user.id}/${key}`).remove();

            loadData(); // load new information from database
            fetchDeleteSingleArt(fav); // fetch only the clicked card from the API & sets the new screenrendered cards
          }
      });
    });
  };
 
  return (
    <S.CardWrapper>
      <img src={props.art.primaryImageSmall} alt="" />
      <S.TextCardWrapper>
        <div>
        <h1>
        {props.art.title.length > 25
            ? props.art.title.slice(0, 25).concat("...")
            : props.art.title}
        </h1>
        <span>{props.art.objectBeginDate}</span>
        <p>{props.art.artistDisplayName}</p>
        </div>
        <S.ButtonWrapper>
            <S.Button
            id={props.art.objectID}
            onClick={(e) => {
                handleDeleteFave(e.target.id);
            }}
            >
            Remove from favorites
            </S.Button>

            <S.Button // redirects user to the art's page on MET website
            onClick={()=>{window.open(`https://www.metmuseum.org/art/collection/search/${props.art.objectID}`, '_blank')}}
            >
            Learn more
            </S.Button>
        </S.ButtonWrapper>        
      </S.TextCardWrapper>
    </S.CardWrapper>
  );
};

export default FavoriteCard;
