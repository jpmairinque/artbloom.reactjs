import ArtCard from "../ArtCard/ArtCard";
import * as S from "./styles";
const ArtsList = (props) => {

  console.log(props.arts);
  return (
    <S.ArtsWrapper>
      {props.arts.map((art, index) => (
        <ArtCard data-testid="artcard" key={index} art={art} />
      ))}
    </S.ArtsWrapper>
  );
};

export default ArtsList;
