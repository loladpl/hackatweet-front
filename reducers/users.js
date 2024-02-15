import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: { token: null, username: null, firstname: null, },
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    login: (state, action) => {
      state.value.token = action.payload.token;
      state.value.username = action.payload.username;
      state.value.firstname = action.payload.firstname
    },
   
  },
});

export const { login } = userSlice.actions;
export default userSlice.reducer;