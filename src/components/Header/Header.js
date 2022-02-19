import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Link,useHistory } from 'react-router-dom'
import { fectchAsyncMovies, fectchAsyncShows } from '../../features/movies/movieSlice'
import user from '../../images/user.png'
import './Header.scss'
const Header = () => {
  const [term , setTerm] = useState('')
  const history = useHistory()
  const dispatch = useDispatch()
  const submitHandler=(e)=>{
  e.preventDefault()
  if(term === '') alert('please enter a search term')
  dispatch(fectchAsyncMovies(term))
  dispatch(fectchAsyncShows(term))
  setTerm("")
   history.goBack()
  }
  return (
    <div className='header'>
     
        <div className='logo'> <Link to='/'>Movie App</Link></div>
        <div className='search-bar'>
          <form onSubmit={submitHandler}>
            <input type='text' placeholder='search movie or show' value={term} onChange={(e)=>setTerm(e.target.value)}/>
           <button type='submit'><i className='fa fa-search'></i></button>
          </form>
        </div>
        <div className='user-image'>
            <img src={user} alt='logo'/>
        </div>
    </div>
  )
}

export default Header