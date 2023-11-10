import React from "react";
import {createBrowserRouter, Navigate} from "react-router-dom";


import {GenresPage} from "./pages";
import {MainLayout} from "./layouts";
import {MovieInfoPage} from "./pages/MovieInfoPage";
import {MoviesList} from "./components";
import {moviesService} from "./services/moviesService";
import {MovieSearchPage} from "./pages/MovieSearchPage/MovieSearchPage";

const router = createBrowserRouter([
    {
        path: '', element: <MainLayout/>, children: [
            {index: true, element: <Navigate to={"movies"}/>},
            {path: 'genres', element: <GenresPage/>},
            {path: 'movies', element: <MoviesList dataSource={moviesService.getAll}/>},
            {path: 'movies/:movieId', element: <MovieInfoPage/>},
            {path: 'movies/genre/:id', element: <MoviesList dataSource={moviesService.getAllByGenreId}/>},
            {path: 'movies/search', element: <MovieSearchPage/>}
        ]
    }
])

export {
    router
}