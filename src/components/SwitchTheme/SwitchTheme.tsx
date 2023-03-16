import React from 'react';
import { useAppDispatch, useAppSelector } from '../../redux/hook';
import { changeTheme } from '../../redux/slices/themeSlice';
import styles from './SwitchTheme.module.scss';

const SwitchTheme = () => {
    const theme = useAppSelector (state => state.theme.value);
    const dispatch = useAppDispatch();

    const handleChangeTheme = () => {
        dispatch(changeTheme())
    };

    return (
            <input type='checkbox' className={styles.switch} onChange={handleChangeTheme} checked={theme === 'light' ? false : true} />
    );
};

export default SwitchTheme;
