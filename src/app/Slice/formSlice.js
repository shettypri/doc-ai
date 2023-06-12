import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {addDoc, collection, getDocs} from "firebase/firestore";
import {db, storage} from "../../config/firebase-config.js";
import {v4} from "uuid";
import {ref} from "@firebase/storage";
import {getDownloadURL, uploadBytes} from "firebase/storage";
import {doc, getDoc} from "@firebase/firestore";

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
export const getPublicationDataById = createAsyncThunk(
    "getPublicationDataById",
    async(id)=>{
        try {
            const docRef = await doc(db, "Publications", id)
            const publicationData = await getDoc(docRef)
            return await publicationData.data()
        } catch (error) {
            console.log(`Error is ${error}`);
            return error
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
export const researchDataIntoFirestore=createAsyncThunk(
    "researchLoading",
    async(finalData)=>{
        const collectionList=collection(db,'Research11')
        try{
            const dataStored=await addDoc(collectionList,finalData);
            return dataStored
        }
        catch(e){
           return e
        }
    }
)

const formSlice = createSlice({
    name: "formSlice",
    initialState: {
        publication: {
            loading: false,
            isResult:false,
            data: "",
            error: false,
        },
        publicationById:{
            loading:false,
            data:"",
            error:false,
            isError:false,
            isExisted:false,
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
            isBothFileUploaded:false,

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
                state.publication.loading=true;
                
            }
        )
        .addCase(
            getPublicationFormData.fulfilled,(state,action) =>{
                state.publication.loading=false
                state.publication.isResult=true
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
                    state.researchUploadState.isBothFileUploaded=true;


                }

            )
            .addCase(
                researchGifUpload.rejected,(state,action)=>{
                    state.researchUploadState.gifLoading=false;
                    state.researchUploadState.gifError=action.payload;

                }

            )
            .addCase(
                researchDataIntoFirestore.pending,(state)=>{
                state.researchUploadState.loading=true;

                }

            )
            .addCase(
                researchDataIntoFirestore.fulfilled,(state)=>{
                    state.researchUploadState.loading=false;
                    state.researchUploadState.isUploaded=true;
                }
            )
            .addCase(researchDataIntoFirestore.rejected,(state,action)=>{
                state.researchUploadState.loading=false;
                state.researchUploadState.error=action.payload;

            })
            .addCase(
                getPublicationDataById.pending,(state)=>{
                    state.publicationById.loading=true;
                }
            )
            .addCase(
                getPublicationDataById.fulfilled,(state,action)=>{
                    state.publicationById.loading=false;
                    state.publicationById.isExisted=true;
                    state.publicationById.data=action.payload;
                }
            )
            .addCase(
                getPublicationDataById.rejected, (state,action) => {
                    state.publicationById.loading=false;
                    state.publicationById.error=action.payload;
                    state.publicationById.isError=true;

                }
            )

}
            
                

            
    
})
export default formSlice.reducer