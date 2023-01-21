import { Routes, Route } from "react-router-dom";
import NotFound from "Pages/NotFound";
import Login from "Pages/Login";
import Home from "Pages/Home";
import About from 'Pages/about/index'
// import Contact from "Pages/Contact";
import StoreWall from'Pages/shop/index'
import Blog from "Pages/blog/index";
import BlogPost from "Pages/blog/Post"
import WebappTemplate from "./WebappTemplate";
import AboutMission from 'Pages/about/Mission'
import AboutTeam from 'Pages/about/Team'
import AboutReviews from 'Pages/about/Reviews'
import Product from "Pages/shop/Product";
import '../components/App.css'
import { lazy } from "react";
import { Suspense } from "react";

const Contact= lazy(()=>{
  return new Promise((resolve) => {
    setTimeout(() => {
    return(resolve(import ("Pages/Contact")))
    }, 2000);
      
  }) 
  
})

const  App = () => {
  return (
    <Suspense fallback={<div>Loading</div>}>
<Routes>
  <Route path="/" element={<WebappTemplate/>}>
      <Route path="react-homework-template/" element ={<Home/>}/>
  
    <Route path="react-homework-template/about" element={<About/>}>
   <Route path="mission" element={<AboutMission/>}/>
   <Route path="team" element={<AboutTeam/>}/>
   <Route path="reviews" element={<AboutReviews/>}/>
    
    </Route>
  <Route path="react-homework-template/blog" element={<Blog/>}/>
  <Route path="react-homework-template/login" element={<Login/>}/>
  <Route path="react-homework-template/shop" element={<StoreWall/>}/>
  <Route path="react-homework-template/product" element={<Product/>}/>
  
  <Route path="react-homework-template/blog/:category/:postId" element={<BlogPost/>}/>
  <Route path="react-homework-template/contact" element ={<Contact/>}/>
  <Route path="*" element={<NotFound/>}/>
  </Route>
</Routes>
</Suspense>
  );
};

export default App;