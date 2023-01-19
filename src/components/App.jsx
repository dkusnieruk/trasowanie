import { Routes, Route } from "react-router-dom";
import NotFound from "Pages/NotFound";
import Home from "Pages/Home";
import About from 'Pages/about/index'
import Contact from "Pages/Contact";
import Blog from "Pages/blog/index";
import BlogPost from "Pages/blog/Post"
import WebappTemplate from "./WebappTemplate";
import AboutMission from 'Pages/about/Mission'
import AboutTeam from 'Pages/about/Team'
import AboutReviews from 'Pages/about/Reviews'
import '../components/App.css'

const  App = () => {
  return (
<Routes>
  <Route path="/" element={<WebappTemplate/>}>
      <Route path="react-homework-template/" element ={<Home/>}/>
  
    <Route path="react-homework-template/about" element={<About/>}>
   <Route path="mission" element={<AboutMission/>}/>
   <Route path="team" element={<AboutTeam/>}/>
   <Route path="reviews" element={<AboutReviews/>}/>
    
    </Route>
  <Route path="react-homework-template/blog" element={<Blog/>}/>
  <Route path="react-homework-template/blog/:category/:postId" element={<BlogPost/>}/>
  <Route path="react-homework-template/contact" element ={<Contact/>}/>
  <Route path="*" element={<NotFound/>}/>
  </Route>
</Routes>
  );
};

export default App;