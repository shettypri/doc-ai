import { configureStore } from "@reduxjs/toolkit";
import { loginReducer } from "./Reducers/LoginReducer";

const store = configureStore({
    reducer:{
        Login : loginReducer
    }
})

export default store