import React from 'react';
import {NavLink} from "react-router-dom";

import css from './Header.module.css'

const Header = () => {
    return (
        <div className={css.Header}>
            <button className={css.Button}>back</button>
            <NavLink to={'movies/search'}>Search</NavLink>
            <NavLink to={'movies/moviesList'}>Movies</NavLink>
            <NavLink to={'movies/genres'}>Genres</NavLink>
            <div className={css.ButtonBox}>
                <button className={css.Button}>Theme</button>
            </div>
        </div>
    );
};

export {Header};