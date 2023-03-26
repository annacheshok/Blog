import React, { useEffect, useState } from 'react';
import { IPost, IPosts } from '../../types';
import Post from '../../components/Post/Post';
import styles from './Posts.module.scss';
import { useAppSelector } from '../../redux/hook';

const Posts = () => {
    const { posts, count } = useAppSelector (store => store.posts);
    const [width, setWidth] = useState<number|null>(null);

    //  useEffect(() => {
    //  if (count == 0 ) {
    // const handleResizeWindow = () => setWidth(window.innerWidth - 70);
    // window.addEventListener("resize", handleResizeWindow);
    // } 
    //  }, []);

    return (
        <div className={styles.container} style={width != null ? { width: 'inherit' } : { width: width + 'px' }}>
            { posts.map((post) => <Post key={post.id} title={post.title} imageUrl={post.imageUrl} publishedAt={post.publishedAt} />)}
        </div>
    );
};

export default Posts;