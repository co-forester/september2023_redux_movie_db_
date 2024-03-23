import React, {useEffect, useState} from 'react';
import {Button, createTheme, ThemeProvider, Typography} from "@mui/material";
import {useSearchParams} from "react-router-dom";

import css from './Sort.module.css';
import {useAppDispatch, useAppSelector} from "../../../hooks";
import {movieActions} from "../../../Redux";

const Sort = () => {
    const theme = useAppSelector(state => state.theme.theme);
    const [activeButton, setActiveButton] = useState('');
    const [query, setQuery] = useSearchParams({query: '', page: '1'});
    const dispatch = useAppDispatch();
    const page = +query.get('page');
    const bySort = query.get('query');

    useEffect(() => {
        dispatch(movieActions.getBySort({bySort, page}));
    }, [bySort, page, dispatch]);

    const handleButtonClick = ({queryValue}: { queryValue: string }):void => {
        setQuery({ query: queryValue, page: '1' });
        setActiveButton(queryValue);
    };

    const fontColor = theme ? '#000' : '#f1f599';
    const buttonBackgroundColor = theme ? '#000' : '#f1f599';
    const buttonActivity = theme ? '#7f7fa8' : '#4c4c9c';

    const customTheme = createTheme({
        palette: {
            primary: {
                main: buttonBackgroundColor,
            },
            text: {
                primary: fontColor,
            },
        },
    });

    return (
            <div className={css.searchBox}>
                <ThemeProvider theme={customTheme}>
                    <Typography sx={{margin: '10px', color: '#f1f599'}}>sort by</Typography>
                    <Button onClick={() => handleButtonClick({queryValue: 'popularity.asc'})} variant={'outlined'} color={'primary'} sx={{ ...(activeButton === 'popularity.asc' && { backgroundColor: buttonActivity }) }}>popularity  +</Button>
                    <Button onClick={() => handleButtonClick({queryValue: 'popularity.desc'})} variant={'outlined'} color={'primary'} sx={{ ...(activeButton === 'popularity.desc' && { backgroundColor: buttonActivity }) }}>popularity  -</Button>
                    <Button onClick={() => handleButtonClick({queryValue: 'vote_average.asc'})} variant={'outlined'} color={'primary'} sx={{ ...(activeButton === 'vote_average.asc' && { backgroundColor: buttonActivity }) }}>vote average  +</Button>
                    <Button onClick={() => handleButtonClick({queryValue: 'vote_average.desc'})} variant={'outlined'} color={'primary'} sx={{ ...(activeButton === 'vote_average.desc' && { backgroundColor: buttonActivity }) }}>vote average  -</Button>
                    <Button onClick={() => handleButtonClick({queryValue: 'primary_release_date.asc'})} variant={'outlined'} color={'primary'} sx={{ ...(activeButton === 'primary_release_date.asc' && { backgroundColor: buttonActivity }) }}>release date  +</Button>
                    <Button onClick={() => handleButtonClick({queryValue: 'primary_release_date.desc'})} variant={'outlined'} color={'primary'} sx={{ ...(activeButton === 'primary_release_date.desc' && { backgroundColor: buttonActivity }) }}>release date  -</Button>
                    <Button onClick={() => handleButtonClick({queryValue: 'vote_count.asc'})} variant={'outlined'} color={'primary'} sx={{ ...(activeButton === 'vote_count.asc' && { backgroundColor: buttonActivity }) }}>vote count +</Button>
                    <Button onClick={() => handleButtonClick({queryValue: 'vote_count.desc'})} variant={'outlined'} color={'primary'} sx={{ ...(activeButton === 'vote_count.desc' && { backgroundColor: buttonActivity }) }}>vote count -</Button>
                    <Button onClick={() => handleButtonClick({queryValue: 'revenue.asc'})} variant={'outlined'} color={'primary'} sx={{ ...(activeButton === 'revenue.asc' && { backgroundColor: buttonActivity }) }}>revenue +</Button>
                    <Button onClick={() => handleButtonClick({queryValue: 'revenue.desc'})} variant={'outlined'} color={'primary'} sx={{ ...(activeButton === 'revenue.desc' && { backgroundColor: buttonActivity }) }}>revenue -</Button>
                    <Button onClick={() => handleButtonClick({queryValue: 'original_title.asc'})} variant={'outlined'} color={'primary'} sx={{ ...(activeButton === 'original_title.asc' && { backgroundColor: buttonActivity }) }}>original title  +</Button>
                    <Button onClick={() => handleButtonClick({queryValue: 'original_title.desc'})} variant={'outlined'} color={'primary'} sx={{ ...(activeButton === 'original_title.desc' && { backgroundColor: buttonActivity }) }}>original title  -</Button>
                    <Button onClick={() => handleButtonClick({queryValue: 'title.asc'})} variant={'outlined'} color={'primary'} sx={{ ...(activeButton === 'title.asc' && { backgroundColor: buttonActivity }) }}>title  +</Button>
                    <Button onClick={() => handleButtonClick({queryValue: 'title.desc'})} variant={'outlined'} color={'primary'} sx={{ ...(activeButton === 'title.desc' && { backgroundColor: buttonActivity }) }}>title  -</Button>
                </ThemeProvider>

            </div>
    );
};

export {Sort};
