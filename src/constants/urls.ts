
const baseURL='https://api.themoviedb.org/3'
const posterBaseUrl = "https://image.tmdb.org/t/p/w500";
const api_key='dcd8ceaae73f3f48500ccaf859d5425b';

const movie="/movie"
const urls={
    getMovies:`discover${movie}`,
    getPopularMovie:`${movie}/popular`,
    searchMovie:`/search${movie}`,
    getMovieDetails:(id:number):string=>`${movie}/${id}`,
    getMoviesByGenreId:(genreId:string):string=>`/genre/${genreId}/movies`,
    getGenres:`/genre/list`,
    getActorsByFilmId:(id:number):string=> `${movie}/${id}/credits`,


}

export {
    baseURL,
    posterBaseUrl,
    urls,
    api_key

}