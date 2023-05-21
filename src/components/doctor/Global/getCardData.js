import { collection, getDocs } from "firebase/firestore"
import { db } from "../../../config/firebase-config"

const getCardData = async(collectionName) => {
    const firebaseCollection = collection(db,collectionName)
    try {
        const data = await getDocs(firebaseCollection)
        const filterData = data.docs.map((doc) =>({
            ...doc.data(),
            id:doc.id
        }))
        return filterData
        // console.log(filterData);
    } catch (error) {
        console.log(error);
    }
}

export default getCardData