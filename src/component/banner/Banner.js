import React, { useCallback, useEffect, useState } from 'react'
import "./Banner.css"
import axios from "../../axios.js";
import requests from "../../request.js";
import { Button } from '../../commonComponent/button/Button';

export const Banner = () => {
    const btnName = [{ name: "Play" }, { name: "My List" }];

    const [movie, setMovie] = useState("");


    const fetchData = useCallback(async () => {
        const request = await axios.get(requests[0].fetchApis);
        setMovie(
            request.data.results[
            Math.floor(Math.random() * request.data.results.length - 1)
            ]);
        return request;
    }, [requests[0].fetchApis]);

    useEffect(() => {
        fetchData();
    }, [])
 

    function truncate(string, n) {
        return string?.length > n ? string.substr(0, n - 1) + "..." : string;
    }
    return (
        <header className='banner'
       
            style={{
                backgroundSize: "cover",
                // backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
                backgroundImage: `url("https://image.tmdb.org/t/p/original${movie?.backdrop_path}")`,
                backgroundPosition: "center center"
            }}
        >
             {console.log({movie:`https://image.tmdb.org/t/p/original${movie?.backdrop_path}`})}
            <div className='banner-contents'>
                <h1 className='banner-title'>
                    {movie?.title || movie?.name || movie?.original_name}</h1>

                <div className='banner-btns'>
                    {btnName?.map((element) => {
                        return <Button key={element.name} name={element.name} />
                    })}
                </div>

                <h1 className='banner-desc'>
                    {truncate(movie?.overview, 150)}
                </h1>
            </div>
        </header>
    )
}
