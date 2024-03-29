import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isUser: false,
  isSignUpModalVisible: false,
  userData: null,
};

export const authenticationReducer = createSlice({
  name: "counter",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.userData = action.payload.user;
     
    },
    setSignUpModal: (state, action) => {
      state.isSignUpModalVisible = action.payload;
    },
    logout: (state) => {
      state.userData = null;
    }
  },
});

export const { setUser, setSignUpModal, logout } =
  authenticationReducer.actions;

export default authenticationReducer.reducer;