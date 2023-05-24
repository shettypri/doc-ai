import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
import { auth } from "../../config/firebase-config";


const singInUp = async (phoneNumber) => {
    const numberMobile  = "+" + phoneNumber
    try {
        const captchaResult = await new RecaptchaVerifier('recaptcha-container', {}, auth);
        return signInWithPhoneNumber(auth,numberMobile,captchaResult )

    } catch (error) {
        console.log("error",error);
    }
}

export default singInUp