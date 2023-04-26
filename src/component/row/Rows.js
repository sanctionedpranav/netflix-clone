import axios from '../../axios.js';
import React, { useCallback, useEffect, useState } from 'react'
import "./Row.css"

const base_url = "https://image.tmdb.org/t/p/original"

export const Rows = ({ title, fetchUrl, isLargeRow }) => {
    const [movies, setMovies] = useState([]);

    // This will run based on a specific condition
    const movieData = useCallback(async () => {
        const movieRequest = await axios.get(fetchUrl) // This is basically doing this => (https://api.themoviedb.org/3.fetchUrl)
        setMovies(movieRequest.data.results)
        return movieRequest;
    }, [fetchUrl]);


    useEffect(() => {
        movieData();
    }, []); //If the ([]) is blank which means that this code will run only once when the page is loads.


    return (
        <div className='row'>
            <h2>{title}</h2>

            <div className='row-posters'>
                {movies.map((element) => {
                    return (
                        <img key={element.id}
                            className={`row-poster ${isLargeRow && "row-posterLarge"}`}
                            src={`${base_url}${isLargeRow ? element.poster_path : element.backdrop_path}`} alt={element.title} />
                    )
                })}
            </div>
        </div>
    )
}
