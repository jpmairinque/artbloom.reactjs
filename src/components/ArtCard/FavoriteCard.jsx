import React from 'react'
import * as S from './styles'
import {HiOutlineHeart, HiHeart} from "react-icons/hi"
import { useContext, useState, useEffect } from 'react'

const FavoriteCard = (props) => {
    return (
        <S.CardWrapper>
            
            <img src={props.art.primaryImageSmall} alt="" />
            <S.TextCardWrapper >
            <h1>{props.art.title.length > 25 ? props.art.title.slice(0,25).concat("...") : props.art.title}</h1>
            <span>{props.art.objectBeginDate}</span>
            <p>{props.art.artistDisplayName}</p>
           <button>Add to favorites<HiHeart ></HiHeart> </button>
            </S.TextCardWrapper>
          
        </S.CardWrapper>
    )
}

export default FavoriteCard
