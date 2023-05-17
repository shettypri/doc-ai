// import React from 'react'
import { useState } from "react"
import "../../Styles/Login/Login.css"
const Login = () => {
    const [username, setsUername] = useState("")
    const [password, setPassword] = useState("")


    const handleLogin = () => {
        const credentials = {
            "username": username,
            "password": password,
        }
        console.log(credentials);
    }
    return (


        <>
            <div className="login-main">
                <div className="center">
                    <p>Login</p>
                    <form method="post">
                        <div className="txt_field">
                            <input type="text" required
                                value={username}
                                onChange={
                                    (e) => {
                                        setsUername(e.target.value);
                                    }
                                }
                            />
                            <span />
                            <label>Username</label>
                        </div>
                        <div className="txt_field">
                            <input type="password" required
                                value={password}
                                onChange={
                                    (e) => {
                                        setPassword(e.target.value);
                                    }
                                }

                            />
                            <span />
                            <label>password</label>
                        </div>
                        <div className="pass">Forgot Password?</div>
                        <button type="submit" defaultValue="Login"
                            onClick={handleLogin}
                        >
                            Login
                        </button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Login