import React from 'react';
import styles from './Search.module.scss';

const Search = () => {
    return (
        <input type='search' className={styles.search} />
    );
};

export default Search;