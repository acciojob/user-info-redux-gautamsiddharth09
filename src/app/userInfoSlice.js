import { createSlice } from '@reduxjs/toolkit'


export const userInfoSlice = createSlice({
  name: 'userInfo',
  initialState:  {
    name: "",
    email: "",

  },
  reducers: {
    setName: (state,action) => {
      state.name =  action.payload
    },
    setEmail: (state,action) =>{
      state.email = action.payload
    }
   
  },
})


export const {setName,setEmail  } = userInfoSlice.actions

export default userInfoSlice.reducer

