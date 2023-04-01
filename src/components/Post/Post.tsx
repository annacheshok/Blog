import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppSelector } from '../../redux/hook';
import { formatDate } from '../../utils';
import styles from './Post.module.scss';

interface IPost {
    "id": number;
    "title": string;
    "imageUrl": string;
    "publishedAt": string;
};

const Post = (props: IPost) => {
    const theme = useAppSelector(store => store.theme.value);
    const category = useAppSelector(store => store.posts.category);
    const navigate = useNavigate();

    return (
        <article className={`
        ${styles.container}
        ${theme === 'dark' ? styles.containerDark : ''}
        `}
        onClick={() => navigate(`/${category}/${props.id}`)}
        >
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