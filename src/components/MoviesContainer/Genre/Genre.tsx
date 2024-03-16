import React, {FC, PropsWithChildren} from 'react';

import css from './Genre.module.css';
import {IGenre} from "../../../interfaces";
import {useAppSelector} from "../../../hooks";

interface IProps extends PropsWithChildren{
    genre: IGenre
}

const Genre: FC<IProps> = ({genre}) => {
    const {genreId} = useAppSelector(state => state.movie)
    const {id, name} = genre;


    const byGenre = () => {
         const genreId = id
    };

    return (
        <div className={css.Genre}>
            <div className={switcher ? css.ButGenreLight : css.ButGenreDark} onClick={byGenre}>{name}</div>
        </div>
    );
};


export {Genre};