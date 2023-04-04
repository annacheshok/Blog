import React, { useEffect, useState } from 'react';
import styles from './ContentPage.module.scss';
import { useParams } from 'react-router-dom';
import BreadCrumbs from '../../components/BreadCrumbs/BreadCrumbs';
import { useAppDispatch, useAppSelector } from '../../redux/hook';
import { getPostById } from '../../redux/slices/postsSlice';
import { IPost } from '../../types';
import PageTemplate from '../PageTemplate/PageTemplate';
import Slider from '../../components/Slider/Slider';
import Icon from '../../components/Icon/Icon';

const ContentPage = () => {
    const category = useAppSelector(store => store.posts.category);
    const theme = useAppSelector(store => store.theme.value);
    const dispatch = useAppDispatch();
    const [post, setPost] = useState<IPost | undefined>(undefined);
    const { id } = useParams();
    const breadCrumbs = [
        {
            title: 'Home',
            link: '/'
        },
        {
            title: `Post ${id}`,
            link: `/${category}/${id}`
        },
    ]
    const icons = ["facebook", "twitter", "more-horizontal"];
    useEffect(() => {
        (async () => {
            const post = await dispatch(getPostById({ category: category, id: id }));
            setPost(post.payload);
        })()
    }, [id])
    return (
        <PageTemplate>
            <BreadCrumbs breadCrumbs={breadCrumbs} />
            <div className={`
            ${styles.post}
            ${theme === 'dark' ? styles.postDark : ''}
                `}>
                <h1 className={styles.title}>{post?.title}</h1>
                <img src={post?.imageUrl} className={styles.image} alt='image' />
                <p className={styles.text}>{post?.summary}</p>
                <div className={styles.buttons}>
                    {icons.map ((icon, index) =>
                     <button key={index} className={styles.button}>
                            <Icon name={icon} size={{ width: '24px', height: '24px' }} color={"#313037"}/>
                    </button>)}
                </div>
            </div>
            <Slider />
        </PageTemplate>
    );
};

export default ContentPage;