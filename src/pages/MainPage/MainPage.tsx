import React, { useState, useEffect } from 'react';
import styles from './MainPage.module.scss';
import { useAppDispatch, useAppSelector } from '../../redux/hook';
import PageTemplate from '../PageTemplate/PageTemplate';
import Posts from '../../components/Posts/Posts';
import Tabs from '../../components/Tabs/Tabs';
import Pagination from '../../components/Pagination/Pagination';
import FilterAndSorting from '../../components/FilterAndSorting/FilterAndSorting';
import { changePage, getAllPosts, getAllPostsCount } from '../../redux/slices/postsSlice';

const MainPage = () => {
    return (
        <PageTemplate title='blog'>
            <FilterAndSorting/>
            <Tabs />
            <Posts />
            <Pagination />
        </PageTemplate>
    );
};

export default MainPage;


