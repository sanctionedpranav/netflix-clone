import React from 'react'
import { Rows } from '../component/row/Rows'
import requests from '../request'
import "./Netflix.css"
import { Banner } from '../component/banner/Banner'

export const Netflix = () => {
    return (
        <div className='app-container'>
            {/* Nav */}
            <Banner />
            <Rows isLargeRow title="Netflix Originals" fetchUrl={requests.fetchTrending} />
            <Rows title="Netflix Originals" fetchUrl={requests.fetchTrending} />
            <Rows title="Netflix Originals" fetchUrl={requests.fetchTrending} />
        </div>
    )
}
