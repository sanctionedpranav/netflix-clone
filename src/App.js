
import React, { useEffect } from 'react'
import { Netflix } from './container/Netflix';
import "./App.css"
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link,
} from "react-router-dom";
import LoginScreen from './screens/login/LoginScreen';
import { auth } from './firebase';

const App = () => {
    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((userAuth => {
            if (userAuth) {
                // Logged in 
                console.log(userAuth);
            } else {
                // Logged out
            }
        }))
        return unsubscribe;
    }, [])

    return (
        <div className='app'>
            <Routes>
                <Route path='/' element={<LoginScreen h1="Ultimate films, TV programmes and more." h2="Watch anywhere. Cancleat any time." h3="Ready to watch? Enter your email to create or restart you membership" />} />
                <Route path="/test" element={<Netflix />} />
            </Routes>
        </div>
    )
}

export default App;
