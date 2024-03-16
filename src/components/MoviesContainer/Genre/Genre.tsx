import React, {FC, PropsWithChildren} from 'react';
import {useSearchParams} from "react-router-dom";

import css from './Genre.module.css';
import {IGenre} from "../../../interfaces";

interface IProps extends PropsWithChildren{
    genre: IGenre
}

const Genre: FC<IProps> = ({genre}) => {
    const [, setQuery] = useSearchParams({genres: null})
    const {id, name} = genre;

    const byGenre = () => {
         setQuery({genres: id.toString()})
    };

    return (
        <div className={css.Genre}>
            <div className={css.ButGenreDark} onClick={byGenre}>{name}</div>
        </div>
    );
};


export {Genre};