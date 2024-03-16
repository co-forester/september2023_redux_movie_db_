import React, {useEffect} from 'react';
import {useSearchParams} from "react-router-dom";

import css from './GenresList.module.css'
import {Movies} from "../Movies";
import {Pagination} from "../../Pagination";
import {useAppDispatch, useAppSelector} from "../../../hooks";
import {movieActions} from "../../../Redux";
import {Genre} from "../Genre";

const GenresList = () => {
    const {movies, genres} = useAppSelector(state => state.movies);
    const [query] = useSearchParams({page:'1', genres: '1'});
    const dispatch = useAppDispatch();
    const page = + query.get('page');
    const genreId = + query.get('genres')

    useEffect(() => {
        dispatch(movieActions.getAllGenres())
    }, []);

    if (!genres || !Array.isArray(genres)) {
        return <div>No genres available</div>;
    }

    useEffect(() => {
       dispatch(movieActions.getAllByGenre({genreId, page}))
    }, [page, genreId]);

    return (
        <div className={css.GenresList}>
            <div className={css.GenresMap}>
                {genres.map(genre => <Genre key={genre.id} genre={genre}/>)}
            </div>
            {/*<Pagination/>*/}
            <Movies movies={movies}/>
        </div>
    );
};

export {GenresList};