import React from 'react'
import * as S from './styles'
import {HiOutlineHeart, HiHeart} from "react-icons/hi"
import { useContext, useState, useEffect } from 'react'
import { FavoritesContext } from '../../contexts/FavoritesContext'
import { AuthContext } from '../../contexts/AuthContext'
import { database } from '../../services/firebase'

const FavoriteCard = (props) => {

    const { loadData, fetchArts, fetchDeleteSingleArt } = useContext(FavoritesContext);
    const { user } = useContext(AuthContext);

    const handleDeleteFave = async (fav)=>{ 
        
        const faveRef = database.ref(`users/${user.id}`);
        faveRef.once("value", async (art) => {
          const dataArt = art.val();
          if(dataArt==null){
           
            return
          }
                 
          Object.entries(dataArt).map(([key, value]) => {

           console.log(key,value)
           if (value.fave == fav){
               database.ref(`users/${user.id}/${key}`).remove()
               loadData()
               fetchDeleteSingleArt(fav)
           
           }
       
          }
          
          
          
          
          );
          
          
         
        });
      
    
    }


        // if (favorites.includes(fav)){return}
        // const faveRef = database.ref(`users/${user.id}/`);
  
        // const faveList = await faveRef.push({fave: fav} );
        // loadData()
        // fetchSingleArt(fav);
      
    return (
        <S.CardWrapper>
            
            <img src={props.art.primaryImageSmall} alt="" />
            <S.TextCardWrapper >
            <h1>{props.art.title.length > 25 ? props.art.title.slice(0,25).concat("...") : props.art.title}</h1>
            <span>{props.art.objectBeginDate}</span>
            <p>{props.art.artistDisplayName}</p>
           <button  id={props.art.objectID} onClick={(e)=>{handleDeleteFave(e.target.id)}}>Remove from favorites </button>
            </S.TextCardWrapper>
          
        </S.CardWrapper>
    )
}

export default FavoriteCard
