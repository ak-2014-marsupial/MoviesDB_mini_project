
const baseURL='https://api.themoviedb.org/3'
const posterBaseUrl = "https://image.tmdb.org/t/p/w500";

const movie="/movie"
const urls={
    getMovies:`discover${movie}`,
    getPopularMovie:`${movie}/popular`,
    searchMovie:`/search`,
    getMovieDetails:(id:number):string=>`${movie}/${id}`,

}

export {
    baseURL,
    posterBaseUrl,
    urls,

}