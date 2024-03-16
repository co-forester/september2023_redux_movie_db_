import React from 'react';
import {NavLink, useNavigate} from "react-router-dom";
import {Avatar} from "@mui/material";

import css from './Header.module.css'
import {useAppSelector} from "../../hooks";

const Header = () => {
    const {triggerTheme} = useAppSelector(state => state.movies);
    let navigate = useNavigate();
    const back = () => {
        navigate(-1)
    }
    const switchers = () => {
        // triggerTheme (prev => !prev)
    }
    return (
        <div className={css.HeaderDark}>
            <button className={css.button} onClick={back}>back</button>
            <NavLink to={'moviesPage/search'}>Search</NavLink>
            <NavLink to={'moviesPage/moviesList'}>Movies</NavLink>
            <NavLink to={'moviesPage/genres'}>Genres</NavLink>
            <div className={css.ButtonBox}>
                <button className={css.Button} onClick={switchers}>Theme</button>
            </div>
            <Avatar alt="Remy Sharp" src="./icon8-gjbcr.svg"/>
        </div>
    );
};

export {Header};