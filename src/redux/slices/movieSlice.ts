import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {AxiosError} from "axios";

import {IGenre, IMovie, IMovies, IMoviesGenre} from "../../interfaces";
import {genreService, movieService} from "../../services";
import {IGenres} from "../../interfaces/genresInterface";

interface IState {
    genres: IGenre[];
    movies: IMovie[];
    page: number;
    total_pages: number
}

const initialState: IState = {
    genres: [],
    movies: [],
    page: 1 || null,
    total_pages: 500 || null
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

const getAllByGenre = createAsyncThunk<IMoviesGenre, { genreId: number, page: number }>(
    '/movieSlice/getALLByGenre',
    async ({genreId, page}, {rejectWithValue}) => {
        try {
            const {data} = await movieService.getAllByGenre(genreId, page);
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
            const {data} = await genreService.getAll();
            return data
        }catch (e) {
            const err = e as AxiosError;
            return rejectWithValue(err.response.data)
        }
    }
)

const getKeyWord = createAsyncThunk<IMovies, {keyWord: string, page: number}>(
    '/movieSlice/getKeyWord',
    async ({keyWord, page}, {rejectWithValue}) => {
        try {
            const {data} = await movieService.getKeyWord(keyWord, page);
            return data
        }catch (e) {
            const err = e as AxiosError;
            return rejectWithValue(err.response.data)
        }
    }
)

const getBySort = createAsyncThunk<IMovies, {bySort: string, page: number}>(
    '/movieSlice/getBySort',
    async ({bySort, page}, {rejectWithValue}) => {
        try {
            const {data} = await movieService.getBySort(bySort, page);
            return data
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
            .addCase(getKeyWord.fulfilled, (state, action) => {
                state.movies = action.payload.results;
                state.page = action.payload.page;
                state.total_pages = action.payload.total_pages
            })
            .addCase(getBySort.fulfilled, (state, action) => {
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
    getAllGenres,
    getKeyWord,
    getBySort
}

export {movieReducer, movieActions}