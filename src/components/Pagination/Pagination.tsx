import React from 'react';
import {useSearchParams} from "react-router-dom";

import css from './Pagination.module.css'
import {useAppSelector} from "../../hooks";

const Pagination = () => {
    const {page, total_pages} = useAppSelector(state => state.movies);
    const [, setQuery] = useSearchParams({page: '1'})
    const prevPage = () => {
        setQuery(prev =>{
            prev.set('page', (+prev.get('page')-1).toString());
            return prev
        })
    }
    const nextPage = () => {
        setQuery(prev =>{
            prev.set('page', (+prev.get('page')+1).toString());
            return prev
        })
    }

    return (
        <div className={css.Pagination}>
            <button className={css.ButPrev} disabled={(page === 1)} onClick={prevPage}>prev</button>
            <div>current {page}</div>
            <button className={css.ButNext} disabled={page === total_pages} onClick={nextPage}>next</button>
            <div>total {total_pages}</div>
        </div>
    );
};

export {Pagination};