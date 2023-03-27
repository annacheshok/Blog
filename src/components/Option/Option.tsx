import React from 'react';
import { useAppDispatch } from '../../redux/hook';
import { changeFilter, changeSort } from '../../redux/slices/postsSlice';
import styles from './Option.module.scss';

interface IOption {
    optionTitle: string;
    selectTitle: string;
    isActiveSelect: boolean;
    setActiveSelect: (value: boolean) => void;
}

const Option = ({ optionTitle, selectTitle, isActiveSelect, setActiveSelect }: IOption) => {
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
    <div className = { styles.container } onClick={handleClickButton}> { optionTitle }</div>
    );
};

export default Option;