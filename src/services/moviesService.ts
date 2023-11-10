import {axiosService} from "./axiosService";
import {urls} from "../constants/urls";
import {IGenres, IRes} from "../types/IResType";
import {IGenre, IMovieEntries, IMovieInfo} from "../interfaces/movieInterface";

const moviesService={
    getAll :(page:number):IRes<IMovieEntries>=>axiosService.get(urls.getMovies,{params:{page:`${page}`}}),
    getById:(id:number):IRes<IMovieInfo>=>axiosService.get(urls.getMovieDetails(id)),
    getAllByGenreId:(page:number,genreId:string):IRes<IMovieEntries>=>axiosService.get(urls.getMoviesByGenreId(genreId),{params:{page:`${page}`}}),
    getGenres:():IRes<IGenres<IGenre[]> >=>axiosService.get(urls.getGenres),
    searchMoviesByName:(page:number,query:string):IRes<IMovieEntries> =>axiosService.get(urls.searchMovie,
        {params:{page:`${page}`,query:`${query}`}}),
}

export {
    moviesService
}