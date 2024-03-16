import React, {FC, PropsWithChildren} from 'react';

import css from './Movies.module.css'
import {Movie} from "../Movie";
import {Pagination} from "../../Pagination";
import {IMovie} from "../../../interfaces";

interface IPops extends PropsWithChildren{
    movies: IMovie[]
}

const Movies: FC<IPops> = ({movies}) => {

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