import React, { useState } from 'react';
import logo from '../../images/logo.png';
import styles from './Header.module.scss';
import Search from '../Search/Search';
import { useAppDispatch, useAppSelector } from '../../redux/hook';
import SwitchTheme from '../SwitchTheme/SwitchTheme';
import { useNavigate } from 'react-router-dom';
import SignIn from '../SignIn/SignIn';
import { setAuthorized } from '../../redux/slices/registrationSlice';

const Header = () => {
    const theme = useAppSelector(state => state.theme.value);
    const isAuthorized = useAppSelector(state => state.registration.isAuthorized);
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const [isOpenMenu, setOpenMenu] = useState(false);

    const handleBurgerClick = () => {
        setOpenMenu(!isOpenMenu);
    };

    const handleLogOut = () => {
        if(!isAuthorized) navigate('/signin');
        else {
        localStorage.clear();
        dispatch(setAuthorized(false));
        navigate('/');
        }
        setOpenMenu(!isOpenMenu);
    }
    
    return (
        <div className={`
        ${styles.container}
        ${isOpenMenu ? styles.containerActive : ''}
        ${isAuthorized ? styles.containerAuth : ''}
        ${theme === 'dark' ? styles.containerDark : '' }
        `
        }>
            <img src={logo} alt='image' className={styles.logo} />
            <button className={styles.burger} onClick={handleBurgerClick}></button>
            <Search isOpenMenu={isOpenMenu} setOpenMenu={setOpenMenu}/>
            <SignIn isOpenMenu={isOpenMenu} />
            <div className={styles.switch}>
                <p className={styles.switchTitle}>Dark theme</p>
                <SwitchTheme />
            </div>
            <button className={styles.login} onClick={handleLogOut}>{isAuthorized ? 'Log Out' : 'Log In'}</button>
        </div>
    );
};

export default Header;
