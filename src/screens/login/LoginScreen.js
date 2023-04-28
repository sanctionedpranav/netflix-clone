import React, { useState } from 'react'
import "./LoginScreen.css"
import { Button } from '../../commonComponent/button/Button'
import { SignIn } from '../signinScreen/SignIn';

function LoginScreen({ h1, h2, h3 }) {
    const [signIn, setSignin] = useState(false);

    return (
        <div className='loginScreen'>
            <div className='loginScreen-background'>
                <img
                    className='loginScreen-logo'
                    src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png" alt="" />
                <Button onClick={() => { setSignin(true) }} className="loginScreen-btn" name="Signup" />
            </div>
            <div className='loginScreen-gradient'></div>
            <div className='loginScreen-body'>
                {signIn ? (<SignIn />)
                    : (
                        <>
                            <h1 className=''>
                                {h1}
                            </h1>
                            <h2>
                                {h2}
                            </h2>
                            <h3>
                                {h3}
                            </h3>
                            <div className='loginScreen-input'>
                                <form>
                                    <input type='email' placeholder='Email Address' />
                                    <Button onClick={() => { setSignin(true) }} name="Get Started" className="loginScreen-getStarted" />
                                </form>
                            </div>
                        </>
                    )}

            </div>
        </div>
    )
}

export default LoginScreen