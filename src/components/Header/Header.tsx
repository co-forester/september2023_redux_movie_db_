import React from 'react';
import {NavLink} from "react-router-dom";

import css from './Header.module.css'

const Header = () => {
    return (
        <div className={css.HeaderDark}>
            <button className={css.button}>back</button>
            <NavLink to={'/search'}>Search</NavLink>
            <NavLink to={'/moviesList'}>Movies</NavLink>
            <NavLink to={'/genres'}>Genres</NavLink>
            <div className={css.buttonBox}>
                <button className={css.button}>Theme</button>
            </div>
        </div>
    );
};

export {Header};