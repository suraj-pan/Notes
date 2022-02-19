import React from 'react'
import { useSelector } from 'react-redux'
import './MovieListing.scss'
import MovieCard from '../MovieCard/MovieCard'
import Slider from "react-slick";
import { settings } from '../../common/Setting';



const MovieListing = () => {
  const movies = useSelector((state) => state.movies.movies)
  const shows = useSelector((state) => state.movies.shows)
  console.log(shows,movies)

  let renderMovies,
    renderShows = "";

  renderMovies =
    movies.Response === "True" ? (
      movies.Search.map((movie, index) => (
        <MovieCard key={index} data={movie} />
      ))
    ) : (
      <div className="movies-error">
        <h3>{movies.Error}</h3>
      </div>
    );

  renderShows =
    shows.Response === "True" ? (
      shows.Search.map((movie, index) => <MovieCard key={index} data={movie} />)
    ) : (
      <div className="shows-error">
        <h3>{shows.Error}</h3>
      </div>
    );



  return (
    <div>

      <div className='movie-wrapper'>
        <div className='movie-List'>
          <h2>movies</h2>
          <div className='movie-container'>
            <Slider {...settings}> {renderMovies}</Slider>
          </div>
        </div>
        <div className='show-List'>
          <h2>show</h2>
          <div className='movie-container'>
            <Slider {...settings}>{renderShows}</Slider>
          </div>
        </div>
      </div>



    </div>
  )
}
export default MovieListing