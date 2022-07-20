import React from 'react'
import {useState} from 'react';
import BlogList from './BlogList';

function Home() {
    const [blogs, setBlogs] = useState([
      {
        title: "new blog", body:"lorem ipsum .... ", author: 'stew', id: 1
      },
      {
        title: "new blog", body:"lorem ipsum .... ", author: 'sskldjflka', id: 2
      },
      {
        title: "new blog", body:"lorem ipsum .... ", author: 'steadsf;adjfw', id: 3
      },
    ])

      const handleDelete = (id)=>{
        const newBlogs = blogs.filter(blog=> blog.id !== id);
        setBlogs(newBlogs)
      }

  return (
    <div className='home'>
    <BlogList blogs={blogs} title="djkfaj"  handleDelete={handleDelete}/>
    </div>
  )
}

export default Home