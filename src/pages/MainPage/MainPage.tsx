import React, {useEffect, useRef } from 'react';
import { useAppDispatch, useAppSelector } from '../../redux/hook';
import PageTemplate from '../PageTemplate/PageTemplate';
import Posts from '../../components/Posts/Posts';
import Tabs from '../../components/Tabs/Tabs';
import Pagination from '../../components/Pagination/Pagination';
import FilterAndSorting from '../../components/FilterAndSorting/FilterAndSorting';
import { changePage, getAllPosts, getAllPostsCount } from '../../redux/slices/postsSlice';

const MainPage = () => {
    const { category, page, filter, count, sort } = useAppSelector(store => store.posts);
    const dispatch = useAppDispatch();
    const componentDidMount = useRef(false);
    useEffect(() => {
        componentDidMount.current = true;
    }, []);

    useEffect (() => {
        if (page > count && count != 0 && componentDidMount.current) {
            dispatch(changePage(count));
        }

        dispatch(getAllPostsCount({ category: category, page: page, filter: filter, count: count, sort: sort }))
        dispatch(getAllPosts({category: category, page: page, filter: filter, count: count, sort: sort}))
    }, [category, page, count, filter, sort]);

    return (
        <PageTemplate title='blog'>
            <FilterAndSorting/>
            <Tabs />
            <Posts/>
            <Pagination />
        </PageTemplate>
    );
};

export default MainPage;


