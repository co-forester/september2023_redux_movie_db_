import React, {FC, PropsWithChildren} from 'react';
import {Rating, Typography} from "@mui/material";
import {useNavigate} from "react-router-dom";

import css from './Movie.module.css'
import {IMovie} from "../../../interfaces";
import {posterURL} from "../../../constants";
import {useAppSelector} from "../../../hooks";

interface IProps extends PropsWithChildren {
    movie: IMovie
}

export const Movie: FC<IProps> = ({movie}) => {
    const theme = useAppSelector(state => state.theme.theme);
    const {poster_path, title, original_title, vote_average, release_date} = movie;
    const navigate = useNavigate();

    const toMoviesListCard = () => {
        navigate('/card', {state: {movie, poster}})
    }
    const defaultPosterURL = 'https://abrakadabra.fun/uploads/posts/2022-04/1648834390_2-abrakadabra-fun-p-otkritki-s-georginami-2.jpg';
    const poster: string = `${posterURL}/${poster_path}/&api_key=d031e7f38834f2d640ae4a98140c550f`;
    const vote: number = vote_average / 2;

    return (
        <div className={theme ? css.MovieLight : css.MovieDark} onClick={toMoviesListCard}>
            <div className={css.moviePoster}>
                <img src={poster_path ? poster : defaultPosterURL} alt={original_title}/>
            </div>
            <div className={css.ratingStars}>
                <div className={css.titleRelease}>
                    <div>{title}</div>
                    <div className={theme ? css.valueLight : css.valueDark}>{release_date}</div>
                </div>
                <div className={css.rating}>
                    <Typography className={css.legend} component="legend">Rating</Typography>
                    <Rating name="half-rating-read" defaultValue={2.5} precision={0.5} value={vote} readOnly
                            size='small'/>
                </div>
            </div>
        </div>
    );
};