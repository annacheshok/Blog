import { useEffect, useState } from "react";
import styles from './Slider.module.scss';
import { IPost } from "../../types";
import { useAppDispatch, useAppSelector } from "../../redux/hook";
import { getLatestPosts } from "../../redux/slices/postsSlice";
import Post from "../Post/Post";

const Slider = () => {
    const [latestPosts, setlatestPosts] = useState<IPost[]>([]);
    const category = useAppSelector(store => store.posts.category);
    const dispatch = useAppDispatch();

    useEffect(() => {
        (async () => {
            const latestPosts = await dispatch(getLatestPosts(category));
            setlatestPosts(latestPosts.payload);
        })()
    }, [])

    return (
        <div className={styles.container}>
            <div className={styles.posts}>
                {latestPosts.map(post => <Post id={post.id} key={post.id} title={post.title} imageUrl={post.imageUrl} publishedAt={post.publishedAt} />)}
            </div>
        </div>
    )

}

export default Slider;
