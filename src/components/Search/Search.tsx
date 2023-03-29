import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../redux/hook';
import { changeSearch, getAllPosts, getAllPostsCount } from '../../redux/slices/postsSlice';
import styles from './Search.module.scss';

const Search = () => {
    const [inputValue, setInputValue] = useState('');
    const theme = useAppSelector(state => state.theme.value);
    const { search } = useAppSelector(state => state.posts);
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const componentDidMount = useRef(false);
    useEffect(() => {
        componentDidMount.current = true;
    }, []);

    const handleChangeInputSearch = (event: any) => {
        setInputValue(event.target.value);
    };

    const handleSearch = (event: any) => {
        if (event.code === 'Enter') {
            dispatch(changeSearch(inputValue));
            if (inputValue === '' && componentDidMount.current) {
                dispatch(changeSearch(search));
            }
            navigate('/search');
        }
    };

    return (
        <input
            type='search'
            className={`
        ${styles.search}
        ${theme === 'dark' ? styles.searchDark : null}
        `}
            value={inputValue}
            onKeyDown={handleSearch}
            onChange={handleChangeInputSearch}
        />
    );
};

export default Search;