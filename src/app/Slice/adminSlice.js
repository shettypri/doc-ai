import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {collection, getDocs} from "firebase/firestore";
import {db} from "../../config/firebase-config.js";

export const getPendingRequestReducers = createAsyncThunk(
    "getPendingRequestReducers",
    async (collectionName) => {
        const firebaseCollectionName = collection(db, collectionName)

        try {
            const getPendingRequest = await getDocs(firebaseCollectionName)
            const filterData = getPendingRequest.docs.map((dataArray) => ({
                ...dataArray.data()
            })
        )
            return filterData
        } catch (e) {
            return e
        }
    }
)
const adminSlice = createSlice({
    name: "adminSlice",
    initialState: {
        loading: false,
        error: false,
        pendingDoctorRequest: "",
        isPendingFetched: false,
        doctorUpdate: [],
        isDocUpdated: false,

    },
    extraReducers: (builder) => {
        builder.addCase(
            getPendingRequestReducers.pending, (state) => {
                state.loading = true;

            }
        )
            .addCase(
                getPendingRequestReducers.fulfilled, (state, action) => {
                    state.loading = false;
                    if(state.pendingDoctorRequest.length == 0){
                        state.pendingDoctorRequest =""
                    }
                    state.pendingDoctorRequest =(action.payload);
                    state.isPendingFetched = true;
                }
            )
            .addCase(
                getPendingRequestReducers.rejected, (state, action) => {
                    state.loading = false;
                    state.isPendingFetched = false;
                    state.error = action.payload
                }
            )
    }
})

export default adminSlice.reducer
