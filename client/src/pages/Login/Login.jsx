import React from 'react'
import './Login.css'
export default function Login() {
  return (
    <div className='Login'>
        <div className="loginwrapper">
        <div className="loginleft">
            <h3 className="loginlogo">SnapTalk</h3>
            <span className="logindesc">
                Connect with friends around the world
            </span>
        </div>
        <div className="loginright">
            <div className="loginbox">
                <input type="text" placeholder='email' className='logininput'></input>
                <input type="password" placeholder='password' className='logininput'></input>
        <button className='loginbutton'>Login</button>
        <span className='forgetpassword'>Forget Password</span>
        <button className='loginRegisterbutton'>Register</button>
            </div>
        </div>
        </div>
    </div>
  )
}
