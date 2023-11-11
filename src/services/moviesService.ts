import {axiosService} from "./axiosService";
import {api_key, urls} from "../constants/urls";
import {IGenres, IRes} from "../types/IResType";
import {IActorEntries, IGenre, IMovieEntries, IMovieInfo} from "../interfaces/movieInterface";

const moviesService={
    getAll :(page:number):IRes<IMovieEntries>=>axiosService.get(urls.getMovies,{params:{page:`${page}`}}),
    getById:(id:number):IRes<IMovieInfo>=>axiosService.get(urls.getMovieDetails(id)),
    getAllByGenreId:(page:number,genreId:string):IRes<IMovieEntries>=>axiosService.get(urls.getMoviesByGenreId(genreId),{params:{page:`${page}`}}),
    getGenres:():IRes<IGenres<IGenre[]> >=>axiosService.get(urls.getGenres),
    searchMoviesByName:(page:number,query:string):IRes<IMovieEntries> =>axiosService.get(urls.searchMovie,
        {params:{page:`${page}`,query:`${query}`}}),
    getActorsByFilmId:(id:number):IRes<IActorEntries>=>axiosService.get(urls.getActorsByFilmId(id),{params:{api_key:`${api_key}`}})
}

export {
    moviesService
}