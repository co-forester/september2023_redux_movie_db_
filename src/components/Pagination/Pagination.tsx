import React from 'react';
import {useSearchParams} from "react-router-dom";

import css from './Pagination.module.css'
import {useAppSelector} from "../../hooks";

const Pagination = () => {
    const theme = useAppSelector(state => state.theme.theme);
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
        <div className={theme ? css.PaginationLight : css.PaginationDark}>
            <button className={theme ? css.butPrevLight : css.butPrevDark} disabled={(page === 1)} onClick={prevPage}>prev</button>
            <div className={css.currentPage}>current {page}</div>
            <button className={theme ? css.butNextLight : css.butNextDark} disabled={page === total_pages} onClick={nextPage}>next</button>
            <div className={css.totalPage}>total {total_pages}</div>
        </div>
    );
};

export {Pagination};