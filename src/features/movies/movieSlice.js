import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { APIKey } from '../../common/apis/MovieApiKey'
import movieApi from '../../common/apis/movieApi'


export const fectchAsyncMovies = createAsyncThunk('movies/fectchAsyncMovies', async (term) => {
    
    const response = await movieApi.get(`?apikey=${APIKey}&s=${term}&type=movie`)

    return response.data
})

export const fectchAsyncShows = createAsyncThunk('movies/fectchAsyncShows', async (term) => {
   
    const response = await movieApi.get(`?apikey=${APIKey}&s=${term}&type=series`)


    return response.data
})

export const fectchAsyncMovieorShowdetail = createAsyncThunk('movies/fectchAsyncMovieorShowdetail', async (id,d,s) => {
   
    const response = await movieApi.get(`?apikey=${APIKey}&i=${id}&Plot=full`)


    return response.data
})

const initialState = {
    movies: {},
    shows:{},
    selectedMovieorShow:{},
    loader:false
   
}

const movieSlice = createSlice({
    name: 'movies',

    initialState,
    reducers: {
        removeSelectedMovieorShow: (state) => {
            state.selectedMovieorShow = {}
            console.log('remove')
          
        },
    },
    extraReducers: {
       
        [fectchAsyncMovies.pending]: (state) => {
            console.log('pending')
           return{ ...state, loader:true}
        },
        [fectchAsyncMovies.fulfilled]: (state, { payload }) => {
            console.log('Fetch successfully')
            return { ...state, movies: payload,loader:false }
        },
        [fectchAsyncMovies.rejected ]: () => {
            console.log('Rejected')
          
        },
        [fectchAsyncShows.fulfilled]: (state, { payload }) => {
            console.log('shows Fetch successfully')
            return { ...state, shows: payload,loader:false }
        },
        [fectchAsyncMovieorShowdetail.fulfilled]: (state, { payload }) => {
            console.log('shows or movie Fetch successfully')
            return { ...state, selectedMovieorShow: payload,loader:false }
        },
    }
})

export const { removeSelectedMovieorShow } = movieSlice.actions
export default movieSlice.reducer