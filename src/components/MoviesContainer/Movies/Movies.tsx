import React, {useEffect} from 'react';
import {useSearchParams} from "react-router-dom";

import css from './Movies.module.css'
import {Movie} from "../Movie";
import {useAppDispatch, useAppSelector} from "../../../hooks";
import {movieActions} from "../../../Redux";
import {Pagination} from "../../Pagination";

const Movies = () => {
    const {movies} = useAppSelector(state => state.movies);
    const [query] = useSearchParams({page:'1'});
    const dispatch = useAppDispatch();
    const page = + query.get('page')

    useEffect(() => {
        dispatch(movieActions.getAll({page}))
    }, [page]);

    return (
        <div className={css.MoviesListBox}>
            <Pagination/>
            <div className={css.Movies}>
                {movies.map(movie => <Movie key={movie.id} movie={movie}/>)}
            </div>
        </div>
    );
};

export {Movies};