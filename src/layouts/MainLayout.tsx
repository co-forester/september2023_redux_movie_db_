import React from 'react';
import {Outlet} from "react-router-dom";

import {Footer, Header} from "../components";
import {useAppSelector} from "../hooks";
import  css from './MainLayout.module.css'

const MainLayout = () => {
    const theme = useAppSelector(state => state.theme.theme);

    return (
        <div className={theme ? css.MainLight :css.MainDark}>
            <Header/>
            <Outlet/>
            <Footer/>
        </div>
    );
};

export {MainLayout};