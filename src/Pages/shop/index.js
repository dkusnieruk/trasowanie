import {Link, useSearchParams } from "react-router-dom";
import { useEffect } from "react";


function StoreWall() {
    const[searchParams, setSearchParams] =useSearchParams();

const category = searchParams.get('category') || "";
const size = searchParams.get('size');
const color = searchParams.get('color');

const setFilter = ( ) =>{
    const size= new Date().getTime();
setSearchParams({category:'jacket', size:size, 
color:'dark-blue', maxPrice:'1000'})
};

useEffect(()=>{
    console.log('Call Api to request');
},[searchParams] )

    return (<>
    <h1>Welcome to our store</h1>
    {category && (<h3>Category : {category}</h3>)}
    {size && (<h3>Category : {size}</h3>)}
    {color && (<h3>Category : {color}</h3>)}
  <hr/>
    <button 
    onClick={setFilter}
    >Set Filter

    </button>
    <hr/>
    <Link 
    to='/react-homework-template/product'
    state={{from:
    `/react-homework-template/shop?category=${category}&size=${size}&color=${color}&maxPrice=1000`}}
    >Product
    </Link>
    </>  );
}

export default StoreWall;