import React, {useEffect} from 'react';
import {useSearchParams} from "react-router-dom";
import {CircularProgress} from "@mui/material";

import css from './GenresList.module.css'
import {Movies} from "../Movies";
import {useAppDispatch, useAppSelector} from "../../../hooks";
import {movieActions} from "../../../Redux";
import {Genre} from "../Genre";

const GenresList = () => {
    const {movies, genres} = useAppSelector(state => state.movies);
    const {isLoading} = useAppSelector(state => state.loadingReducer);
    const [query] = useSearchParams({page: '1', genres: '1'});
    const dispatch = useAppDispatch();
    const page = +query.get('page');
    const genreId = +query.get('genres')

    useEffect(() => {
        dispatch(movieActions.getAllGenres())
    }, []);

    useEffect(() => {
        dispatch(movieActions.getAllByGenre({genreId, page}))
    }, [page, genreId, genres]);

    if (!genres || !Array.isArray(genres)) {
        return <div>No genres available</div>;
    }

    return (
        <div className={css.GenresList}>
            <div className={css.GenresMap}>
                {genres.map(genre => <Genre key={genre.id} genre={genre}/>)}
            </div>
            {isLoading ? (<CircularProgress color="primary"/>) : (<Movies movies={movies}/>)}
        </div>
    );
};

export {GenresList};