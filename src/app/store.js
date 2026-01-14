import { configureStore } from '@reduxjs/toolkit'
import UserReducer from "./userInfoSlice"


export const store = configureStore({
  reducer: {
    userInfo: UserReducer,
  },
})