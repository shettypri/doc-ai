import { addDoc, collection } from "firebase/firestore"
import { db } from "../../../config/firebase-config";

const storeInDataBase = async (finalData, folderName) => {
    const collectionList = collection(db,folderName)
    try {
        const dataStored = await addDoc(collectionList, finalData);
        console.log(dataStored);
    } catch (error) {
        console.log(error);
    }
}

export default storeInDataBase