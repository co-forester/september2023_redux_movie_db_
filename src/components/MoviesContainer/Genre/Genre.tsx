import React, {FC, PropsWithChildren} from 'react';
import {useSearchParams} from "react-router-dom";

import css from './Genre.module.css';
import {IGenre} from "../../../interfaces";
import {useAppSelector} from "../../../hooks";

interface IProps extends PropsWithChildren{
    genre: IGenre
}

const Genre: FC<IProps> = ({genre}) => {
    const theme = useAppSelector(state => state.theme.theme);
    const [, setQuery] = useSearchParams({genres: null});
    const {id, name} = genre;

    const byGenre = () => {
         setQuery({genres: id.toString()})
    };

    return (
        <div className={css.Genre}>
            <div className={theme ? css.butGenreLight : css.butGenreDark} onClick={byGenre}>{name}</div>
        </div>
    );
};


export {Genre};