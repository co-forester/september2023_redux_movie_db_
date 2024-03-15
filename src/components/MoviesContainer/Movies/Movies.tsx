import React, {useEffect} from 'react';

import css from './Movies.module.css'
import {Movie} from "../Movie";
import {useAppDispatch, useAppSelector} from "../../../hooks";
import {movieActions} from "../../../Redux";

const Movies = () => {
    const {movies} = useAppSelector(state => state.movies);
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(movieActions.getAll())
    }, []);

    return (
        <div className={css.Movies}>
            {movies.map(movie=><Movie key={movie.id} movie={movie}/>)}
        </div>
    );
};

export {Movies};