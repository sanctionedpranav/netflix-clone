import React, { useRef } from 'react'
import "./SignIn.css"
import { Button } from '../../commonComponent/button/Button'
import { auth } from '../../firebase';

export const SignIn = () => {
    const emailRef = useRef(null);
    const passwordRef = useRef(null);

    const register = (e) => {
        e.preventDefault();

        auth.createUserWithEmailAndPassword(
            emailRef.current.value,
            passwordRef.current.value
        ).then((authUser) => {
            console.log(authUser);
        }).catch((error) => {
            alert(error.message)
        })
    };
    const signIn = (e) => {
        e.preventDefault();

        auth.signInWithEmailAndPassword(
            emailRef.current.value,
            passwordRef.current.value
        ).then((authUser) => {
            console.log(authUser);
        }).catch((error) => {
            alert(error.message)
        })
    }


    return (
        <div className='signupScreen'>
            <form>
                <h1>Sign In</h1>
                <input ref={emailRef} placeholder='Email' type='email' />
                <input ref={passwordRef} placeholder='Password' type='password' />
                <Button onClick={register} className="signupScreen-btn" type="submit" name="Sign In" />

                <h4><span className='signupScreen-grey'>New to Netflix?</span> <span
                    onClick={register} className='signupScreen-link'>Sign Up now.</span></h4>
            </form>
        </div>
    )
}
