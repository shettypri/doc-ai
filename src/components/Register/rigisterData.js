
import {  doc, setDoc } from "firebase/firestore"
import { db } from "../../config/firebase-config"

const rigisterData = async(user) => {
    const newUser = {
        isFormFilled : false,
        isAdmin: false
    }
    try {
        const newData = await setDoc(doc(db,"USERS",`${user.uid}`),newUser)
        console.log("ADDED TO DATABASE");
        console.log(newData);
    } catch (error) {
        console.log(error);
    }
}

export default rigisterData