import React from "react";
import {createBrowserRouter, Navigate} from "react-router-dom";

import {MainLayout} from "./layouts";
import {Genre, Search} from "./components";
import {MoviesPage} from "./pages";
import {MoviesList} from "./components/MoviesContainer/MoviesList";

const router = createBrowserRouter([
    {
        path: '', element: <MainLayout/>, children:[
            {
                index: true, element: <Navigate to={'moviesPage'}/>
            },
            {
                path: 'moviesPage', element: <MoviesPage/>, children: [
                    {index: true, element: <Navigate to={'moviesList'}/>},
                    {path: 'genres', element: <Genre/>},
                    {path: 'search', element: <Search/>},
                    {path: 'moviesList', element: <MoviesList/>},
                ]
            }
        ]
    }
])

export {router}