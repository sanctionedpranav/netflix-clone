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
            {
                requests.map((list) => {
                    return (
                        <Rows title={list.title} fetchUrl={list.fetchApis || list.fetchNetflixOriginal} />
                    )
                })
            }
        </div>
    )
}
