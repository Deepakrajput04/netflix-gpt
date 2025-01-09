
import { createSlice } from '@reduxjs/toolkit';

// Define the initial state
const initialState = {
  user: null,
};

// Create a slice for user state management
const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    addUser: (state, action) => {
      state.user = action.payload;
    },
    removeUser: (state) => {
      state.user = null;
    },
  },
});

// Export actions to dispatch
export const { addUser, removeUser } = userSlice.actions;

// Export the reducer to be used in the store
export default userSlice.reducer;
