import React, { useEffect, useRef, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../redux/hook';
import { changePage } from '../../redux/slices/postsSlice';
import { findNumbersInPagination } from '../../utils';
import PaginationButton from '../PaginationButton/PaginationButton';
import styles from './Pagination.module.scss';

const Pagination = () => {
    const theme = useAppSelector(store => store.theme.value);
    const { page, count } = useAppSelector(store => store.posts);
    const dispatch = useAppDispatch();
    const pages = findNumbersInPagination(page, count);

    const handleClickArrowPrev = () => {
        dispatch(changePage(page - 1));
    };

    const handleClickArrowNext = () => {
        dispatch(changePage(page + 1));
    };
    return (
        <div className={styles.container}>
            <button className={`
            ${styles.arrow}
            ${styles.arrowPrev}
            ${page == 1 ? styles.arrowDisabled : null}
            ${theme == 'dark' ? styles.arrowDark : null}
            `}
            onClick={handleClickArrowPrev}
            >{window.innerWidth < 768 ? '' : 'Prev' }</button>
            <div className={styles.pagination}>
                {page >= 3 ? <><PaginationButton numberOfButton={1} /><span className={styles.ellipsis}>...</span></> : null}
                {pages ? pages.map(page => <PaginationButton key={page} numberOfButton={page} />) : null}
                {(page <= 3 && count > 3)|| page < count - 1  ? <><span className={styles.ellipsis}>...</span><PaginationButton numberOfButton={count} /></> : null}
            </div>
            <button className={`
            ${styles.arrow}
            ${styles.arrowNext}
            ${page == count ? styles.arrowDisabled : null}
            ${theme == 'dark' ? styles.arrowDark : null}
            `}
            onClick={handleClickArrowNext}
            >{window.innerWidth < 768 ? '' : 'Next'}</button>
        </div>
    );
};

export default Pagination;