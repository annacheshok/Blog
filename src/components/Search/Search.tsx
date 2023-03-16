import React from 'react';
import { useAppSelector } from '../../redux/hook';
import styles from './Search.module.scss';

const Search = () => {
    const theme = useAppSelector(state => state.theme.value);

    return (
        <input type='search' className={theme === 'light' ? styles.search : `${styles.search} ${styles.searchDark}`} />
    );
};

export default Search;