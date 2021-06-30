import ArtCard from "../ArtCard/ArtCard";
import * as S from "./styles";
import { useState } from "react";
const ArtsList = (props) => {

  

  console.log(props.arts);
  return (
    <S.ArtsWrapper>
      {props.arts.map((art, index) => (
        <ArtCard key={index} art={art} />
      ))}
    </S.ArtsWrapper>
  );
};

export default ArtsList;
