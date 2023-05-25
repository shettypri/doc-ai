import PhoneInput from "react-phone-input-2"
import "../../Styles/Register/Register.css"
import { useState } from "react"
import { RecaptchaVerifier } from "firebase/auth"
import singInUp from "./singInUp"
import otpVerfication from "./otpVerfication"

const Register = () => {
    const [mobileNumber, setMobileNumber] = useState("")
    const [otpNumber, setOtpNumber] = useState("")

    const handlePhone = (e) => {
        setMobileNumber(e)
    }
    const getOtpButton = async() => {
        try {
            const response = await singInUp(mobileNumber)
            console.log(response);
        } catch (error) {
            console.log(error);
        }
    } 

    const otpVerifyBtn = async() =>{
        const resultVerification = otpVerfication(otpNumber)
        console.log(resultVerification);
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
                            (e) =>{
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