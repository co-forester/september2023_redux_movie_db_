import React, {FC, PropsWithChildren} from 'react';
import {Rating, Typography} from "@mui/material";

import css from './Movie.module.css'
import {IMovie} from "../../../interfaces";
import {posterURL} from "../../../constants";
import {useNavigate} from "react-router-dom";

interface IProps extends PropsWithChildren{
    movie: IMovie
}

export const Movie: FC<IProps>= ({movie}) => {
    const {poster_path, title, original_title, vote_average} = movie;
    const navigate = useNavigate();

    const toMoviesListCard = () => {
        navigate('/card', {state: {movie, poster}})
    }
    const poster: string = `${posterURL}/${poster_path}/&api_key=d031e7f38834f2d640ae4a98140c550f`;
    const vote: number = vote_average / 2;
    return (
        <div className={css.Movie} onClick={toMoviesListCard}>
            <div className={css.MoviePoster}>
                <img src={poster} alt={original_title}/>
            </div>
            <div className={css.RatingStars}>
                <div>{title}</div>
                <div className={css.Rating}>
                    <Typography className={css.Legend} component="legend">Rating</Typography>
                    <Rating name="half-rating-read" defaultValue={2.5} precision={0.5} value={vote} readOnly
                            size='small'/>
                </div>
            </div>
        </div>
    );
};