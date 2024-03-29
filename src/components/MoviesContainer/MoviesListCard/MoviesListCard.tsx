import React from 'react';
import {Badge, Container, createTheme, Rating, ThemeProvider, Typography} from "@mui/material";

import css from "./MoviesListCard.module.css";
import { useAppLocation, useAppSelector } from "../../../hooks";
import { IGenre, IMovie } from "../../../interfaces";

const MoviesListCard = () => {
    const theme = useAppSelector(state => state.theme.theme);
    const genres = useAppSelector(state => state.movies.genres);
    const { state: { movie, poster } } = useAppLocation<{ movie: IMovie, poster: string }>();
    const { original_title, overview, release_date, title, vote_average, genre_ids, poster_path} = movie;

    const customTheme = createTheme({
        palette: {
            primary: {
                main: '#f29d0a',
            },
            secondary: {
                main: '#a4de8e'
            }
        },
    });

    const genresBadges = genres
        .filter((item: IGenre) => genre_ids.includes(item.id))
        .map((item: IGenre, index: number) => (
            <Badge key={index} badgeContent={item.name} color="primary" sx={{position: 'absolute', top: `${10 + (index * 25)}px`, right: '10px'}}/>
        ));

    const vote: number = vote_average / 2;
    const defaultPosterURL = 'https://st5.depositphotos.com/17620692/70777/v/600/depositphotos_707771044-stock-illustration-minimal-covers-design-colorful-halftone.jpg';

    return (
        <div className={theme ? css.MoviesListCardLight : css.MoviesListCardDark}>
            <div className={css.card}>
                <div className={css.img}>
                    <ThemeProvider theme={customTheme}>
                        <Container style={{ position: 'relative' }}>
                            <img src={poster_path ? poster : defaultPosterURL} alt={original_title} />
                            {genresBadges}
                        </Container>
                    </ThemeProvider>
                </div>
                <div className={css.movie}>
                    <div className={css.titleBox}>
                        <div className={css.titleOrig}>
                            <div className={css.titleOrigValue}>{original_title}</div>
                        </div>
                        <div className={css.title}>
                            <div className={theme ? css.titleFieldLight : css.titleFieldDark}>original name:</div>
                            <div className={css.titleValue}>{title}</div>
                        </div>
                    </div>
                    <div>
                        <div className={theme ? css.fieldLight : css.fieldDark}>Release date:</div>
                        <div className={theme ? css.valueLight : css.valueDark}>{release_date}</div>
                    </div>
                    <div className={theme ? css.ratingLight : css.ratingDark}>
                        <Typography className={css.legend} component="legend">Rating</Typography>
                        <Rating name="half-rating-read" defaultValue={2.5} precision={0.5} value={vote} readOnly size='large' />
                    </div>
                    <div className={css.overview}>
                        <div className={css.overviewField}>Overview:</div>
                        <div className={theme ? css.overviewValueLight : css.overviewValueDark}>{overview}</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export { MoviesListCard };