import { BlogPost } from '../../../data/@types/BlogPostInterface'
import styles from './PostBody.module.css'

export default function PostBody({post}: {post: BlogPost}){
    return (
        <div className={styles['post-container']}>
            <h1 className={styles['post-title']}>{post.title}</h1>
            <img className={styles['post-picture']} src={post.picture} alt={post.title} />
            <div className={styles['post-content']}>
                <p>{post.description}</p>
            </div>
        </div>
    )
}