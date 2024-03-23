import React, {useEffect} from 'react';
import {Button, createTheme, ThemeProvider, Typography} from "@mui/material";
import {useSearchParams} from "react-router-dom";

import css from './Sort.module.css';
import {useAppDispatch, useAppSelector} from "../../../hooks";
import {movieActions} from "../../../Redux";

const Sort = () => {
    const theme = useAppSelector(state => state.theme.theme);
    const [query, setQuery] = useSearchParams({query: '', page: '1'});
    const dispatch = useAppDispatch();
    const page = +query.get('page');
    const bySort = query.get('query');

    useEffect(() => {
        dispatch(movieActions.getBySort({bySort, page}));
    }, [bySort, page, dispatch]);

    const sortByPopPlus = (): void => {
        const query = 'popularity.asc';
        setQuery({query, page: '1'});
    };
    const sortByPop = (): void => {
        const query = 'popularity.desc';
        setQuery({query, page: '1'});
    };

    const sortByAveragePlus = (): void => {
        const query = 'vote_average.asc';
        setQuery({query, page: '1'});
    };
    const sortByAverage = (): void => {
        const query = 'vote_average.desc';
        setQuery({query, page: '1'});
    };

    const sortByReleasePlus = (): void => {
        const query = 'primary_release_date.asc';
        setQuery({query, page: '1'});
    };
    const sortByRelease = (): void => {
        const query = 'primary_release_date.desc';
        setQuery({query, page: '1'});
    };

    const sortByCountPlus = (): void => {
        const query = 'vote_count.asc';
        setQuery({query, page: '1'});
    };
    const sortByCount = (): void => {
        const query = 'vote_count.desc';
        setQuery({query, page: '1'});
    };

    const sortByRevenuePlus = (): void => {
        const query = 'revenue.asc';
        setQuery({query, page: '1'});
    };
    const sortByRevenue = (): void => {
        const query = 'revenue.desc';
        setQuery({query, page: '1'});
    };
    const sortByOrigTitlePlus = (): void => {
        const query = 'original_title.asc';
        setQuery({query, page: '1'});
    };
    const sortByOrigTitle = (): void => {
        const query = 'original_title.desc';
        setQuery({query, page: '1'});
    };
    const sortByTitlePlus = (): void => {
        const query = 'title.asc';
        setQuery({query, page: '1'});
    };
    const sortByTitle = (): void => {
        const query = 'title.desc';
        setQuery({query, page: '1'});
    };

    const fontColor = theme ? '#000' : '#f1f599';
    const buttonBackgroundColor = theme ? '#000' : '#f1f599';

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
                    <Button  onClick={sortByPopPlus} variant={'outlined'} color={'primary'}>popularity  +</Button>
                    <Button  onClick={sortByPop} variant={'outlined'} color={'primary'}>popularity  -</Button>
                    <Button onClick={sortByAveragePlus} variant={'outlined'} color={'primary'} sx={{marginTop: 1}}>vote average  +</Button>
                    <Button onClick={sortByAverage} variant={'outlined'} color={'primary'} sx={{marginTop: 1}}>vote average  -</Button>
                    <Button onClick={sortByReleasePlus} variant={'outlined'} color={'primary'} sx={{marginTop: 1}}>release date  +</Button>
                    <Button onClick={sortByRelease} variant={'outlined'} color={'primary'} sx={{marginTop: 1}}>release date  -</Button>
                    <Button onClick={sortByCountPlus} variant={'outlined'} color={'primary'} sx={{marginTop: 1}}>vote count  +</Button>
                    <Button onClick={sortByCount} variant={'outlined'} color={'primary'} sx={{marginTop: 1}}>vote count  -</Button>
                    <Button onClick={sortByRevenuePlus} variant={'outlined'} color={'primary'} sx={{marginTop: 1}}>revenue  +</Button>
                    <Button onClick={sortByRevenue} variant={'outlined'} color={'primary'} sx={{marginTop: 1}}>revenue  -</Button>
                    <Button onClick={sortByOrigTitlePlus} variant={'outlined'} color={'primary'} sx={{marginTop: 1}}>original title  +</Button>
                    <Button onClick={sortByOrigTitle} variant={'outlined'} color={'primary'} sx={{marginTop: 1}}>original title  -</Button>
                    <Button onClick={sortByTitlePlus} variant={'outlined'} color={'primary'} sx={{marginTop: 1}}>title  +</Button>
                    <Button onClick={sortByTitle} variant={'outlined'} color={'primary'} sx={{marginTop: 1}}>title  -</Button>
                </ThemeProvider>

            </div>
    );
};

export {Sort};
