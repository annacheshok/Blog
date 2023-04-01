import React from 'react';
import styles from './Footer.module.scss';
import SwitchTheme from '../SwitchTheme/SwitchTheme';
import { useAppSelector } from '../../redux/hook';

const Footer = () => {
    const theme = useAppSelector(state => state.theme.value);

    return (
        <div className={styles.wrapper}>
            <div className={`
        ${styles.container}
        ${theme === 'dark' ? styles.containerDark : ''}
        `}>
                <p className={styles.copyright}>&copy;2023 Blogolog</p>
                <div className={styles.theme}>
                    <p className={styles.themeTitle}>Dark theme</p>
                    <SwitchTheme />
                </div>
            </div>
        </div>
    );
};

export default Footer;