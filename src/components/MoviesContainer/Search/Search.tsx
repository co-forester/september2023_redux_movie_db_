import React, {useEffect} from 'react';

import css from './Search.module.css'
import {useAppDispatch, useAppSelector} from "../../../hooks";
import {useSearchParams} from "react-router-dom";
import {movieActions} from "../../../Redux";
import {Movies} from "../Movies";

const Search = () => {
    const {movies} = useAppSelector(state => state.movies);
    const [query, setQuery] = useSearchParams({query: 'star', page:'1'});
    const dispatch = useAppDispatch();
    const page = + query.get('page');
    const keyWord = query.get('query')

    useEffect(() => {
        dispatch(movieActions.getKeyWord({keyWord, page}))
    }, [keyWord, page]);

    return (
            <div className={css.Search}>
                <div className={css.SearchHead}>
                    <div className={css.SearchMap}>
                        <div>
                            <form>
                                <input type={"text"} placeholder={'search'} className={css.SearchInput}
                                       onChange={(event) => setQuery({query: event.target.value})}
                                />
                                {/*<img src={} alt={}>*/}
                            </form>
                        </div>
                    </div>

                </div>
                <Movies movies={movies}/>
            </div>
    );
};

export {Search};