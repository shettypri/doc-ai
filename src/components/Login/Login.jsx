import { useState } from "react"
import "../../Styles/Login/Login.css"
// import { useDispatch } from "react-redux"
// import { singInUsers } from "../../app/Reducers/LoginReducer"
// import {signInWithEmailAndPassword } from "firebase/auth";
// import { auth } from "../../config/firebase-config";
import { signIn } from "./signIn";
import { Link } from "react-router-dom";

const Login = () => {
  const [loginCredentials, setloginCredentials] = useState({
    "username": "",
    "password": ""
  })

  const handleChange = (e) => {
  
      setloginCredentials({
        ...loginCredentials, [e.target.name]: e.target.value
      })
  }
  // const dispatch = useDispatch()

  const handleLogin = (loginCredentials) => {
    
    signIn(loginCredentials)
    // dispatch(singInUsers(loginCredentials.em))
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
                onClick={() =>
                  handleLogin(loginCredentials)}
              >
                Login
              </button>
            </div>
            <div className="register-btn">
                <Link to="/register">
                  New User?
                </Link>
              </div>

          </div>
        </div>
      </div>

    </>
  )
}

export default Login