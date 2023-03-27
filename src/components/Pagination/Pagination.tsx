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
    const width = window.innerWidth;
    const pages = findNumbersInPagination(page, count, width);

    const handleClickArrowPrev = () => {
        dispatch(changePage(page - 1));
    };

    const handleClickArrowNext = () => {
        dispatch(changePage(page + 1));
    };

    return (
        <div className={`
         ${styles.container}
         ${theme == 'dark' ? styles.containerDark : null}
         ${count == 0 ? styles.containerDisabled : null}
        `}>
            <button className={`
            ${styles.arrow}
            ${styles.arrowPrev}
            ${page == 1 ? styles.arrowDisabled : null}
            `}
                onClick={handleClickArrowPrev}
            >{width < 768 ? '' : 'Prev'}</button>
            <div className={styles.pagination}>
                {(page >= 3 && width > 768) || (page > count / 2 && count >= 3) ? <><PaginationButton numberOfButton={1} /><span className={styles.ellipsis}>...</span></> : null}
                {pages ? pages.map(page => <PaginationButton key={page} numberOfButton={page} />) : null}
                {(page <= 3 && count > 3) || (page < count - 1 && width > 768) || (page < count / 2) ? <><span className={styles.ellipsis}>...</span><PaginationButton numberOfButton={count} /></> : null}
            </div>
            <button className={`
            ${styles.arrow}
            ${styles.arrowNext}
            ${page == count ? styles.arrowDisabled : null}
            `}
                onClick={handleClickArrowNext}
            >{width < 768 ? '' : 'Next'}</button>
        </div>
    );
};

export default Pagination;