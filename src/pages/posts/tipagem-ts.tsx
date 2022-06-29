import PostBody from "../../ui/components/PostBody/PostBody";
import useIndex from '../../data/hooks/pages/useIndex.page'

export default function TipagemTs(){
    const { posts } = useIndex()
    return (
        <PostBody post={posts[0]} />
    )
}