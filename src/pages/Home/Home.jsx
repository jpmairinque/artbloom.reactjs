import { useEffect, useState } from "react";
import fetchArt from "../../services/museumapi";
import ArtsList from "../../components/ArtsList/ArtsList";
import NavBar from "../../components/NavBar/NavBar";
import Loading from "../../components/Loading/Loading";

const Home = () => {
    const [loading, setLoading] = useState(true)
    const [arts, setArts] = useState([])

  useEffect(() => {
    const showArt = async () => {
      const artfetch = await fetchArt();
      setArts(artfetch)
      setLoading(false)
    };

    showArt();
  }, []);

 


  return (
    <div>
        <NavBar/>
        
      {loading ? <Loading/> : <ArtsList arts={arts}/>}
    </div>
  );
};

export default Home;
