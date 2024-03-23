import React, {useEffect} from 'react';
import {useSearchParams} from "react-router-dom";

import {Movies} from "../Movies";
import {useAppDispatch, useAppSelector} from "../../../hooks";
import {movieActions} from "../../../Redux";
import css from './MoviesList.module.css'
import {Sort} from "../Sort";
import {CircularProgress} from "@mui/material";

const MoviesList = () => {
    const {movies} = useAppSelector(state => state.movies);
    const {isLoading} = useAppSelector(state => state.loadingReducer);
    const [query] = useSearchParams({page: '1'});
    const dispatch = useAppDispatch();
    const page = +query.get('page');

    useEffect(() => {
        dispatch(movieActions.getAll({page}))
    }, [page, dispatch]);

    return (
        <div className={css.MoviesList}>
            <div className={css.sort}>
                <Sort/>
            </div>
            <div className={css.movies}>
                {isLoading ? (<CircularProgress color="primary" />):(<Movies movies={movies}/>)}
            </div>
        </div>

    );
};

export {MoviesList};