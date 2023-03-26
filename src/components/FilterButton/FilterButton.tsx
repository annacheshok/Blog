import React, { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../redux/hook';
import { getAllPosts, getAllPostsCount } from '../../redux/slices/postsSlice';
import { getDateForFilter } from '../../utils';
import styles from './FilterButton.module.scss';

interface IFilterButton {
    title: string;
    activeFilterButton: string;
    setActiveFilterButton: (value: string) => void;
};

const FilterButton = ({ title, activeFilterButton, setActiveFilterButton }: IFilterButton) => {
    const theme = useAppSelector( store => store.theme.value);
    const {category, page} = useAppSelector( store => store.posts);
    const dispatch = useAppDispatch();
    useEffect(() => {
        const dateForFilter = getDateForFilter(title);
        dispatch(getAllPostsCount({ category: category, date: dateForFilter, page: page }));
        dispatch(getAllPosts({ category: category, date: dateForFilter, page: page }));
    }, [getDateForFilter, page])
    
    const handleClickButton = () => {
        setActiveFilterButton(title);
        const dateForFilter = getDateForFilter(title);
        dispatch(getAllPostsCount({ category: category, date: dateForFilter }));
        dispatch(getAllPosts({ category: category, date: dateForFilter }));
    };

    return (
        <button 
        className={`
        ${styles.container}
        ${activeFilterButton === title ? styles.containerActive : null}
        ${theme === 'dark' ? styles.containerDark : null}
        `}
        onClick={handleClickButton}>{title}</button>
    );
};

export default FilterButton;