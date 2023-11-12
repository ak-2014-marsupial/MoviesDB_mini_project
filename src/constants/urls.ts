
const baseURL:string='https://api.themoviedb.org/3'
const posterBaseUrl:string = "https://image.tmdb.org/t/p/w500";
const api_key:string='dcd8ceaae73f3f48500ccaf859d5425b';
const token:string='Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkY2Q4Y2VhYWU3M2YzZjQ4NTAwY2NhZjg1OWQ1NDI1YiIsInN1YiI6IjY1NDYyNjUzZmQ0ZjgwMDExZWQwYmM3NyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.4jBQWaAXNNpvH4sunbMKJ2qogMHoPnQd5Lng0EOi_i4'

const movie:string="/movie"
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
    api_key,
    token

}