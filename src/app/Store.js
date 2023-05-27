import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./Slice/userSlice";

const store = configureStore({
    reducer:{
        userReducer :userSlice,
    },

})

export default store