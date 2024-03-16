import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {AxiosError} from "axios";

import {IGenre, IMovie, IMovies, IMoviesGenre} from "../../interfaces";
import {genreService, movieService} from "../../services";
import {IGenres} from "../../interfaces/genresInterface";

interface IState {
    genres: IGenre[];
    genreId: number;
    movies: IMovie[];
    page: number;
    total_pages: number;
    triggerTheme: boolean
}

const initialState: IState = {
    genres: null,
    genreId: null,
    movies: [],
    page: null,
    total_pages: null,
    triggerTheme: null
}

const getAll = createAsyncThunk<IMovies, { page: number }>(
    '/movieSlice/getAll',
    async ({page}, {rejectWithValue: rejectWithValue}) => {
        try {
            const {data} = await movieService.getAll(page);
            return data
        } catch (e) {
            const err = e as AxiosError;
            return rejectWithValue(err.response.data)
        }
    }
)

const getAllByGenre = createAsyncThunk<IMoviesGenre, { genreIds: number, page: number }>(
    '/movieSlice/getALLByGenre',
    async ({genreIds, page}, {rejectWithValue}) => {
        try {
            const {data} = await movieService.getAllByGenre(genreIds, page);
            return data
        } catch (e) {
            const err = e as AxiosError;
            return rejectWithValue(err.response.data)
        }
    }
)

const getAllGenres = createAsyncThunk<IGenres, void>(
    '/movieSlice/getAllGenres',
    async (_, {rejectWithValue}) => {
        try {
            const {data} = await genreService.getAll()
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
            .addCase(getAllGenres.fulfilled, (state, action) => {
                state.genres = action.payload.genres
            })
            .addCase(getAllByGenre.fulfilled, (state, action) => {
                state.movies = action.payload.results;
                state.page = action.payload.page;
                state.total_pages = action.payload.total_pages
            })
            .addCase(getAll.fulfilled, (state, action) => {
                state.movies = action.payload.results;
                state.page = action.payload.page;
                state.total_pages = action.payload.total_pages
            })
})

const {reducer: movieReducer, actions} = movieSlice;

const movieActions = {
    ...actions,
    getAll,
    getAllByGenre,
    getAllGenres
}

export {movieReducer, movieActions}