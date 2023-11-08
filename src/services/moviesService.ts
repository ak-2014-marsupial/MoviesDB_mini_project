import {axiosService} from "./axiosService";
import {urls} from "../constants/urls";
import {IRes} from "../types/IResType";
import { IMovieEntries, IMovieInfo} from "../interfaces/movieInterface";

const moviesService={
    // getAll :():IRes<IMovieEntries>=>axiosService.get(urls.getMovies)
    getAll :(page:number):IRes<IMovieEntries>=>axiosService.get(urls.getMovies,{params:{page:`${page}`}}),
    getById:(id:number):IRes<IMovieInfo>=>axiosService.get(urls.getMovieDetails(id))
}

export {
    moviesService
}