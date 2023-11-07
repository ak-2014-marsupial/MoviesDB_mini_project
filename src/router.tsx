import React from "react";
import {MoviesPage} from "./pages";
import {MainLayout} from "./layouts";
import {createBrowserRouter, Navigate} from "react-router-dom";
import {MovieInfoPage} from "./pages/MovieInfoPage";

const router = createBrowserRouter([
    {
        path: '', element: <MainLayout/>, children: [
            {index: true, element: <Navigate to={"movies"}/>},
            {path: "movies", element: <MoviesPage/>},
            {path:'movies/:id',element:<MovieInfoPage/>}

        ]
    }
])

export {
    router
}