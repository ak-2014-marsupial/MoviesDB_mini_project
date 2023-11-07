import {axiosService} from "./axiosService";
import {urls} from "../constants/urls";
import {IRes} from "../types/IResType";
import {IMovieEntries} from "../interfaces/movieInterface";

const moviesService={
    // getAll :():IRes<IMovieEntries>=>axiosService.get(urls.getMovies)
    getAll :(page:number):IRes<IMovieEntries>=>axiosService.get(urls.getMovies,{params:{page:`${page}`}})
}

export {
    moviesService
}