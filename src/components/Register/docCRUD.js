import { getDownloadURL, ref, uploadBytes } from "@firebase/storage"
import { db, storage } from "../../config/firebase-config"
import { v4 } from "uuid"
import { doc } from "firebase/firestore"


export const uploadImgToStore =  async(docImage,docImageName) =>{
    if(!docImage)
        return

    const textV4 = v4()
    const folderRef = ref(storage,`Doctors/${docImageName + textV4}`)
    try {
        const imageUpload = await uploadBytes(folderRef,docImage)
        const getImageUrl = await getDownloadURL(ref(storage,`Doctors/${docImageName + textV4}`))
        return getImageUrl
    } catch (error) {
        console.log(error);
    }
}

export const storeDocIntoDb = async() =>{
    // const docRef = doc(db,"USERS",)
    // const newDoc = await
}