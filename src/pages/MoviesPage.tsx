import React from 'react';
import {Outlet} from "react-router-dom";

import css from './MoviesPage.module.css'

const MoviesPage = () => {
    return (
        <div className={css.MoviesPage}>
            <Outlet/>
        </div>
    );
};

export {MoviesPage};