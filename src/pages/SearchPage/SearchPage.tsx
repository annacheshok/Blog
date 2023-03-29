import React, { useEffect, useMemo } from 'react';
import styles from './SearchPage.module.scss';
import Pagination from '../../components/Pagination/Pagination';
import Posts from '../../components/Posts/Posts';
import { useAppDispatch, useAppSelector } from '../../redux/hook';
import { changePage, getAllPosts, getAllPostsCount } from '../../redux/slices/postsSlice';
import PageTemplate from '../PageTemplate/PageTemplate';

const SearchPage = () => {
    const { category, page, count, filter, sort, search } = useAppSelector(store => store.posts);
    const dispatch = useAppDispatch();

    useEffect(() => {
        if (page > count && count != 0) {
            dispatch(changePage(count));
        }
        dispatch(getAllPostsCount({ category: category, page: page, count: count, filter: filter, sort: sort, search: search }));
        dispatch(getAllPosts({ category: category, page: page, count: count, filter: filter, sort: sort, search: search }))
    }, [page, search])

    return (
        <PageTemplate >
            <div className={styles.result}>
                {search && count ? `Search results '${search}'` : 'No results found'}
            </div>
            <Posts />
            <Pagination />
        </PageTemplate>
    )
};

export default SearchPage;