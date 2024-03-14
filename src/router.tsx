import React from "react";
import {createBrowserRouter, Navigate} from "react-router-dom";

import {MainLayout} from "./layouts";
import {Genres, Search} from "./components";
import {MoviesPage} from "./pages";

const router = createBrowserRouter([
    {
        path: '', element: <MainLayout/>, children:[
            {
                index: true, element: <Navigate to={'moviesPages'}/>
            },
            {
                path: 'moviesPages', element: <MoviesPage/>, children: [
                    {index: true, element: <Navigate to={'moviesList'}/>},
                    {path: 'genres', element: <Genres/>},
                    {path: 'search', element: <Search/>},
                ]
            }
        ]
    }
])

export {router}