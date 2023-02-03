import React from 'react'
import axios from 'axios';
import { useState } from 'react'
const AddCommentForm = ({articleName,onArticleUpdated}) => {
    const [name,setName]=useState('');
    const [commentText,setcommentText]=useState('');

    const addcomment=async ()=>
    {const response =await axios.post(`/api/articles/${articleName}/comments`,
    {
      postedby:name,
      text:commentText,
    })
   const updatedarticle=response.data;
   onArticleUpdated(updatedarticle);
   setName('');
   setcommentText('')
    }


  return (
    <div className='flex justify-center flex-col  border-8 border-black'>
    <h3 className='underline my-4'>Add a Comment</h3>
    <label>Name:
    <input className='border-2 align-middle mx-4 border-black' value={name} onChange={e=>setName(e.target.value)} type="text"/>
    </label>
    <label>Comment :
        <textarea className='border-2 align-middle my-3 mx-4 border-black' value={commentText} onChange={e=>setcommentText(e.target.value)} row="4" col="50"/>
    </label>
    <div className='max-w-full'>
    <button className='my-5 bg-black text-white rounded-lg w-1/4' onClick={addcomment}>Add Comment</button>
    </div>
   

    </div>
  )
}

export default AddCommentForm