import React from 'react'
import {ClipLoader} from 'react-spinners/'
import "../../Styles/Alert/loginLoader.css"
const LoginLoading = () => {
  return (
    <>
            <div className={"login-loader"}>
                <ClipLoader
                    color="#000000"
                    size={40}
                />
            </div>


        </>
  )
}

export default LoginLoading