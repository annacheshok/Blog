import React, { useEffect } from 'react';
import styles from './PaginationButton.module.scss';
import { useAppDispatch, useAppSelector } from '../../redux/hook';
import { changePage, getAllPosts, getAllPostsCount } from '../../redux/slices/postsSlice';

interface IPaginationButton {
    numberOfButton: number;
}

const PaginationButton = ({ numberOfButton}: IPaginationButton) => {
    const theme = useAppSelector(store => store.theme.value);
    const { page } = useAppSelector(store => store.posts);
    const dispatch = useAppDispatch();
    
    const handleClickButton = (newPage: number) => {
        dispatch(changePage(newPage));
    };

    return (
        <button className={`
        ${styles.container}
        ${page === numberOfButton ? styles.containerActive : ''}
        ${theme === 'dark' ? styles.containerDark : ''}
        `}
        onClick={() => handleClickButton(numberOfButton)}>{numberOfButton}</button>
    );
}

export default PaginationButton;
