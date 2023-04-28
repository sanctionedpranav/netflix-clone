import React from 'react'
import "./Button.css"

export const Button = ({ name, className, onClick, type }) => {

    return (
        <button type={type} onClick={onClick} className={className}>{name}</button>

    )
}
