const API_KEY = process.env.REACT_APP_API_KEY;

const requests =
    [
        { title: "Netflix Original", fetchNetflixOriginal: `/discover/tv?api_key=${API_KEY}&with_networks=213` },
        { title: "Trending", fetchApis: `/trending/all/week?api_key=${API_KEY}&language=en=US`, },
        { title: "Top Rated", fetchApis: `/movie/top_rated?api_key=${API_KEY}&language=en=US` },
        { title: "Action Movies", fetchApis: `/discover/movie?api_key=${API_KEY}&with_genres=28` },
        { title: "Comedy Movies", fetchApis: `/discover/movie?api_key=${API_KEY}&with_genres=36` },
        { title: "Horror Movies", fetchApis: `/discover/movie?api_key=${API_KEY}&with_genres=27` },
        { title: "Romance Movies", fetchApis: `/discover/movie?api_key=${API_KEY}&with_genres=10749` },
        { title: "Documentry Movies", fetchApis: `/discover/movie?api_key=${API_KEY}&with_genres=99` },]



export default requests;
