import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./Slice/userSlice";
import registerSlice from "./Slice/registerSlice.js";
import adminSlice from "./Slice/adminSlice.js";

const store = configureStore({
    reducer:{
        userReducer :userSlice, 
        registerReducer:registerSlice,
        adminReducer:adminSlice,
    },

})

export default store