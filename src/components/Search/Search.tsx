import React, { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../redux/hook';
import { getAllPosts, getAllPostsCount } from '../../redux/slices/postsSlice';
import styles from './Search.module.scss';

const Search = () => {
    const [inputValue, setInputValue] = useState('');
    const theme = useAppSelector(state => state.theme.value);

    const handleChangeInput = (event: any) => {
        const target = event.target.value;
        setInputValue(target);
    };

    return (
        <input type='search' className={theme === 'light' ? styles.search : `${styles.search} ${styles.searchDark}`} value={inputValue} onChange={handleChangeInput}/>
    );
};

export default Search;