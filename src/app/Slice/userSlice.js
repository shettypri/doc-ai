import {doc, getDoc} from "@firebase/firestore";
import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {auth, db} from "../../config/firebase-config";
import {signOut} from "firebase/auth";

export const isUserLogInReducers = createAsyncThunk("isUserLogInReducers", async (userId) => {
    try {
        const docRef = await doc(db, "users", userId)
        const pendingUsers = await getDoc(docRef)
        return await pendingUsers.data()
    } catch (error) {
        console.log(`Error is ${error}`);
        return error
    }
})

export const isLogoutReducers = createAsyncThunk("isLogoutReducers", async () => {
    try {
        return await signOut(auth)

    } catch (error) {
        return error
    }
})

const userSlice = createSlice({
    name: 'userReducer', initialState: {
        loading: false,
        isLoggedIn: false,
        newUser: false,
        error: false,
        id: "",
        data: [],
    }, reducers: {
        registerUser(state, action) {
            state.isLoggedIn = true;
            state.data.push(action.payload)
        },
        uniqueUserReducer(state,action) {
            state.id = action.payload
        }

    }, extraReducers: (builder) => {
        builder
            .addCase(isUserLogInReducers.pending, (state) => {
                state.loading = true;
            })
            .addCase(isUserLogInReducers.fulfilled, (state, action) => {
                state.loading = false;
                state.isLoggedIn = true;
                if (action.payload == null) {
                    state.newUser = true;
                } else {
                    state.data.push(action.payload)
                }
            })
            .addCase(isUserLogInReducers.rejected, (state, action) => {
                state.loading = false;
                state.isLoggedIn = false;
                state.error = action.payload
            })
            // logout Reducers
            .addCase(isLogoutReducers.pending, (state) => {
                state.loading = true;
            })
            .addCase(isLogoutReducers.fulfilled, (state) => {
                state.isLoggedIn = false;
                state.loading = false;
                state.newUser = false;
                state.data = [];
            })
            .addCase(isLogoutReducers.rejected, (state, action) => {
                state.isLoggedIn = false;
                state.loading = false;
                state.error = action.payload;
            })
    }
})

export const {registerUser,uniqueUserReducer} = userSlice.actions
export default userSlice.reducer