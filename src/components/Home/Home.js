import React, { useEffect } from 'react'
import MovieListing from '../MovieListing/MovieListing'
import { useDispatch, useSelector } from 'react-redux'
import {fectchAsyncMovies,fectchAsyncShows}  from '../../features/movies/movieSlice'

const Home = () => {

   const loader = useSelector(state=>state.movies.loader)
    const dispatch = useDispatch()
    const movieText = 'harry'
    const showText = 'friends'
   
    useEffect(() => {
   
        dispatch(fectchAsyncMovies(movieText))
        dispatch(fectchAsyncShows(showText))
   
    },[dispatch])


    return (
        <div>
            <div className='banner img'></div>
            {loader?<div>...Loading</div>: <MovieListing />}  
        </div>
    )
}

export default Home