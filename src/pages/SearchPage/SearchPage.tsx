import React, { useEffect, useMemo } from 'react';
import styles from './SearchPage.module.scss';
import Pagination from '../../components/Pagination/Pagination';
import Posts from '../../components/Posts/Posts';
import { useAppDispatch, useAppSelector } from '../../redux/hook';
import { changePage, getAllPosts, getAllPostsCount } from '../../redux/slices/postsSlice';
import PageTemplate from '../PageTemplate/PageTemplate';

const SearchPage = () => {
    const { category, page, count, filter, sort, search } = useAppSelector(store => store.posts);
    const theme = useAppSelector(store => store.theme.value);
    const dispatch = useAppDispatch();
    useEffect(() => {
        dispatch(changePage(1));
    }, []);

    useEffect(() => {
        if (page > count && count != 0) {
            dispatch(changePage(count));
        }
        dispatch(getAllPostsCount({ category: category, page: page, count: count, filter: filter, sort: sort, search: search }));
        dispatch(getAllPosts({ category: category, page: page, count: count, filter: filter, sort: sort, search: search }))
    }, [page, search])

    return (
        <PageTemplate >
            <div className={`
            ${styles.result}
            ${theme === 'dark' ? styles.resultDark : ''}`
            }>
                {search && count ? `Search results '${search}'` : 'No results found'}
            </div>
            <Posts />
            <Pagination />
        </PageTemplate>
    )
};

export default SearchPage;