import React, { useState } from 'react';
import logo from '../../images/logo.png';
import styles from './Header.module.scss';
import Search from '../Search/Search';
import { useAppSelector } from '../../redux/hook';
import SwitchTheme from '../SwitchTheme/SwitchTheme';

const Header = () => {
    const theme = useAppSelector(state => state.theme.value);
    const [isOpenMenu, setOpenMenu] = useState(false);

    const handleBurgerClick = () => {
        setOpenMenu(!isOpenMenu);
    };
    
    return (
        <div className={`
        ${styles.container}
        ${isOpenMenu ? styles.containerActive : ''}
        ${theme === 'dark' ? styles.containerDark : '' }
        `
        }>
            <img src={logo} alt='image' className={styles.logo} />
            <button className={styles.burger} onClick={handleBurgerClick}></button>
            <Search isOpenMenu={isOpenMenu} setOpenMenu={setOpenMenu}/>
            <div className={styles.user}>
                <div className={styles.userLogo}></div>
                <div className={styles.userName}>sign in</div>
            </div>
            <div className={styles.switch}>
                <p className={styles.switchTitle}>Dark theme</p>
                <SwitchTheme />
            </div>
            <button className={styles.login}>log in</button>
        </div>
    );
};

export default Header;
