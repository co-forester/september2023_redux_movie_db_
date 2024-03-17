import React from 'react';
import {Outlet} from "react-router-dom";

import {Header} from "../components";
import {useAppSelector} from "../hooks";
import  css from './MainLayout.module.css'

const MainLayout = () => {
    const theme = useAppSelector(state => state.theme.theme);

    return (
        <div className={theme ? css.MainLight :css.MainDark}>
            <Header/>
            <Outlet/>
        </div>
    );
};

export {MainLayout};