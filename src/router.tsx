import React from "react";
import {createBrowserRouter, Navigate} from "react-router-dom";


import {GenresPage, MovieInfoPage} from "./pages";
import {MainLayout} from "./layouts";
import {MoviesList} from "./components";
import {moviesService} from "./services/moviesService";

const router = createBrowserRouter([
    {
        path: '', element: <MainLayout/>, children: [
            {index: true, element: <Navigate to={"movies"}/>},
            {path: 'genres', element: <GenresPage/>},
            {path: 'movies', element: <MoviesList dataSource={moviesService.getAll}/>},
            {path: 'movies/:movieId', element: <MovieInfoPage/>},
            {path: 'movies/genre/:id', element: <MoviesList dataSource={moviesService.getAllByGenreId}/>},
            {path: 'movies/search', element: <MoviesList dataSource={moviesService.searchMoviesByName}/>},

        ]
    }
])

export {
    router
}