import React from 'react';
import {useNavigate} from "react-router-dom";
import {Typography} from "@mui/material";

import css from './Footer.module.css';
import {useAppDispatch, useAppSelector} from "../../hooks";
import {themeActions} from "../../redux";

const Footer = () => {
    const theme = useAppSelector(state => state.theme.theme);
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const back = () => {
        navigate(-1)
    }

    const switchTheme = () => {
        dispatch(themeActions.themeChange());
    }

    return (
        <div className={theme ? css.FooterLight : css.FooterDark}>
            <Typography color={'#f89f04'} style={{fontSize: '24px', width: '50', margin: '20px'}}>MDB</Typography>
            <div className={css.footer}>
                <button className={theme ? css.buttonLight : css.buttonDark} onClick={back}>back</button>
                <div className={css.buttonBox}>
                    <button className={theme ? css.buttonLight : css.buttonDark}
                            onClick={switchTheme}>{theme ? 'Theme dark' : 'Theme light'}</button>
                </div>
            </div>
        </div>
    );
};

export {Footer};