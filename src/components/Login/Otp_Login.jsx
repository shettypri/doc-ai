import PhoneInput from "react-phone-input-2"
import "../../Styles/Login/Otp_Login.css"
import OTPInput from "otp-input-react";
import {useState} from 'react'
import {auth} from "../../config/firebase-config";
import {RecaptchaVerifier, signInWithPhoneNumber} from "firebase/auth";
import {useDispatch, useSelector} from "react-redux";
import {isUserLogInReducers, uniqueUserReducer} from "../../App/Slice/userSlice.js";
import {useNavigate} from "react-router-dom";

const Otp_Login = () => {
    // console.log(auth.currentUser);
    const [otp, setOtp] = useState()
    const [mobileNumber, setMobileNumber] = useState("")
    const [captchaResult, setCaptchaResult] = useState({})
    const [otpSection, setOtpSection] = useState(true)

    const dispatch = useDispatch()

    const {data, error, isLoggedIn, loading, newUser} = useSelector(state => state.userReducer)
    const navigate = useNavigate()
    const handleOtpChange = (e) => {
        // console.log(otp);
        setOtp(e)
    }

    const handleNumber = (e) => {
        setMobileNumber(e)

    }
    const getOtpByNumber = async () => {
        setOtpSection(false)
        const numberMobile = "+" + mobileNumber
        try {
            const captchaResult = await new RecaptchaVerifier('recaptcha-container', {}, auth);
            const captchVeryfied = await signInWithPhoneNumber(auth, numberMobile, captchaResult)
            if (captchVeryfied) {
                setCaptchaResult(captchVeryfied)
            }
        } catch (error) {
            console.log("Login otp Error => ", error);
        }

    }
    const verifyOtp = async () => {
        try {
            const finalResult = await captchaResult.confirm(otp)
            console.log("result iis",finalResult)
            if (finalResult) {
                console.log("hello again bro",finalResult.user.uid)
                dispatch(
                    isUserLogInReducers(finalResult.user.uid)
                )
                dispatch(uniqueUserReducer(finalResult.user.uid))
                // changedState()
                console.log(error, isLoggedIn, loading, newUser)
            }
        } catch (error) {
            console.log("Entered otp => \n\n\n\n", error);
        }
    }

    if (isLoggedIn) {
        if (newUser) {
            navigate("/UserDetails")
        } else {
            navigate("/")
        }
    }
    // const changedState = ()=>{
    //     console.log(error, isLoggedIn, loading, newUser)
    //             if (isLoggedIn) {
    //                 if (newUser ) {
    //                     navigate("/UserDetails")
    //                 } else {
    //                     navigate("/")
    //                 }
    //             // }
    //         }
    // }

    return (<>
            <div className="otp-login-main">
                {otpSection ? (<div className="otp-number">
                        <div className="otp-lable">
                            <label>
                                Enter the Number
                            </label>
                        </div>

                        <div className="otp-input-number">
                            <PhoneInput
                                country={"in"}
                                onChange={handleNumber}
                                value={mobileNumber}
                            />
                        </div>


                        <div className="otp-get-button">
                            <button onClick={getOtpByNumber}>
                                Get OTP
                            </button>
                        </div>


                    </div>

                ) : (

                    <div className="otp-code-main">
                        <div className="otp-lable">
                            <label>
                                Enter OTP
                            </label>

                        </div>
                        <div className="otp-code">
                            <OTPInput
                                className="otp-input"
                                value={otp}
                                onChange={handleOtpChange}
                                OTPLength={6}
                                otpType="number"
                                disabled={false}
                                inputClassName="otp-input"
                            />
                        </div>
                        <div className="otp-get-button">
                            <button
                                onClick={verifyOtp}
                            >
                                verify Otp
                            </button>
                        </div>
                        <div className="extra-otp-option">
                            <div className="otp-number-back">
                                <button onClick={() => setOtpSection(true)}>
                                    want to change {mobileNumber}
                                </button>
                            </div>

                            {/* <div className="resend-otp-btn">
                                <ResendOTP 
                                className="otpBtn"
                                onResendClick={
                                    () => console.log("Resend clicked")} 
                                />
                                </div> */}

                        </div>

                    </div>)}


                <div id="recaptcha-container"/>

            </div>

        </>)
}

export default Otp_Login