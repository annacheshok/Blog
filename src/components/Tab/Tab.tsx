import React, { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../redux/hook';
import { changeCategory, changePage, getAllPosts, getAllPostsCount } from '../../redux/slices/postsSlice';
import styles from './Tab.module.scss';

interface ITab {
    title: string;
}

const Tab = ({title}: ITab ) => {
    const theme = useAppSelector(store => store.theme.value);
    const { category, page, count } = useAppSelector(store => store.posts);
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(getAllPostsCount({ category: category }))
        dispatch(getAllPosts({ category: category }))
    }, [category]);
    
    const setActive = () => {
        dispatch(changeCategory(title));
    }

    return (
        <div className={`
        ${category.toLowerCase() === title.toLowerCase() ? `${styles.container} ${styles.containerActive}` : styles.container}
        ${theme === 'light' ? '' : styles.containerDark}
        `}
        onClick = {setActive}>{title}</div>
    );
};

export default Tab;

