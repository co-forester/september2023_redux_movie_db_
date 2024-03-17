import React, {FC, PropsWithChildren} from 'react';

import css from './Movies.module.css'
import {Movie} from "../Movie";
import {Pagination} from "../../Pagination";
import {IMovie} from "../../../interfaces";
import {useAppSelector} from "../../../hooks";

interface IPops extends PropsWithChildren{
    movies: IMovie[]
}

const Movies: FC<IPops> = ({movies}) => {
    const theme = useAppSelector(state => state.theme.theme);

    return (
        <div className={css.MoviesListBox}>
            <Pagination/>
            <div className={theme ? css.MoviesLight : css.MoviesDark}>
                {movies.map(movie => <Movie key={movie.id} movie={movie}/>)}
            </div>
        </div>
    );
};

export {Movies};