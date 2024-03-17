import {configureStore} from "@reduxjs/toolkit";

import {loadingReducer, movieReducer, themeReducer} from "./slices";


const store = configureStore({
    reducer:{
        loadingReducer,
        movies: movieReducer,
        theme: themeReducer
    }
})

export {store}