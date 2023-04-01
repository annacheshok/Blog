import React, { useEffect, useState } from 'react';
import { IPost, IPosts } from '../../types';
import Post from '../../components/Post/Post';
import styles from './Posts.module.scss';
import { useAppSelector } from '../../redux/hook';

const Posts = () => {
    const { posts } = useAppSelector (store => store.posts);

    return (
        <div className={styles.container}>
            { posts.map((post) => <Post id={post.id} key={post.id} title={post.title} imageUrl={post.imageUrl} publishedAt={post.publishedAt} />)}
        </div>
    );
};

export default Posts;