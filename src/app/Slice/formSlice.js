import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {collection, getDocs} from "firebase/firestore";
import {db} from "../../config/firebase-config.js";

export const getPublicationFormData = createAsyncThunk(
    "getPublicationFormData",
    async (formName) => {
        const firebaseCollection = collection(db, formName)

        try {
            const data = await getDocs(firebaseCollection)
            const filterData = data.docs.map((doc) =>({
                ...doc.data(),
                id:doc.id
            }))
            return filterData
        } catch (e) {
            return e
        }
    }
)


const formSlice = createSlice({
    name: "formSlice",
    initialState: {
        publication: {
            loading: false,
            data: "",
            error: false,
        },
        research: {
            loading: false,
            data: "",
            error: false,
        }
    },
    extraReducers :(builder)=>{
        builder.addCase(
            getPublicationFormData.pending,(state) =>{
                state.publication.loading=true,
                state.publication.data=""
            }
        )
        builder.addCase(
            getPublicationFormData.fulfilled,(state,action) =>{
                state.publication.loading=false
                state.publication.data=action.payload
            }
        )
        builder.addCase(
            getPublicationFormData.rejected,(state,action) =>{
                state.publication.loading=false
                state.publication.error = action.payload
            }
        )
    }
})
export default formSlice.reducer