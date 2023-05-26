import { getDownloadURL,  ref, uploadBytes } from "firebase/storage";
import { storage } from "../../../config/firebase-config";
import { v4 } from "uuid";


const ImageUpload = async(uploadImage,fileName,folderName) => {
    if(!uploadImage)
        return

    const textV4 = v4()
    const fileFolderRef = ref(storage,`${folderName}/${fileName + textV4}`)
    try {
        const ressult = await uploadBytes(fileFolderRef,uploadImage)
        const imageUrl = await getDownloadURL(ref(storage,`${folderName}/${fileName + textV4}`))
        return imageUrl
    } catch (error) {
        console.error(error);
    }
}

export default ImageUpload