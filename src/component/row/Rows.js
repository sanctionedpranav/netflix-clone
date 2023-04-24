import axios from '../../axios.js';
import React, { useEffect, useState } from 'react'
import "./Row.css"

const base_url = "https://image.tmdb.org/t/p/original"

export const Rows = ({ title, fetchUrl }) => {
    const [movies, setMovies] = useState([]);

    // This will run based on a specific condition
    useEffect(() => {
        async function movieData() {
            const movieRequest = await axios.get(fetchUrl) // This is basically doing this => (https://api.themoviedb.org/3.fetchUrl)
            console.log(movieRequest);
            setMovies(movieRequest.data.results)
            return movieRequest;
        }
        movieData();

    }, [fetchUrl]); //If the ([]) is blank which means that this code will run only once when the page is loads.
    console.log(movies);


    return (
        <div className='row'>
            <h2>{title}</h2>

            <div className='row-posters'>
                {movies.map((element) => {
                    return (
                    <img key={element.id}
                    className='row-poster'
                    src={`${base_url}${element.poster_path}`} alt={element.title} />
                    )
                })}
            </div>
        </div>
    )
}
