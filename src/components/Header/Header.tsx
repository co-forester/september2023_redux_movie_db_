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
            <button className={theme ? css.buttonLight : css.buttonDark} onClick={back}>back</button>
            <NavLink to={'moviesPage/search'}>Search</NavLink>
            <NavLink to={'moviesPage/moviesList'}>Movies</NavLink>
            <NavLink to={'moviesPage/genres'}>Genres</NavLink>
            <div className={css.buttonBox}>
                <button className={theme ? css.buttonLight : css.buttonDark} onClick={switchTheme}>{theme ? 'Theme dark' : 'Theme light' }</button>
            </div>
            <div className={css.userAvatar}>
                <p>username</p>
                <Avatar className={theme ? css.avatarLight : css.avatarDark} alt="Remy Sharp" src="./icon8-gjbcr.svg"
                        sx={{width: 36, height: 36}}/>
            </div>

        </div>
    );
};

export {Header};