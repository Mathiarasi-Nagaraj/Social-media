import React from 'react'
import './Register.css';
export default function Register() {
  return (
    <div className='Register'>
          <div className="loginwrapper">
        <div className="loginleft">
            <h3 className="loginlogo">SnapTalk</h3>
            <span className="logindesc">
                Connect with friends around the world
            </span>
        </div>
        <div className="loginright">
            <div className="loginbox">
            <input type="text" placeholder='Username' className='logininput'></input>
                <input type="text" placeholder='email' className='logininput'></input>
                <input type="password" placeholder='password' className='logininput'></input>
                <input type="password" placeholder='password Again' className='logininput'></input>
        <button className='loginbutton'>Register</button>

        <button className='loginRegisterbutton'>Login In </button>
            </div>
        </div>
        </div>
    </div>
  )
}
