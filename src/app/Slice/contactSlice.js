import {addDoc, collection, doc, getDoc} from "@firebase/firestore";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { db } from "../../config/firebase-config";
import {getDocs, updateDoc} from "firebase/firestore";

export const GetContactFormData=createAsyncThunk(
    " GetContactFormData",
    async (formName)=>{
        const firebaseCollection=collection(db,formName)
        try{
            const data=await getDocs(firebaseCollection)
            const filterData=data.docs.map((doc)=>({
                ...doc.data(),
                id:doc.id
            }))
            return filterData
        }
        catch (e){
            return e;
        }

    }
)

export const contactDetails=createAsyncThunk(
    "contactDetails",
    async(contactData)=>{
        const collectionList=collection(db,"contacts")
        try {
            const dataStored = await addDoc(collectionList, contactData)
            return dataStored;
        } catch (e) {
            return e;
        }

    }
)

export const contactDetailsByIdReducer=createAsyncThunk(
    "contactDetailsById",
   async (id)=>{
        const contactcollection=doc(db,"contacts",id)
       try{
            const hideContact=await updateDoc(contactcollection,{
                isResponde:true
            })
           return `${id}`
       }
       catch (e){
            return e

       }

   }
)


const contactSlice =createSlice ({
    name:"contactReducer",
    initialState:{
        contactstate:{
            loading:false,
            isResult:false,
            data:"",
            error:false
        },
        contact:{
            loading:false,
            error:false,
            success:false,
        },
        contactDisplayState:{
            loading:false,
            showResult:false,
            error:false,
        }

        },
       
    extraReducers:(builder)=>{
        builder.addCase(
            contactDetails.pending,(state)=>{
                state.contact.loading=true;
            }

        )
        .addCase(
            contactDetails.fulfilled,(state)=>{
                state.contact.loading=false;
                state.contact.success=true;
                
            }
        )
        .addCase(
            contactDetails.rejected,(state,action)=>{
                state.contact.loading=false;
                state.contact.error=action.payload;
            }
        )
            .addCase(GetContactFormData.pending,(state)=>{
                state.contactstate.loading=true

            })
            .addCase(GetContactFormData.fulfilled,(state,action)=>{
                state.contactstate.loading=false;
                state.contactstate.isResult=true;
                state.contactstate.data=(action.payload);
            })
                .addCase(GetContactFormData.rejected,(state,action)=>{
                    state.contactstate.loading=false;
                    state.contactstate.error=true;
        }
        )
            .addCase( contactDetailsByIdReducer.pending,(state)=>{
                state.contactDisplayState.loading=true;
            })
            .addCase(contactDetailsByIdReducer.fulfilled,(state)=>{
                state.contactDisplayState.loading=false;
                state.contactDisplayState.showResult=true;
            })
            .addCase(contactDetailsByIdReducer.rejected,(state,action)=>{
                state.contactDisplayState.loading=false;
                state.contactDisplayState.error=action.payload;
            })


    }

})





export default contactSlice.reducer