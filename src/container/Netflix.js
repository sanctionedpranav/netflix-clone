import React from 'react'
import { Rows } from '../component/row/Rows'
import requests from '../request'
import "./Netflix.css"
import { Banner } from '../component/banner/Banner'
import { NavBar } from '../component/navbar/NavBar'


export const Netflix = () => {
    return (
        <div className='app-container'>
            <NavBar />
            <Banner />
            {
                requests.map((list) => {
                    return (
                        <Rows key={list.title} title={list.title} fetchUrl={list.fetchApis || list.fetchNetflixOriginal} />
                    )
                })
            }
        </div>
    )
}
