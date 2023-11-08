import React from "react";
import {GenresPage, MoviesPage} from "./pages";
import {MainLayout} from "./layouts";
import {createBrowserRouter, Navigate} from "react-router-dom";
import {MovieInfoPage} from "./pages/MovieInfoPage";

const router = createBrowserRouter([
    {
        path: '', element: <MainLayout/>, children: [
            {index: true, element: <Navigate to={"movies"}/>},
            {path: "movies", element: <MoviesPage/>},
            {path:'movies/:movieId',element:<MovieInfoPage/>},
            {path:'movies/genre/:id',element:<GenresPage/>},
            {path:'genres',element:<GenresPage/>}

        ]
    }
])

export {
    router
}