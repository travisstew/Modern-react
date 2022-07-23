import React from 'react'
import { useParams } from 'react-router-dom'
import useFetch from './useFetch';

function BlogDetails() {
    const {id}= useParams();
    const {data:blog, isLoading} = useFetch("http://localhost:8000/blogs/" + id);


  return (
    <div>
       {
        isLoading && <div> Loading....</div>

       }

       {blog&&(
        <article>
          <h2>{blog.title}</h2>
          <p>written by {blog.author}</p>
          <div>{blog.body}</div>
        </article>
       )}
    </div>
    
  )
}

export default BlogDetails