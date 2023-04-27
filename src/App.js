
import React from 'react'
import { Netflix } from './container/Netflix';
import "./App.css"
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link,
} from "react-router-dom";
import LoginScreen from './screens/login/LoginScreen';

const App = () => {
    return (
        <div className='app'>
            <Routes>
                <Route path='/' element={<LoginScreen />} />
                <Route path="/test" element={<Netflix />} />
            </Routes>
        </div>
    )
}

export default App;