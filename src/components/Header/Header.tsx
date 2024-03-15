import React from 'react';
import {NavLink} from "react-router-dom";

import css from './Header.module.css'

const Header = () => {
    return (
        <div className={css.HeaderDark}>
            <button className={css.button}>back</button>
            <NavLink to={'moviesPage/search'}>Search</NavLink>
            <NavLink to={'moviesPage/moviesList'}>Movies</NavLink>
            <NavLink to={'moviesPage/genres'}>Genres</NavLink>
            <div className={css.buttonBox}>
                <button className={css.button}>Theme</button>
            </div>
        </div>
    );
};

export {Header};