import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./Slice/userSlice";
import registerSlice from "./Slice/registerSlice.js";

const store = configureStore({
    reducer:{
        userReducer :userSlice, 
        registerReducer:registerSlice,
    },

})

export default store