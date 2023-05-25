import PhoneInput from "react-phone-input-2"
import "../../Styles/Register/Register.css"
import { useState } from "react"
import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth"
import { auth } from "../../config/firebase-config"
import { useNavigate } from "react-router-dom"
import registerData from "./rigisterData"

const Register = () => {
    const [mobileNumber, setMobileNumber] = useState("")
    const [otpNumber, setOtpNumber] = useState("")
    const [captchaResult, setCaptchaResult] = useState({})
    const navigate = useNavigate()

    let resultSingUp
    const handlePhone = (e) => {
        setMobileNumber(e)
    }
    const getOtpButton = async () => {
        const numberMobile = "+" + mobileNumber
        try {
            const captchaResult = await new RecaptchaVerifier('recaptcha-container', {}, auth);
            resultSingUp = await signInWithPhoneNumber(auth, numberMobile, captchaResult)
            setCaptchaResult(resultSingUp)
            
        } catch (error) {
            console.log("error", error);
        }

    }

    const otpVerifyBtn = async () => {
        try {
            console.log(captchaResult);
            const finalResult = await captchaResult.confirm(otpNumber)
            console.log(finalResult);
            if(finalResult){
                registerData(finalResult.user)
            }
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <>
            <div className="register-main">
                <div className="register-card">
                    <div className="register-content">
                        <h3>
                            Phone number
                        </h3>
                        <div>
                            <PhoneInput
                                country={"in"}
                                className="phone-input"
                                onChange={handlePhone}
                            />
                        </div>

                        <div id="recaptcha-container" />


                        <div>
                            <button className="otp-btn"
                                onClick={getOtpButton}
                                id="sign-in-button"
                            >
                                get Otp
                            </button>
                        </div>

                        <div className="otp-result">
                            <h3>
                                Verify the otp
                            </h3>

                        </div>

                        <div className="opt-section">
                            <input type="text"
                                onChange={
                                    (e) => {
                                        setOtpNumber(e.target.value)
                                    }
                                }
                            />
                        </div>
                        <div className="verify-btn">
                            <button onClick={otpVerifyBtn}
                            >
                                Verify OTP
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Register