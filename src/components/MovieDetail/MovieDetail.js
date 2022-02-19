import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom/cjs/react-router-dom.min'
import { fectchAsyncMovieorShowdetail,removeSelectedMovieorShow } from '../../features/movies/movieSlice'
import './MovieDetail.scss'


const MovieDetail = () => {
  const data = useSelector((state=>state.movies.selectedMovieorShow))
  const {imdbID}= useParams()
  console.log(imdbID)
  const dispatch = useDispatch()
  console.log(data)
  useEffect(()=>{
    dispatch(fectchAsyncMovieorShowdetail(imdbID))
    console.log('open')
    return dispatch(removeSelectedMovieorShow())
  },[dispatch,imdbID])
  return (
    <div className='movie-section'>
      {Object.keys(data).length === 0?(<div>...Loading</div>):(
      <>

      <div className='section-left'>
        <div className='movie-title'>
          {data.Title}
        </div>
        <div className='movie-rating'>
          <span>IMDB rating <i className='fa fa-star'></i>:{data.imdbRating}</span>
          <span>IMDB Votes <i className='fa fa-thumbs-up'></i>:{data.imdbVotes}</span>
          <span>Runtime <i className='fa fa-flim'></i>:{data.Runtime}</span>
          <span>Year <i className='fa fa-calender'></i>:{data.Year}</span>
        </div>
        <div className='movie-plot'>{data.Plot}</div>
        <div className='movie-info'>
          <div>
            <span>Director</span>
            <span>{data.Director}</span>
          </div>
          <div>
            <span>Stars</span>
            <span>{data.Actors}</span>
          </div>
          <div>
            <span>Generes</span>
            <span>{data.Genre}</span>
          </div>
          <div>
            <span>Languages</span>
            <span>{data.Language}</span>
          </div>
          <div>
            <span>Awards</span>
            <span>{data.Awards}</span>
          </div>
        </div>
      </div>
      <div className='section-right'>
       <img src={data.Poster} alt={data.Title}/>
      </div>
      </>
      )}
    </div>
  )
}

export default MovieDetail