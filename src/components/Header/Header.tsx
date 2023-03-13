import React, { useState } from 'react';
import logo from '../../images/logo.png';
import styles from './Header.module.scss';
import Search from '../Search/Search';

const Header = () => {
    const [isOpenMenu, setOpenMenu] = useState(false);

    const handleBurgerClick = () => {
        setOpenMenu(!isOpenMenu);
    };

    return (
        <div className={isOpenMenu ? `${styles.container} ${styles.active}` : `${styles.container}`}>
            <img src={logo} alt='image' className={styles.logo} />
            <button className={styles.burger} onClick={handleBurgerClick}></button>
            <Search />
            <div className={styles.user}>
                <div className={styles.userLogo}></div>
                <div className={styles.userName}>sign in</div>
            </div>
        </div>
    );
};

export default Header;