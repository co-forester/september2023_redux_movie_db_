import React from 'react';
import {Outlet} from "react-router-dom";

import css from './MoviesPage.module.css'
import {useAppSelector} from "../hooks";

const MoviesPage = () => {
    const theme = useAppSelector(state => state.theme.theme);
    return (
        <div className={theme ? css.MoviesPageLight : css.MoviesPageDark}>
            <Outlet/>
        </div>
    );
};

export {MoviesPage};