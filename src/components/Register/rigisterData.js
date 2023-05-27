
import {  doc, setDoc } from "firebase/firestore"
import { db } from "../../config/firebase-config"

const rigisterData = async(user) => {
    const newUser = {
        id:user.uid,
        isFormFilled : false,
        isAdmin: false,
        isDocAuthorized:false
    }
    try {
        const newData = await setDoc(doc(db,"users",`${user.uid}`),newUser)
        return newData
    } catch (error) {
        console.log(error);
    }
}

export default rigisterData