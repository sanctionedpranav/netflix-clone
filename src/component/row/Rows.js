import axios from '../../axios.js';
import React, { useCallback, useEffect, useState } from 'react'
import "./Row.css"
import YouTube from 'react-youtube';
import movieTrailer from 'movie-trailer';

const base_url = "https://image.tmdb.org/t/p/original"

export const Rows = ({ title, fetchUrl, isLargeRow }) => {
    const [movies, setMovies] = useState([]);
    const [trailerUrl, setTrailerUrl] = useState("");
    const [isLoading, setIsLoading] = useState(true);

    // This will run based on a specific condition
    const movieData = useCallback(async () => {
        const movieRequest = await axios.get(fetchUrl) // This is basically doing this => (https://api.themoviedb.org/3.fetchUrl)
        setMovies(movieRequest.data.results)
        setIsLoading(false);
        return movieRequest;
    }, [fetchUrl]);


    useEffect(() => {
        movieData();
    }, []); //If the ([]) is blank which means that this code will run only once when the page is loads.

    const opts = {
        height: "390",
        width: "100%",
        playerVars: {
            autoplay: 1
        }
    }

    const handleClick = (movies) => {
        if (trailerUrl) {
            setTrailerUrl('')
        }
        else {
            movieTrailer(movies?.name || "")
                .then((url) => {
                    const urlParams = new URLSearchParams(new URL(url).search);
                    setTrailerUrl(urlParams.get('v'))
                }).catch((error) => {
                    console.log(error);
                })
        }
    }
    return (
        <div className='row'>
            <h2>{title}</h2>

            {!isLoading ?
                <div className='row-posters'>
                    {movies.map((element) => {
                        return (
                            <img key={element.id}
                                onClick={() => { handleClick(movies) }}
                                className={`row-poster ${isLargeRow && "row-posterLarge"}`}
                                src={`${base_url}${title === "Netflix Original" ? element.poster_path : element.backdrop_path}`} alt={element.title} />
                        )
                    })}
                </div>
                : <p>Loading...</p>
            }
            {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
        </div>
    )
}
