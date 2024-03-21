import React from "react";
import {createBrowserRouter, Navigate} from "react-router-dom";

import {MainLayout} from "./layouts";
import {GenresList, MoviesList, MoviesListCard, Search} from "./components";
import {MoviesPage} from "./pages";


const router = createBrowserRouter([
    {
        path: '', element: <MainLayout/>, children:[
            {
                index: true, element: <Navigate to={'moviesPage'}/>
            },
            {
                path: 'moviesPage', element: <MoviesPage/>, children: [
                    {index: true, element: <Navigate to={'moviesList'}/>},
                    {path: 'genres', element: <GenresList/>},
                    {path: 'search', element: <Search/>},
                    {path: 'moviesList', element: <MoviesList/>},
                ]
            },
            {path: 'card', element: <MoviesListCard/>}
        ]
    }
])

export {router}