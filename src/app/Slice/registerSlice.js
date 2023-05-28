import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {setDoc,doc} from "firebase/firestore";
import {db, storage} from "../../config/firebase-config.js";
import {v4} from "uuid";
import {ref} from "@firebase/storage";
import {getDownloadURL, uploadBytes} from "firebase/storage";

export const imageUploadReducers =createAsyncThunk(
    "imageUploadReducers",
    async(imageFile)=>{

        try {
            const textV4 = v4()
            const folderRef = ref(storage, `Doctors/${imageFile.name + textV4}`)
            await uploadBytes(folderRef, imageFile)
            const getImageUrl = await getDownloadURL(ref(storage, `Doctors/${imageFile.name + textV4}`))
            return await getImageUrl
        } catch (e) {
            return e
        }
    }
)
export const dataUploadFireBaseReducers = createAsyncThunk(
    "dataUploadFireBaseReducers",
    async(newDoctorInfo) =>{
        // auth.auth.currentUser.uid
        try {
            const isDataInserted = await setDoc(
                doc(db, "users", `${newDoctorInfo.id}`)
            ,newDoctorInfo)
            return isDataInserted
        } catch (e) {
            return e
        }
    }
)
const registerSlice = createSlice({
    name: "registerSlice",
    initialState: {
        loading: false,
        isDataUploaded:false,
        resultInsert:"",
        error: false,
        isImageUploaded:false,
        imageError:"",
        imageUrl:""
    },
    extraReducers:(builder) =>{

        builder
            .addCase(
                imageUploadReducers.pending,(state)=>{
                    state.loading = true;
                })
            .addCase(
                imageUploadReducers.fulfilled,(state,action) =>{
                    state.loading = false;
                    state.imageUrl = action.payload
                    state.isImageUploaded = true;
                })
            .addCase(
                imageUploadReducers.rejected,(state,action) =>{
                    state.loading = false;
                    state.imageError = action.payload
                })

            .addCase(
            dataUploadFireBaseReducers.pending,(state)=>{
                state.loading = true;
            })
            .addCase(
                dataUploadFireBaseReducers.fulfilled,(state,action)=>{
                    state.loading =false;
                    state.isDataUploaded = true;
                    state.resultInsert = action.payload
                }
            )
            .addCase(
                dataUploadFireBaseReducers.rejected,(state,action)=>{
                    state.loading = false;
                    state.error = action.payload;
                    state.isDataUploaded = false;
                }
            )

    }

})

export default registerSlice.reducer