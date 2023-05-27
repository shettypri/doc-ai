import PhoneInput from "react-phone-input-2"
import "../../Styles/Login/Otp_Login.css"
import React from 'react'

const Otp_Login = () => {
    return (
        <>
            <div className="otp-login-main">
                <div className="otp-number">
                    <div className="otp-lable">
                        <label>
                            Enter the Number
                        </label>
                    </div>

                    <div className="otp-input-number">
                        <PhoneInput
                            country={"in"}
                        />
                    </div>

                    <div className="otp-get-button">
                        <button>
                            Get OTP
                        </button>
                    </div>
                </div>

                <div className="otp-code-main">
                    <div className="otp-lable">
                        <label>
                            Enter OTP 
                        </label>

                    </div>
                    <div className="otp-code">

                    </div>
                    <div>

                    </div>
                </div>
            </div>

        </>
    )
}

export default Otp_Login