import { Link} from "react-router-dom";
function Blog() {
   
    return (<>
    <h2>Blog</h2>
    <ul>
        <li>
        <Link
        to="/react-homework-template/blog/sport/post1"
         >Post 1</Link>
        </li>
        <li>
        <Link
        to="/react-homework-template/blog/food/post2"
         >Post 2</Link>
        </li>
        <li>
        <Link
        to="/react-homework-template/blog/nature/post3"
         >Post 3</Link>
        </li>
    </ul>
    </>  );
}

export default Blog;