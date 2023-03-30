import React from 'react';
import { useAppSelector } from '../../redux/hook';
import styles from './PageTemplate.module.scss';

interface IPageTemplate {
    children: React.ReactNode;
    title?: string;
}

const PageTemplate = ({title, children}: IPageTemplate) => {
    const theme = useAppSelector(state => state.theme.value);

    return (
        <div className={styles.container}>
            <h1 className={`
            ${styles.title}
            ${theme === 'dark' ? styles.titleDark : null}
            `}>{title}</h1>
            <div className={styles.content}>{children}</div>
        </div>
    );
};

export default PageTemplate;