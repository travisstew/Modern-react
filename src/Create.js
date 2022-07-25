import React, { useState } from 'react';
import {useHistory} from 'react-router-dom';

function Create() {

  const [title, setTitle] =useState('');
  const [body, setBody] = useState('');
  const [author, setAuthor] = useState('mario');
  const [isPending, setIsPending] = useState(false);
  const history = useHistory();


  const handleSumbit=(e)=>{
      e.preventDefault();

      const blog = {title, body, author};
      setIsPending(true);

      fetch('http://localhost:8000/blogs', {
            method:"POST",
            headers:{
              "Content-Type": "application/json"
            },
            body: JSON.stringify(blog)
      }).then(()=>{
        console.log('new blog added');
        setIsPending(false)
        // history.go(-1);
        history.push('/')
      })  
          
  }



  return (
    <div className='create'>
      <h2>Add a new blog</h2>
      <form onSubmit={handleSumbit}>
        <label>Blog title</label>
        <input type="text" required value={title} onChange={(e)=> setTitle(e.target.value)}/>

        <label>Blog body</label>
        <textarea requried value={body} onChange={(e)=> setBody(e.target.value)} ></textarea>

        <label>Blog Author</label>
        <select value={author} onChange={(e)=> setAuthor(e.target.value)}>
          <option value="mario">mario</option>
          <option value="stew">stew</option>
        </select>
        {!isPending &&<button>Add blog</button>}
        {isPending &&<button>Add blog....</button>}
      </form>

      <p>{title}</p>
      <p>{author}</p>
    </div>
  )
}

export default Create