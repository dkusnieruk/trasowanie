import { useParams } from "react-router-dom";

function Post() {
    const {postId, category} = useParams();
    return (<>
        <h1>Single Post</h1>
        <h3>Post ID:{postId}</h3>
        <h3>Category: {category}</h3>
        </> 
     );
}

export default Post;