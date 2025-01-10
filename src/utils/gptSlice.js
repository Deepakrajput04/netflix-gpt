// Importing createSlice from Redux Toolkit
import { createSlice } from "@reduxjs/toolkit";

// Creating a slice for the 'gpt' feature
const gptSlice = createSlice({
    // The name of this slice, which is used in Redux DevTools and in debugging
    name: 'gpt',
    
    // The initial state of the slice
    initialState: {
        // showGptSearch is initially set to false, meaning the GPT search view is hidden
        showGptSearch: false
    },
    
    // Reducers are functions that modify the state
    reducers: {
        // toggleGptSearchView is a reducer that toggles the showGptSearch state
        toggleGptSearchView: (state) => {
            // This line toggles the showGptSearch value (true/false)
            state.showGptSearch = !state.showGptSearch;
        }
    }
})

// Exporting the action created by the slice, so it can be dispatched in other parts of the app
export const { toggleGptSearchView } = gptSlice.actions;

// Exporting the reducer to be used in the Redux store
export default gptSlice.reducer;
