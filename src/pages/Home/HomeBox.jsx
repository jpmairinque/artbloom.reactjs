import React from 'react'
import Favorites from '../Favorites/Favorites'
import NavBar from '../../components/NavBar/NavBar'
import { useLocation } from 'react-router'
import Loading from '../../components/Loading/Loading'
import ArtsList from '../../components/ArtsList/ArtsList'

const HomeBox = ({showArt, setLoading, arts,loading}) => {
   const location = useLocation()
    return (
        <div>
        <NavBar showArt={showArt} setLoading={setLoading}/>
        {location.pathname==="/favorites" ? <Favorites/> : (loading ? <Loading/> : <ArtsList arts={arts}/>)} 
        </div>
    )
}

export default HomeBox
