import React from 'react'
import { Rows } from '../component/row/Rows'
import requests from '../request'
import "./Netflix.css"

export const Netflix = () => {
    return (
        <div className='app-container'>
            <Rows title="Netflix Originals" fetchUrl={requests.fetchTrending}/>
        </div>
    )
}
