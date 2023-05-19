// import React from 'react'
import { useState } from "react"
import "../../Styles/Login/Login.css"
const Login = () => {
  const [loginCredentials, setloginCredentials] = useState({
    "username": "",
    "password": ""
  })

  const handleChange = (e) =>{
    setloginCredentials({
      ...loginCredentials,[e.target.name]:e.target.value
    })
  }

  const handleLogin = () => {
    console.log(loginCredentials);
  }
  return (
    <>
      <div className="login-main">
        <div className="center">
          <p>Login</p>
          <div>
            <div className="txt_field">
              <input type="text" required
                value={loginCredentials.username}
                name="username"
                onChange={handleChange}
              />
              <span />
              <label>Username</label>
            </div>
            <div className="txt_field">
              <input type="password" required
                value={loginCredentials.password}
                name="password"
                onChange={handleChange}
              />
              <span />
              <label>password</label>
            </div>
            {/* <div className="pass">Forgot Password?</div> */}
            <div className="login-btn">
              <button type="submit" defaultValue="Login"
                onClick={handleLogin}
              >
                Login
              </button>
            </div>

          </div>
        </div>
      </div>

    </>
  )
}

export default Login