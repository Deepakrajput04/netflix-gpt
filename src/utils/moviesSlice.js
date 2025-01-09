// Importing the necessary function from Redux Toolkit
import { createSlice } from '@reduxjs/toolkit'

// Creating the slice using createSlice, which combines the reducer and action
const moviesSlice = createSlice({
  // `name` is the name of the slice, which will be used to identify it in the Redux store
  name: 'movies',

  // `initialState` defines the initial structure of the slice's state
  initialState: {
    // The initial state has a `nowPlayingMovies` property which is initially set to `null`
    nowPlayingMovies: null,
    trailerVideo: null,
  },

  // `reducers` defines the actions and the corresponding updates to the state
  reducers: {
    // `addNowPlayingMovies` is a reducer function to update the `nowPlayingMovies` state
    addNowPlayingMovies: (state, action) => {
      // This updates the `nowPlayingMovies` in the state with the value from the action's payload
      state.nowPlayingMovies = action.payload
    },
    addPopularMovies: (state, action) => {
        // This updates the `nowPlayingMovies` in the state with the value from the action's payload
        state.PopularMovies = action.payload
      },
      addUpcomingMovies: (state, action) => {
        // This updates the `nowPlayingMovies` in the state with the value from the action's payload
        state.UpcomingMovies = action.payload
      },
      addTrendingMovies: (state, action) => {
        // This updates the `nowPlayingMovies` in the state with the value from the action's payload
        state.TrendingMovies = action.payload
      },
    addTrailerVideo: (state, action) => {
      state.trailerVideo = action.payload
    },
  },
})

// Exporting the action creator `addNowPlayingMovies` from the slice
// This allows it to be used elsewhere in the app to dispatch an action
export const { addNowPlayingMovies, addTrailerVideo, addPopularMovies, addUpcomingMovies,addTrendingMovies} = moviesSlice.actions

// Exporting the reducer function, which will be used in the Redux store to handle the state updates
export default moviesSlice.reducer
