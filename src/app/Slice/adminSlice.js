import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {collection, getDocs, doc, deleteDoc, updateDoc} from "firebase/firestore";
import {db} from "../../config/firebase-config.js";

export const getPendingRequestReducers = createAsyncThunk(
    "getPendingRequestReducers",
    async (collectionName) => {
        const firebaseCollectionName = collection(db, collectionName)

        try {
            const getPendingRequest = await getDocs(firebaseCollectionName)
            const requestData = getPendingRequest.docs.map((dataArray) => ({
                    ...dataArray.data()
                })
            )
            const filterData = requestData.filter(doctor => doctor.isDocAuthorized == false)
            return filterData
        } catch (e) {
            return e
        }
    }
)

export const acceptDoctorReducers = createAsyncThunk(
    "acceptDoctorReducers",
    async (id) => {
        const doctorCollection = doc(db, "users", id)

        try {
            const doctorAccepted = await updateDoc(doctorCollection, {
                isDocAuthorized: true
            })
            return `Accepted Sucessfully of ${id}`
        } catch (e) {
            return e
        }
    }
)
export const allAcceptedDoctorReducers = createAsyncThunk(
    "allAcceptedDoctorReducers",
    async () => {
        const firebaseCollectionName = collection(db, "users")

        try {
            const getPendingRequest = await getDocs(firebaseCollectionName)
            const requestData = getPendingRequest.docs.map((dataArray) => ({
                    ...dataArray.data()
                })
            )
            const filterData = requestData.filter(doctor =>
                (doctor.isDocAuthorized === true && doctor.isDocShow === true)
            )
            return filterData
        } catch (e) {
            return e
        }
    }
)

export const deleteDoctorByIdReducer = createAsyncThunk(
    "deleteDoctorByIdReducer",
    async (id) => {
        const doctorCollection = doc(db, "users", id)

        try {
            const hideDoctor = await updateDoc(doctorCollection, {
                isDocShow: false
            })
            return `The data is hidden for ${id}`
        } catch (e) {
            return e
        }
    }
)

export const rejectDoctorReducers = createAsyncThunk(
    "rejectDoctorReducers",
    async (id) => {
        const deleteDoctorById = doc(db, "users", id)
        try {
            const isDeleted = await deleteDoc(deleteDoctorById)
            return `Deleted Sucessfully of ${id}`
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
        pendingRequestState: {
            loading: false,
            error: false,
            data: "",
            isDataFetched: false,
        },
        pendingDoctorRequest: "",
        isPendingFetched: false,
        doctorUpdate: [],
        isDocUpdated: false,
        isDoctorRejected: false,
        docRejectError: "",
        isDoctorAccepted: false,
        docUpdate: "",
        docAcceptError: "",
        acceptAlldocList: "",
        acceptedAllDoctorList: {
            loading: false,
            error: false,
            data: "",
            isDataFetched: false,
        },

        deleteDocOneList: false,
        deleteDocOneError: "",
        deleteDocOneLoading: false,
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

                    if (state.pendingDoctorRequest.length == 0) {
                        state.pendingDoctorRequest = ""
                    }
                    state.pendingDoctorRequest = (action.payload);
                    state.isPendingFetched = true;
                }
            )
            .addCase(
                getPendingRequestReducers.rejected, (state, action) => {
                    state.loading = false;
                    state.error = action.payload
                }
            )
            .addCase(
                rejectDoctorReducers.pending, (state) => {
                    state.loading = true
                })
            .addCase(rejectDoctorReducers.fulfilled, (state, action) => {
                state.isDoctorRejected = true;
                state.loading = false;
            })
            .addCase(
                rejectDoctorReducers.rejected, (state, action) => {
                    state.loading = false;
                    state.docRejectError = action.payload;
                }
            )
            .addCase(
                acceptDoctorReducers.pending, (state) => {
                    state.loading = true;

                }
            )
            .addCase(
                acceptDoctorReducers.fulfilled, (state, action) => {
                    state.docUpdate = action.payload;
                    state.loading = false;
                    state.isDoctorAccepted = true;
                }
            )
            .addCase(
                acceptDoctorReducers.rejected, (state, action) => {
                    state.loading = false;
                    state.docAcceptError = action.payload
                }
            )
            .addCase(
                allAcceptedDoctorReducers.pending, (state) => {
                    state.acceptedAllDoctorList.loading=true;
                }
            )
            .addCase(
                allAcceptedDoctorReducers.fulfilled, (state, action) => {
                    state.acceptedAllDoctorList.loading=false;
                    state.acceptedAllDoctorList.isDataFetched =true;
                    if( state.acceptedAllDoctorList.data.length !== 0){
                        state.acceptedAllDoctorList.data =""
                    }
                    state.acceptedAllDoctorList.data = action.payload
                }
            )
            .addCase(
                allAcceptedDoctorReducers.rejected, (state, action) => {
                    state.acceptedAllDoctorList.loading=false;
                    state.acceptedAllDoctorList.error=action.payload;
                }
            )
            .addCase(
                deleteDoctorByIdReducer.pending, (state) => {
                    state.deleteDocOneLoading = true;
                }
            )
            .addCase(deleteDoctorByIdReducer.fulfilled, (state) => {
                    state.deleteDocOneLoading = false
                    state.deleteDocOneList = true;
                }
            )
            .addCase(
                deleteDoctorByIdReducer.rejected, (state, action) => {
                    state.deleteDocOneLoading = false;
                    state.deleteDocOneError = action.payload
                }
            )
    }
})

export default adminSlice.reducer
