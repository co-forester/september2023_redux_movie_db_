import {configureStore} from "@reduxjs/toolkit";

import {loadingReducer, movieReducer} from "./slices";


const store = configureStore({
    reducer:{
        loadingReducer,
        movies: movieReducer

    }
})

export {store}