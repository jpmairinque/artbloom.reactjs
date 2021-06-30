import ArtCard from "../ArtCard/ArtCard"
import * as S from './styles'
import { useState } from "react"
const ArtsList = (props) => {

    const [isFavorite, setIsFavorite] = useState(false)
   

    console.log(props.arts)
    return (
        <S.ArtsWrapper>
        {props.arts.map((art, index) => (<ArtCard isFavorite={isFavorite} setIsFavorite={setIsFavorite} key={index} art={art}/>))}
        </S.ArtsWrapper>
    )
}


export default ArtsList
