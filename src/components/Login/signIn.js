import {signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../config/firebase-config";

export const signIn = async(usersCredentials) => { 
    // console.log(usersCredentials);
    try {
        const loginResult = await signInWithEmailAndPassword(
            auth,usersCredentials.username,usersCredentials.password
        )
        console.log(loginResult);
        
    } catch (error) {
        console.error("The errors IS -----",error);
    }
}

