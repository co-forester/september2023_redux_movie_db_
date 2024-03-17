import React from 'react';
import {NavLink, useNavigate} from "react-router-dom";
import {Avatar} from "@mui/material";

import css from './Header.module.css'
import {useAppDispatch, useAppSelector} from "../../hooks";
import {themeActions} from "../../Redux";

const Header = () => {
    const theme = useAppSelector(state => state.theme.theme);
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const back = () => {
        navigate(-1)
    }
    const switchTheme = () => {
        dispatch(themeActions.themeChange())
    }
    return (
        <div className={theme ? css.HeaderLight : css.HeaderDark}>
            <button className={css.button} onClick={back}>back</button>
            <NavLink to={'moviesPage/search'}>Search</NavLink>
            <NavLink to={'moviesPage/moviesList'}>Movies</NavLink>
            <NavLink to={'moviesPage/genres'}>Genres</NavLink>
            <div className={css.ButtonBox}>
                <button className={css.Button} onClick={switchTheme}>{theme ? 'Theme light' : 'Theme dark' }</button>
            </div>
            <Avatar alt="Remy Sharp" src="./icon8-gjbcr.svg"/>
        </div>
    );
};

export {Header};