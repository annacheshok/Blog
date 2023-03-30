import React, { useState } from 'react';
import styles from './Select.module.scss';
import Option from '../Option/Option';
import { useAppSelector } from '../../redux/hook';

interface ISelect {
    optionTitles: string[];
    selectTitle: string;
}

const Select = ({optionTitles, selectTitle}: ISelect) => {
    const theme = useAppSelector(store => store.theme.value);
    const { filter, sort} = useAppSelector(store => store.posts);
    const [isActiveSelect, setActiveSelect] = useState(false);

    const handleChangeValue = () => {
        setActiveSelect(!isActiveSelect);
    };

    return (
        <div className={`
            ${styles.container}
            ${selectTitle === 'Date' ? styles.containerDate : null}
            ${theme === 'dark' ? styles.containerDark : null}
            ${isActiveSelect  ? styles.containerActive : null}
            `}>
            <button className={styles.activeOption} onClick={handleChangeValue}>
            <span>{selectTitle}: </span>
            {
                    selectTitle === 'Sort' ? sort : 'A-Z' || (selectTitle === 'Date' || filter == '' ? 'Day' : filter)
            }
            </button>
            <div className={styles.options}>
                {optionTitles.map((option, index) => <Option key={index} selectTitle={selectTitle} optionTitle={option} isActiveSelect={isActiveSelect} setActiveSelect={setActiveSelect}/>)}
            </div>
        </div>
    );
};

export default Select;