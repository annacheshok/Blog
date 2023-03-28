import React from 'react';
import { useAppDispatch, useAppSelector } from '../../redux/hook';
import { changeFilter, changeSort } from '../../redux/slices/postsSlice';
import styles from './Option.module.scss';

interface IOption {
    optionTitle: string;
    selectTitle: string;
    isActiveSelect: boolean;
    setActiveSelect: (value: boolean) => void;
}

const Option = ({ optionTitle, selectTitle, isActiveSelect, setActiveSelect }: IOption) => {
    const theme = useAppSelector(store => store.theme.value);
    const dispatch = useAppDispatch();

    const handleClickButton = () => {
        setActiveSelect(!isActiveSelect);

        if (selectTitle === 'Date') {
            dispatch(changeFilter(optionTitle));
        }
        if (selectTitle === 'Sort') {
            dispatch(changeSort(optionTitle));
        }
    }

    return (
    <div className = {`
    ${styles.container }
    ${theme === 'dark' ? styles.containerDark : null }
    `} onClick={handleClickButton}> { optionTitle }</div>
    );
};

export default Option;