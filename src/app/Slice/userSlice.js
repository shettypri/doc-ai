import { createSlice } from "@reduxjs/toolkit";

const userSlice=createSlice({
    name:'userReducer',
    initialState:{
        isLoggedIn:false,
        newUser:false,
        data:[],
    },
    reducers:{
        registerUser(state,action){
            state.isLoggedIn=true,
            state.data.push(action.payload)
        }
    }
})

export const {registerUser} = userSlice.actions
export default userSlice.reducer