import React, { useEffect, useMemo, useState } from 'react';
import styles from './SignIn.module.scss';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../redux/hook';
import LogOut from '../../images/LogOut.svg';
import { setAuthorized } from '../../redux/slices/registrationSlice';
import { IUser } from '../../types';
import { getNameAndSurnameOfUser } from '../../utils';

interface IOpenMenu {
    isOpenMenu: boolean;
}

const SignIn = ({ isOpenMenu }: IOpenMenu) => {
    const theme = useAppSelector(store => store.theme.value);
    const isAuthorized = useAppSelector(store => store.registration.isAuthorized);
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const userLocaleStorage = localStorage.getItem('user');
    const [user, setUser] = useState<IUser | undefined>(undefined);
    
    useEffect(() => {
        setUser(userLocaleStorage ? JSON.parse(userLocaleStorage) : undefined)
    }, [userLocaleStorage, isAuthorized])

    const handleLogOut = () => {
        localStorage.clear();
        dispatch(setAuthorized(false));
    }

    const getUserName = useMemo(() => getNameAndSurnameOfUser(user?.name), [user]);

    return (
        <div className={`
        ${styles.container}
        ${theme === 'dark' ? styles.containerDark : ''}
        ${isAuthorized && isOpenMenu ? styles.containerVisible : ''}
        `}
            onClick={!isAuthorized ? () => navigate('/signin') : () => { }}>
            <div className=
                {`
            ${styles.logo}
            ${isAuthorized ? styles.logoDisabled : ''}
            `}>
                {getUserName ? `${getUserName[0]} ${getUserName[1]}` : ''}</div>
            <div className={styles.name}>{isAuthorized ? `${user?.name}` : 'Sign in'}</div>
            <img src={LogOut} onClick={handleLogOut}
                className=
                {`
            ${styles.logOut}
            ${!isAuthorized || window.innerWidth <= 768 ? styles.logOutDisabled : ''}
            `} alt='image' />
        </div>
    );
};

export default SignIn;