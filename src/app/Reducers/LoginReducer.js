import { createSlice } from "@reduxjs/toolkit"


// const intialState = {
//     "username":"",
//     "userType":"",
//     "isLoggedIn":false
// }

export const loginReducer = createSlice({
    name:'Login',
    // initialState,
    initialState :{
        "username":"",
        "userType":"",
        "isLoggedIn":false
        },
    reducers :{
        singInUsers(state,action){
            state.push(action.payload.username)
            console.log("login Reducers");
            console.log(action.payload);
        }
    }
});

export const {singInUsers}  = loginReducer.actions;