import React from 'react'
import * as S from './styles'
import {HiOutlineHeart, HiHeart} from "react-icons/hi"
import { useContext, useState, useEffect } from 'react'
import { FavoritesContext } from "../../contexts/FavoritesContext";
import { database } from '../../services/firebase'
import { AuthContext } from '../../contexts/AuthContext'


const ArtCard = (props) => {

    const { loadData, fetchSingleArt , favorites } = useContext(FavoritesContext);

    const { user } = useContext(AuthContext);

   const handleNewFave = async (fav)=>{

        if (favorites.includes(fav)){return}
        const faveRef = database.ref(`users/${user.id}`);
  
        const faveList = await faveRef.push({fave: fav} );
        loadData()
        fetchSingleArt(fav);
      };

 
 
  
  
    return (
        <S.CardWrapper>
            
            <img src={props.art.primaryImageSmall} alt="" />
            <S.TextCardWrapper >
            <h1>{props.art.title.length > 25 ? props.art.title.slice(0,25).concat("...") : props.art.title}</h1>
            <span>{props.art.objectBeginDate}</span>
            <p>{props.art.artistDisplayName}</p>
           <button  id={props.art.objectID} onClick={(e)=>{handleNewFave(e.target.id); }}>Add to favorites<HiHeart ></HiHeart> </button>
            </S.TextCardWrapper>
          
        </S.CardWrapper>
    )
}

export default ArtCard
