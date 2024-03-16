import React from 'react';
import {Badge, Rating, Typography} from "@mui/material";

import css from "./MoviesListCard.module.css";
import {useAppLocation} from "../../../hooks";
import {IMovie} from "../../../interfaces";

const MoviesListCard = () => {
    const {state:{movie, poster}} = useAppLocation<{movie:IMovie, poster: string}>()
    const {original_title, overview, release_date, title, vote_average, genre_ids} = movie;
    // const genresMovie: string[] = (gen.filter((item: IGenre) => genre_ids.includes(item.id)).map((item: IGenre) => item.name)).join();
    const vote: number = vote_average / 2;

    return (
        <div className={css.MoviesListCard}>
            <div className={css.Card}>
                <div className={css.Img}>
                    {/*<Badge className={css.Badge} badgeContent={genresMovie} color="primary">*/}
                    <img src={poster} alt={original_title}/>
                    {/*</Badge>*/}
                </div>
                <div className={css.Movie}>
                    <div className={css.TitleBox}>
                        <div className={css.TitleOrig}>
                            <div className={css.TitleOrigValue}>{original_title}</div>
                        </div>
                        <div className={css.Title}>
                            <div className={css.TitleField}>original name:</div>
                            <div className={css.TitleValue}>{title}</div>
                        </div>
                    </div>
                    <div>
                        <div className={css.Field}>Release date:</div>
                        <div className={css.Value}>{release_date}</div>
                    </div>
                    <div className={css.Rating}>
                        <Typography className={css.Legend} component="legend">Rating</Typography>
                        <Rating name="half-rating-read" defaultValue={2.5} precision={0.5} value={vote} readOnly
                                size='large'/>
                    </div>
                    <div className={css.Overview}>
                        <div className={css.OverviewField}>Overview:</div>
                        <div className={css.OverviewValue}>{overview}</div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export {MoviesListCard};