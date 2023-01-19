import { Link } from "react-router-dom"

function Home (){
    return<>
    <h1>HOME</h1>
    <p>Home page content </p>
    <p>Check my <Link to="/react-homework-template/about">about page</Link> </p>
   </>
    
}

export default Home