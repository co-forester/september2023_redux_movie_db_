import React, {ChangeEvent, useEffect} from 'react';
import {useSearchParams} from "react-router-dom";
import {Container, createTheme, TextField, ThemeProvider} from '@mui/material'

import css from './Search.module.css'
import {useAppDispatch, useAppSelector} from "../../../hooks";
import {movieActions} from "../../../Redux";
import {Movies} from "../Movies";

const Search = () => {
    const theme = useAppSelector(state => state.theme.theme);
    const {movies} = useAppSelector(state => state.movies);
    const [query, setQuery] = useSearchParams({query: '', page: '1'});
    const dispatch = useAppDispatch();
    const page = +query.get('page');
    const keyWord = query.get('query');

    useEffect(() => {
            dispatch(movieActions.getKeyWord({keyWord, page}));
    }, [keyWord, page, dispatch]);

    const handleInputChange = (event: ChangeEvent<HTMLInputElement>): void => {
        const query = event.target.value;
        setQuery({query, page: '1'});
    };

    const fontColor1 = theme  ? '#000' : '#f1f599';
    const fontColor2 = theme  ? '#000' : '#f1f599';
    const backgroundColor = theme  ? '' : '#3c3c76';

    const customTheme = createTheme({
        palette: {
            text: {
                primary: fontColor1,
                secondary:fontColor2
            },
            background: {
                paper: backgroundColor
            },

        },
    });

    return (
        <div className={css.Search}>
                <div>
                    <ThemeProvider theme={customTheme}>
                        <Container sx={{marginTop: 1}}>
                            <TextField
                                fullWidth
                                label='Search:'
                                onChange={handleInputChange}
                            />
                        </Container>
                    </ThemeProvider>
                    <Movies movies={movies}/>
                </div>
        </div>
    );
};

export {Search};