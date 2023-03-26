import React, { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../redux/hook';
import { getAllPosts, getAllPostsCount } from '../../redux/slices/postsSlice';
import styles from './Search.module.scss';

const Search = () => {
    const [inputValue, setInputValue] = useState('');
    const theme = useAppSelector(state => state.theme.value);
    const category = useAppSelector(state => state.posts.category);
    const dispatch = useAppDispatch();
    console.log(inputValue)
    useEffect (() => {
        dispatch(getAllPostsCount({ category: category, title: inputValue }))
        dispatch(getAllPosts({ category: category, title: inputValue }))
    }, [inputValue])

    const handleChangeInput = (event: any) => {
        const target = event.target.value;
        setInputValue(target);
    }
    return (
        <input type='search' className={theme === 'light' ? styles.search : `${styles.search} ${styles.searchDark}`} value={inputValue} onChange={handleChangeInput}/>
    );
};

export default Search;