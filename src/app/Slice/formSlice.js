import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {addDoc, collection, getDocs} from "firebase/firestore";
import {db, storage} from "../../config/firebase-config.js";
import {v4} from "uuid";
import {ref} from "@firebase/storage";
import {getDownloadURL, uploadBytes} from "firebase/storage";
import { async } from "@firebase/util";

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

export const reserachImageUpload =createAsyncThunk(
    "reserachImageUpload",
    async(imageFile)=>{
        const textV4 = v4()
        const folderRef = ref(storage,`Research/Image/${imageFile.name + textV4}`)


        try {
            await uploadBytes(folderRef, imageFile)
            const getUrlImage = await getDownloadURL(ref(storage,`Research/Image/${imageFile.name + textV4}`))
            return  getUrlImage
        } catch (e) {
            return e
        }
    }
)
export const researchGifUpload=createAsyncThunk(
    "researchGifUpload",
    async(gifFile)=>{
        const textV4= v4()
        const folderRef=ref(storage,`Research/Gif/${gifFile.name+textV4}`)

        try{
            await uploadBytes(folderRef,gifFile)
            const geturlGif=await getDownloadURL(ref(storage,`Research/Gif/${gifFile.name+textV4}`))
            return geturlGif

        }
        catch(e){
            return e

        }


    }
    
)
// export const researchLoading=createAsyncThunk(finalData,researchLoading) =>{
//     console.log("result");
//     const collectionList=collection(db,researchLoading)
//     try{
//         const dataStored=await addDoc(collectionList,finalData);
//         console.log(dataStored);
//     }
//     catch(e){
//         console.log(error);
//     }
// }







const formSlice = createSlice({
    name: "formSlice",
    initialState: {
        publication: {
            loading: false,
            isResult:false,
            data: "",
            error: false,
        },
        research: {
            loading: false,
            data: [],
            error: false,
        },
        researchUploadState :{
            loading:false,
            error:false,
            isUploaded:false,
            imageLoading:false,
            isImageUploaded:false,
            imageUrl :"",
            imageError:false,
            gifLoading:false,
            gifError:false,
            gifIsUploaded:false,
            gifUrl:"",

        },
        publicationUploadState :{
            loading:false,
            error:false,
            isUploaded:false,
            imageLoading:false,
            isImageUploaded:false,
            imageUrl:"",
            imageError:false,
           



        }

    },
    extraReducers :(builder)=>{
        builder.addCase(
            getPublicationFormData.pending,(state) =>{
                state.publication.loading=true,
                state.publication.isResult=true

            }
        )
        .addCase(
            getPublicationFormData.fulfilled,(state,action) =>{
                state.publication.loading=false
                state.publication.data =(action.payload)
            }
        )
        .addCase(
            getPublicationFormData.rejected,(state,action) =>{
                state.publication.loading=false
                state.publication.error = action.payload
            }
        )
            .addCase(
                reserachImageUpload.pending,(state)=>{
                    state.researchUploadState.imageLoading = true;
                }
            )
            .addCase(
                reserachImageUpload.fulfilled,(state,action) =>{
                    state.researchUploadState.imageLoading = false;
                    state.researchUploadState.imageUrl = action.payload;
                    state.researchUploadState.isImageUploaded= true;
                }
            )
            .addCase(
                reserachImageUpload.rejected,(state,action)=>{
                    state.researchUploadState.imageLoading = false;
                    state.researchUploadState.imageError = action.payload;
                }
            )
            .addCase(
                researchGifUpload.pending,(state)=>{
                state.researchUploadState.gifLoading=true;
              }
            )
            .addCase(
                researchGifUpload.fulfilled,(state,action)=>{
                    state.researchUploadState.gifLoading=false;
                    state.researchUploadState.gifUrl=action.payload;
                    state.researchUploadState.gifIsUploaded=true;

                }

            )
            .addCase(
                researchGifUpload.rejected,(state,action)=>{
                    state.researchUploadState.gifLoading=false;
                    state.researchUploadState.gifError=action.payload;

                }

            )
            // .addCase(
            //     researchUpload.pending,(state)=>{
            //     state.researchUploadState.loading=true;

            //     }

            // )
            // .addCase(
            //     researchUpload.fulfilled,(state)=>{
            //         state.researchUploadState.loading=false;
            //         state.researchUploadState.isUploaded=true;
            //     }
            // )
            // .addCase(researchUpload.rejected,(state,action)=>{
            //     state.researchUploadState.loading=false;
            //     state.researchUploadState.error=action.payload;

            // })

}
            
                

            
    
})
export default formSlice.reducer