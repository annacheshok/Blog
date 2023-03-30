import React, { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../redux/hook';
import { changeCategory, changePage, getAllPosts, getAllPostsCount } from '../../redux/slices/postsSlice';
import styles from './Tab.module.scss';

interface ITab {
    title: string;
}

const Tab = ({title}: ITab ) => {
    const theme = useAppSelector(store => store.theme.value);
    const { category} = useAppSelector(store => store.posts);
    const dispatch = useAppDispatch();
    
    const setActive = () => {
        dispatch(changeCategory(title));
    };

    return (
        <div className={`
        ${styles.container}
        ${category.toLowerCase() === title.toLowerCase() ? styles.containerActive : null}
        ${theme === 'light' ? '' : styles.containerDark}
        `}
        onClick = {setActive}>{title}</div>
    );
};

export default Tab;

