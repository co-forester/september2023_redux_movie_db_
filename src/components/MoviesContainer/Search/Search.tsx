import React, {ChangeEvent, useEffect} from 'react';
import {useSearchParams} from "react-router-dom";

import css from './Search.module.css'
import {useAppDispatch, useAppSelector} from "../../../hooks";
import {movieActions} from "../../../Redux";
import {Movies} from "../Movies";

const Search = () => {
    const {movies} = useAppSelector(state => state.movies);
    const [query, setQuery] = useSearchParams({query: '', page:'1'});
    const dispatch = useAppDispatch();
    const page = + query.get('page');
    const keyWord = query.get('query');

    useEffect(() => {
        dispatch(movieActions.getKeyWord({keyWord, page}))
    }, [keyWord, page, dispatch]);

    const handleInputChange = (event: ChangeEvent<HTMLInputElement>): void => {
        const query = event.target.value;
        setQuery({ query, page: '1' }); // Оновлюємо значення параметра "word" у `query`
    };

    return (
            <div className={css.Search}>
                <div className={css.SearchHead}>
                            <form className={css.SearchMap}>
                                <input
                                    type={"text"} placeholder={'search'} className={css.SearchInput}
                                    value={keyWord || ''}
                                    onChange={handleInputChange}
                                />
                                {/*<img src={} alt={}>*/}
                            </form>
                </div>
                <Movies movies={movies}/>
            </div>
    );
};

export {Search};