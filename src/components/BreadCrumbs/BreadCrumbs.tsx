import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppSelector } from '../../redux/hook';
import styles from './BreadCrumbs.module.scss';

interface IBreadCrumb {
    title: string;
    link: string | undefined;
}

interface IBreadCrumbs {
    breadCrumbs: IBreadCrumb[];
}

const BreadCrumbs = ({breadCrumbs}: IBreadCrumbs) => {
    const theme = useAppSelector(store => store.theme.value);
    const navigate = useNavigate();
    return (
        <div className={`
        ${styles.container}
        ${theme === 'dark' ? styles.containerDark : ''}
        `}>
            {breadCrumbs.map((breadCrumb, index) => <div className={styles.breadCrumb} key={index} onClick={() => navigate(`${breadCrumb.link}`)}>{breadCrumb.title}</div>)}
        </div>
    );
};

export default BreadCrumbs;