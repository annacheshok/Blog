import React, { useEffect } from 'react';
import styles from './PaginationButton.module.scss';
import { useAppDispatch, useAppSelector } from '../../redux/hook';
import { changePage, getAllPosts, getAllPostsCount } from '../../redux/slices/postsSlice';

interface IPaginationButton {
    numberOfButton: number;
}

const PaginationButton = ({ numberOfButton}: IPaginationButton) => {
    const theme = useAppSelector(store => store.theme.value);
    const { page, count, category } = useAppSelector(store => store.posts);
    const dispatch = useAppDispatch();
    useEffect (() => {
        dispatch(getAllPostsCount({ category: category}))
        dispatch(getAllPosts({ category: category, page: page }))
        if (page > count && page != 1) {
            dispatch(changePage(count));
        }
    }, [])
    
    const handleClickButton = (newPage: number) => {
        dispatch(changePage(newPage));
    };

    return (
        <button className=
        {`
        ${styles.container}
        ${page === numberOfButton ? styles.containerActive : null}
        ${theme === 'dark' ? styles.containerDark : null}
        `}
        onClick={() => handleClickButton(numberOfButton)}>{numberOfButton}</button>
    );
}

export default PaginationButton;
