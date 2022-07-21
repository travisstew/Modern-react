import React from 'react'
import {useState, useEffect} from 'react';
import BlogList from './BlogList';

function Home() {
    const [blogs, setBlogs] = useState(null);
    const [isLoading, setLoding ] = useState(true);
   

      useEffect(()=>{
          setTimeout(()=>{
       fetch("http://localhost:8000/blogs").then(res=>{
           return res.json();
        }).then((data)=>{
          console.log(data);
          setBlogs(data)
          setLoding(false);
        })

          },1000)
 
      
      },[])
  return (
    <div className='home'>

        {isLoading && <div>Loading....</div>} 
       {blogs &&  <BlogList blogs={blogs} title="djkfaj"  />}


    </div>
  )
}

export default Home