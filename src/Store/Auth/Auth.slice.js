import { createSlice } from "@reduxjs/toolkit";
import { fetchUser } from "../../common/fetchUser";

const userData = {providerData: fetchUser()}
export const AuthSlice = createSlice({
  name: 'auth',
  initialState: {
    userData: userData,
  },
  reducers: {
    setUserData: (state, { payload }) => {
      state.userData = payload
    },
    clearUserData: (state) => {
      state.userData = userData
    },
  }
})

export default AuthSlice.reducer
export const { setUserData, clearUserData } = AuthSlice.actions