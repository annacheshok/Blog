import React from 'react';
import { useAppSelector } from '../../redux/hook';
import { formatDate } from '../../utils';
import styles from './Post.module.scss';

interface IPost {
    "title": string;
    "imageUrl": string;
    "publishedAt": string;
};

const Post = (props: IPost) => {
    const theme = useAppSelector(store => store.theme.value);

    return (
        <article className={theme === 'light' ? styles.container : `${styles.container} ${styles.containerDark}`}>
            <div className={styles.image}>
                <img src={props.imageUrl} alt='image' />
            </div>
            <div className={styles.text}>
                <p className={styles.textDate}>{formatDate(props.publishedAt)}</p>
                <p className={styles.textTitle}>{props.title}</p>
            </div>
        </article>
    )
}

export default Post;