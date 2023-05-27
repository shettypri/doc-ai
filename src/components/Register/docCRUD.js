import { getDownloadURL, ref, uploadBytes } from "@firebase/storage"
import { db, storage } from "../../config/firebase-config"
import { v4 } from "uuid"
import { doc, getDoc } from "firebase/firestore"


export const uploadImgToStore = async (docImage, docImageName) => {
    if (!docImage)
        return

    const textV4 = v4()
    const folderRef = ref(storage, `Doctors/${docImageName + textV4}`)
    try {
        // eslint-disable-next-line no-unused-vars
        const imageUpload = await uploadBytes(folderRef, docImage)
        const getImageUrl = await getDownloadURL(ref(storage, `Doctors/${docImageName + textV4}`))
        return getImageUrl
    } catch (error) {
        console.log(error);
    }
}

export const storeDocIntoDb = async () => {

}

export const getPendingRequest = async (docUid) => {
    try {
        const docRef = await doc(db, "users", docUid)
        const pendingUsers = await getDoc(docRef)
        return await pendingUsers.data()
    } catch (error) {
        console.log(`Error is ${error}`);
        return error
    }
}