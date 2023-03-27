import React, { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../redux/hook';
import { changeFilter, getAllPosts, getAllPostsCount } from '../../redux/slices/postsSlice';
import { getDateForFilter } from '../../utils';
import styles from './FilterButton.module.scss';

interface IFilterButton {
    title: string;
    activeFilterButton: string;
    setActiveFilterButton: (value: string) => void;
};

const FilterButton = ({ title, activeFilterButton, setActiveFilterButton }: IFilterButton) => {
    const theme = useAppSelector( store => store.theme.value);
    const dispatch = useAppDispatch();

    const handleClickButton = () => {
        setActiveFilterButton(title);
        dispatch(changeFilter(title));
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
