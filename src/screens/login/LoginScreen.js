import React from 'react'
import "./LoginScreen.css"
import { Button } from '../../commonComponent/button/Button'

function LoginScreen() {
    return (
        <div className='loginScreen'>
            <div className='loginScreen-background'>
                <img
                    className='loginScreen-logo'
                    src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png" alt="" />
                <Button className="loginScreen-btn" name="Signup"/>
            </div>
        </div>
    )
}

export default LoginScreen