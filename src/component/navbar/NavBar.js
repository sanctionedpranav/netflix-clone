import React, { useEffect, useState } from 'react'
import CompanyLogo from "../../assets/logo.png"
import AccountLogo from "../../assets/avatar.jpg"
import "./NavBar.css"

export const NavBar = () => {

    const [showNav, setShowNav] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 100) {
                setShowNav(true);
            }
            else {
                setShowNav(false);
            }
        })
        // return () => {
        //     window.removeEventListener("scroll")
        // }
    }, [])

    return (
        <div className={`navbar ${showNav && "nav-background"}`}>
            <img className='nav-logo' src={CompanyLogo} alt='netflix logo' />

            <img className='nav-avatar' src={AccountLogo} alt='netflix avatar-logo' />
        </div>
    )
}
