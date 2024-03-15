import React from 'react';

import css from './MoviesList.module.css'
import {Movies} from "../Movies";
const MoviesList = () => {

    return (
        <div className={css.MoviesList}>
            <Movies/>
        </div>
    );
};

export {MoviesList};