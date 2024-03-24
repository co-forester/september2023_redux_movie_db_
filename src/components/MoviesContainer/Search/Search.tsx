import React, {ChangeEvent, useEffect} from 'react';
import {useSearchParams} from "react-router-dom";
import {CircularProgress, Container, createTheme, TextField, ThemeProvider} from '@mui/material'

import css from './Search.module.css'
import {useAppDispatch, useAppSelector} from "../../../hooks";
import {movieActions} from "../../../Redux";
import {Movies} from "../Movies";

const Search = () => {
    const theme = useAppSelector(state => state.theme.theme);
    const {movies} = useAppSelector(state => state.movies);
    const {isLoading} = useAppSelector(state => state.loadingReducer);
    const [query, setQuery] = useSearchParams({query: 'monsters', page: '1'});
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

    const backgroundColor = theme ? '#a7a7d7' : '#47477b';
    const activeBackgroundColor = theme ? '#9a9acb' : '#37375f';
    const borderColor = theme ? '#000' : '#f1f599';
    const activeBorderColor = theme ? '#000' : '#fb1616';
    const fontColor1 = theme ? '#000' : '#f1f599';
    const fontColor2 = theme ? '#000' : '#f1f599';

    const customTheme = createTheme({
        palette: {
            text: {
                primary: fontColor1,
                secondary: fontColor2
            },
        },
    });

    return (
        <div className={css.Search}>
                    <ThemeProvider theme={customTheme}>
                        <Container sx={{marginTop: 1}}>
                            <TextField
                                fullWidth
                                label='Search:'
                                onChange={handleInputChange}
                                sx={{
                                    borderColor: borderColor,
                                    '& input': {
                                        backgroundColor: backgroundColor,
                                        borderColor: borderColor,
                                        '&:focus': {
                                            backgroundColor: activeBackgroundColor,
                                            borderColor: activeBorderColor
                                        }
                                    }
                                }}
                            />
                        </Container>
                    </ThemeProvider>
            {isLoading ? (<CircularProgress color="primary" />):(<Movies movies={movies}/>)}
        </div>
    );
};

export {Search};