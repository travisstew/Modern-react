import React from 'react'
import {useState, useEffect} from 'react';
import BlogList from './BlogList';
import useFetch from './useFetch';

function Home() {
  // grab data but call it blogs.
    const {data: blogs, isLoading} = useFetch("http://localhost:8000/blogs")

  return (
    <div className='home'>

        {isLoading && <div>Loading....</div>} 
       {blogs &&  <BlogList blogs={blogs} title="djkfaj"  />}


    </div>
  )
}

export default Home