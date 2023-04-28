import React from 'react'
import "./SignIn.css"
import { Button } from '../../commonComponent/button/Button'

export const SignIn = () => {
    return (
        <div className='signupScreen'>
            <form>
                <h1>Sign In</h1>
                <input placeholder='Email' type='email' />
                <input placeholder='Password' type='password' />
                <Button className="signupScreen-btn" type="submit" name="Sign In" />

                <h4><span className='signupScreen-grey'>New to Netflix?</span> <span className='signupScreen-link'>Sign Up now.</span></h4>
            </form>
        </div>
    )
}