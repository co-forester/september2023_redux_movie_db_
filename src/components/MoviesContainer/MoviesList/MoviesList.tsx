import React, {useEffect} from 'react';
import {useSearchParams} from "react-router-dom";

import {Movies} from "../Movies";
import {useAppDispatch, useAppSelector} from "../../../hooks";
import {movieActions} from "../../../Redux";

const MoviesList = () => {
    const {movies} = useAppSelector(state => state.movies);
    const [query] = useSearchParams({page: '1'});
    const dispatch = useAppDispatch();
    const page = +query.get('page');

    useEffect(() => {
        dispatch(movieActions.getAll({page}))
    }, [page]);

    return (
        <div>
            <Movies movies={movies}/>
        </div>

    );
};

export {MoviesList};