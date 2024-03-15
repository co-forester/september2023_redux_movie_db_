import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {AxiosError} from "axios";

import {IMovie, IMovies} from "../../interfaces";
import {movieService} from "../../services";

interface IState {
    movies: IMovie[];
    page: number;
    total_pages: number
}

const initialState: IState = {
    movies: [],
    page: null,
    total_pages: null
}
const getAll = createAsyncThunk<IMovies, void>(
    '/carSlice/getAll',
    async (_, {rejectWithValue: rejectWithValue}) => {
        try {
            const {data:{page, total_pages,results}} = await movieService.getAll();
            return {results, page, total_pages}
        }catch (e) {
            const err = e as AxiosError;
            return rejectWithValue(err.response.data)
        }
    }
)

const movieSlice = createSlice({
    name: 'movieSlice',
    initialState,
    reducers: {},
    extraReducers: builder =>
        builder
            .addCase(getAll.fulfilled, (state, action) => {
                state.movies = action.payload.results;
                state.page = action.payload.page;
                state.total_pages = action.payload.total_pages
            } )

})

const {reducer: movieReducer, actions} = movieSlice;

const movieActions = {
    ...actions,
    getAll
}

export {movieReducer, movieActions}