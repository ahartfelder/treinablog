import PostBody from "../../ui/components/PostBody/PostBody";
import useIndex from '../../data/hooks/pages/useIndex.page'

export default function JWT(){
    const { posts } = useIndex()
    return (
        <PostBody post={posts[1]} />
    )
}