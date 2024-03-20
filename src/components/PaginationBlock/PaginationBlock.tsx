import React, {PropsWithChildren} from 'react';
import {useSearchParams} from "react-router-dom";
import {createTheme, Pagination, ThemeProvider} from "@mui/material";

import {useAppSelector} from "../../hooks";

const PaginationBlock = () => {
    const theme = useAppSelector(state => state.theme.theme);
    const {page, total_pages} = useAppSelector(state => state.movies);
    const [, setQuery] = useSearchParams({page: '1'})

    const handleChangePage = (event: React.ChangeEvent<unknown>, value: number) => {
        setQuery(query => {
            query.set('page', value.toString());
            return query;
        });
    };

    const fontColor = theme  ? '#000' : '#f1f599';
    const backgroundColor = theme  ? '' : '#3c3c76';

    const customTheme = createTheme({
        palette: {
            text: {
                primary: fontColor,
            },
            background: {
                paper: backgroundColor
            }
        },
    });

    return (
        <div>
            <ThemeProvider theme={customTheme}>
                <Pagination
                    count={total_pages}
                    page={page}
                    onChange={handleChangePage}
                    siblingCount={10}
                    size={"medium"}
                    sx={{marginY: 1, marginX: 'auto'}}
                />
            </ThemeProvider>
        </div>
    );
};

export {PaginationBlock};